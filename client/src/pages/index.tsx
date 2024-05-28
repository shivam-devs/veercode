import Calander from "@/components/Calander/Calander";
import Comapanies from "@/components/Comapanies/Comapanies";
import InterviewPoster from "@/components/InterviewPoster/InterviewPoster";
import ProblemList from "@/components/ProblemList/ProblemList";
import Sessions from "@/components/Sessions/Sessions";
import StudyPlans from "@/components/StudyPlans/StudyPlans";
import Topbar from "@/components/Topbar/Topbar";
import useHasMounted from "@/hooks/useHasMounted";

export default function Home() {
	const hasMounted = useHasMounted();
	if (!hasMounted) return null;

	return (
		<>
			<main className='bg-dark-layer-2 min-h-screen select-none'>
				<Topbar />
				<div className="flex overflow-y-auto items-center xl:items-start xl:flex-row flex-col gap-0 p-1 main-h">
					{/* Left-Side Part */}
					<div className="flex h-auto w-full md:w-[70%] flex-col">
						<div className=" w-full"><InterviewPoster /></div>
						<div className=" w-full"><StudyPlans /></div>
						<div className=" w-full"><ProblemList /></div>
					</div>
					{/* Right-Side Part */}
					<div className="flex h-auto w-full md:w-[30%] flex-col pt-14 p-1 gap-5 justify-between">
						<div className="w-full flex justify-center"><Calander /></div>
						<div className="w-full flex justify-center"><Comapanies /></div>
						<div className="w-full flex justify-center"><Sessions /></div>
					</div>
				</div>		
			</main>
		</>
	);
}


