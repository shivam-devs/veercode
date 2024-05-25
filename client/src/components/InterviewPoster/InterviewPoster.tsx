import Image from 'next/image'
import React from 'react'

type Props = {}

function InterviewPoster({}: Props) {
  return (
    <div className='w-full flex items-center justify-between gap-3 mt-10 p-3 md:pl-24 pl-5 overflow-x-auto'>
        {[...Array(3)].map((e,idx)=><span className='cursor-pointer'>
          <Image src={`/interview${idx+1}.png`} width={300} height={300} alt='Image' key={idx} className='rounded-md pointer-events-none' />
        </span>
        )}
    </div>
  )
}

export default InterviewPoster