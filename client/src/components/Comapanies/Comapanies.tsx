import React from 'react'
import { companies } from '@/utils/Companies/Companies'
type ComapaniesProps = {}

function Comapanies({}: ComapaniesProps) {
  return (
    <div className='h-full w-[70%] text-gray-300 text-sm bg-dark-layer-1 flex flex-col items-center justify-center p-3 px-5 rounded-xl relative' >
        <span className='w-full'>Trending Companies</span>
        <div className="flex flex-wrap px-3 w-full gap-y-4 gap-x-2 mt-3">
            {companies.map((ele,idx)=><div key={idx} className='bg-gray-700 rounded-lg p-2 flex gap-2 justify-between'><span>{ele.name}</span><span className='flex items-center justify-center rounded-lg bg-yellow-600 text-black p-2 h-5 font-sans'>{ele.cnt}</span></div>)}
        </div>
    </div>
  )
}

export default Comapanies