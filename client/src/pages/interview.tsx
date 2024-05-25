import Topbar from '@/components/Topbar/Topbar'
import React from 'react'

type Props = {}

function interview({}: Props) {
  return (
    <>
			<main className='bg-dark-layer-2 min-h-screen'>
				<Topbar />	
                <div className='text-white'>Interview</div>
			</main>
		</>
  )
}

export default interview