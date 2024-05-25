import React, { useState } from 'react'
import ProblemsTable from "@/components/ProblemsTable/ProblemsTable";

type Props = {}

function ProblemList({}: Props) {
    const [loadingProblems, setLoadingProblems] = useState<boolean>(true);
  return (
    <div className='relative overflow-x-auto md:pl-24 pl-2 w-full md:px-1'>
					{loadingProblems && (
						<div className='max-w-[1200px] mx-auto sm:w-7/12 w-full animate-pulse'>
							{[...Array(10)].map((_, idx) => (
								<LoadingSkeleton key={idx} />
							))}
						</div>
					)}
					<table className='text-sm text-left text-gray-500 dark:text-gray-400 sm:w-7/12 w-full max-w-[1200px]'>
						{!loadingProblems && (
							<thead className='text-xs text-gray-700 uppercase dark:text-gray-400 border-b'>
								<tr>
									<th scope='col' className='pl-1 py-3 w-0 font-medium'>
										Status
									</th>
									<th scope='col' className='pl-10 py-3 w-0 font-medium'>
										Title
									</th>
									<th scope='col' className='pl-56 py-3 w-0 font-medium'>
										Difficulty
									</th>
									<th scope='col' className='pl-36 py-3 w-0 font-medium'>
										Category
									</th>
									<th scope='col' className='pl-36 pr-28 py-3 w-0 font-medium'>
										Solution
									</th>
								</tr>
							</thead>
						)}
						<ProblemsTable setLoadingProblems={setLoadingProblems} />
					</table>
				</div>
  )
}
const LoadingSkeleton = () => {
	return (
		<div className='flex items-center space-x-12 mt-4 px-6'>
			<div className='w-6 h-6 shrink-0 rounded-full bg-dark-layer-1'></div>
			<div className='h-4 sm:w-52  w-32  rounded-full bg-dark-layer-1'></div>
			<div className='h-4 sm:w-52  w-32 rounded-full bg-dark-layer-1'></div>
			<div className='h-4 sm:w-52 w-32 rounded-full bg-dark-layer-1'></div>
			<span className='sr-only'>Loading...</span>
		</div>
	);
};
export default ProblemList