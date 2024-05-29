import Image from 'next/image'
import React from 'react'

type Props = {}

function InterviewPoster({}: Props) {
  return (
    <div className='w-full flex items-center md:justify-between gap-3 mt-10 p-3 md:pl-24 pl-5 overflow-x-auto'>
        {[...Array(3)].map((e,idx)=><div key={idx} className='cursor-pointer w-[50%] md:w-auto shrink-0'>
          <Image src={`/interview${idx+1}.png`} width={300} height={300} alt='Image' key={idx} className='rounded-md pointer-events-none' />
        </div>
        )}
    </div>
  )
}

export default InterviewPoster