import InterviewPoster from "@/components/InterviewPoster/InterviewPoster";
import ProblemList from "@/components/ProblemList/ProblemList";
import StudyPlans from "@/components/StudyPlans/StudyPlans";
import Topbar from "@/components/Topbar/Topbar";
import useHasMounted from "@/hooks/useHasMounted";

export default function Home() {
	const hasMounted = useHasMounted();
	if (!hasMounted) return null;

	return (
		<>
			<main className='bg-dark-layer-2 min-h-screen'>
				<Topbar />
				<div className="flex overflow-y-auto md:flex-row flex-col p-1 main-h">
					{/* Left-Side Part */}
					<div className="flex h-full w-full md:w-[70%] flex-col">
						<div className=" w-full"><InterviewPoster /></div>
						<div className=" w-full"><StudyPlans /></div>
						<div className=" w-full"><ProblemList /></div>
					</div>
					{/* Right-Side Part */}
					<div className="flex h-full w-full md:w-[30%] bg-yellow-500 flex-col p-1 justify-between">
						<div className="w-full h-[40%]">Calander</div>
						<div className="w-full h-[60%]">Company</div>
					</div>
				</div>		
			</main>
		</>
	);
}


