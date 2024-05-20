import { useState, useEffect } from "react";
import PreferenceNav from "./PreferenceNav/PreferenceNav";
import Split from "react-split";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";
import { cpp } from "@codemirror/lang-cpp";
import { java } from "@codemirror/lang-java";
import { python } from "@codemirror/lang-python";
import EditorFooter from "./EditorFooter";
import { Problem,StarterCode } from "@/utils/types/problem";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "@/firebase/firebase";
import { toast } from "react-toastify";
import { problems } from "@/utils/problems";
import { useRouter } from "next/router";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import useLocalStorage from "@/hooks/useLocalStorage";
import { ImSpinner } from "react-icons/im";
type PlaygroundProps = {
	problem: Problem;
	setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
	setSolved: React.Dispatch<React.SetStateAction<boolean>>;
};

export interface ISettings {
	fontSize: string;
	lang: string;
	settingsModalIsOpen: boolean;
	dropdownIsOpen: boolean;
	dropdownLangIsOpen: boolean;
	
}

const Playground: React.FC<PlaygroundProps> = ({ problem, setSuccess, setSolved }) => {
	const [activeTestCaseId, setActiveTestCaseId] = useState<number>(0);
	const [updating,setUpdating] = useState<boolean>(false);
	const [fontSize] = useLocalStorage("vc-fontSize", "16px");
	const [lang] = useLocalStorage("vc-lang", "Javascript");
	const [settings, setSettings] = useState<ISettings>({
		fontSize: fontSize,
		lang: lang,
		settingsModalIsOpen: false,
		dropdownIsOpen: false,
		dropdownLangIsOpen: false,
	});
	let [userCode, setUserCode] = useState<string>(problem.starterCode[settings.lang]);
	// console.table(settings)
	const [user] = useAuthState(auth);
	const {
		query: { pid },
	} = useRouter();

	const handleSubmit = async () => {
		if (!user) {
			toast.error("Please login to submit your code", {
				position: "top-center",
				autoClose: 3000,
				theme: "dark",
			});
			return;
		}
		try {
			userCode = userCode.slice(userCode.indexOf(problem.starterFunctionName));
			const cb = new Function(`return ${userCode}`)();
			const handler = problems[pid as string].handlerFunction;

			if (typeof handler === "function") {
				const success = handler(cb);
				if (success) {
					toast.success("Congrats! All tests passed!", {
						position: "top-center",
						autoClose: 3000,
						theme: "dark",
					});
					setSuccess(true);
					setTimeout(() => {
						setSuccess(false);
					}, 4000);

					const userRef = doc(firestore, "users", user.uid);
					await updateDoc(userRef, {
						solvedProblems: arrayUnion(pid),
					});
					setSolved(true);
				}
			}
		} catch (error: any) {
			console.log(error.message);
			if (
				error.message.startsWith("AssertionError [ERR_ASSERTION]: Expected values to be strictly deep-equal:")
			) {
				toast.error("Oops! One or more test cases failed", {
					position: "top-center",
					autoClose: 3000,
					theme: "dark",
				});
			} else {
				toast.error(error.message, {
					position: "top-center",
					autoClose: 3000,
					theme: "dark",
				});
			}
		}
	};

	useEffect(() => {
		const item = localStorage.getItem(`code-${pid}`);
		if(item !== null){
			const code:StarterCode = JSON.parse(item);
			if (user) {
				setUserCode(code ? code[settings.lang] : problem.starterCode[settings.lang]);
			} else {
				setUserCode(problem.starterCode[settings.lang]);
			}
		}else{
			const data = {
				"Java":problem.starterCode["Java"],
				"Python":problem.starterCode["Python"],
				"C++":problem.starterCode["C++"],
				"Javascript":problem.starterCode["Javascript"]
			}
			localStorage.setItem(`code-${pid}`, JSON.stringify(data));
		}
		
	}, [pid, user, problem.starterCode,settings]);

	const onChange = (value: string) => {
		const item = localStorage.getItem(`code-${pid}`)
		if(item !== null){
			const code:StarterCode = JSON.parse(item);
			const newCode = {
				...code,[settings.lang]:value
			}
			localStorage.setItem(`code-${pid}`, JSON.stringify(newCode));
		}
	};
	//Changing the updating state(De-bouncing)
	useEffect(()=>{
		const timer:NodeJS.Timeout = setTimeout(()=>{
			setUpdating(true);
			onChange(userCode);
			setTimeout(()=>{
				setUpdating(false);
			},1500);
		},1000);
		return () => clearTimeout(timer);
	},[userCode])
	return (
		<div className='flex flex-col bg-dark-layer-1 relative overflow-x-hidden'>
			<PreferenceNav settings={settings} setSettings={setSettings} />

			<Split className='h-[calc(100vh-94px)]' direction='vertical' sizes={[60, 40]} minSize={60}>
				<div className='w-full overflow-auto relative rounded'>
					<CodeMirror
						value={userCode}
						theme={vscodeDark}
						onChange={(val)=>setUserCode(val)}
						extensions={settings.lang === "C++"?[cpp()]:settings.lang === "Java"?[java()]:settings.lang === "Python"?[python()]:[javascript()]}
						style={{ fontSize: settings.fontSize }}
					/>
					<div className="text-white absolute ml-1 mb-1 bottom-1 text-xs">{updating?<span className="flex items-center gap-1"><ImSpinner className="animate-spin" /><span>saving...</span></span>:"saved"}</div>
				</div>
				<div className='w-full px-5 overflow-auto'>
					{/* testcase heading */}
					<div className='flex h-10 items-center space-x-6'>
						<div className='relative flex h-full flex-col justify-center cursor-pointer'>
							<div className='text-sm font-medium leading-5 text-white'>Testcases</div>
							<hr className='absolute bottom-0 h-0.5 w-full rounded-full border-none bg-white' />
						</div>
					</div>

					<div className='flex'>
						{problem.examples.map((example, index) => (
							<div
								className='mr-2 items-start mt-2 '
								key={example.id}
								onClick={() => setActiveTestCaseId(index)}
							>
								<div className='flex flex-wrap items-center gap-y-4'>
									<div
										className={`font-medium items-center transition-all focus:outline-none inline-flex bg-dark-fill-3 hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap
										${activeTestCaseId === index ? "text-white" : "text-gray-500"}
									`}
									>
										Case {index + 1}
									</div>
								</div>
							</div>
						))}
					</div>

					<div className='font-semibold my-4'>
						<p className='text-sm font-medium mt-4 text-white'>Input:</p>
						<div className='w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2'>
							{problem.examples[activeTestCaseId].inputText}
						</div>
						<p className='text-sm font-medium mt-4 text-white'>Output:</p>
						<div className='w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2'>
							{problem.examples[activeTestCaseId].outputText}
						</div>
					</div>
				</div>
			</Split>
			<EditorFooter handleSubmit={handleSubmit} />
		</div>
	);
};
export default Playground;
