import Topbar from '@/components/Topbar/Topbar'
import React from 'react'

type Props = {}

function store({}: Props) {
  return (
    <>
      <main className="bg-dark-layer-2 min-h-screen">
        <Topbar />
        <div className="text-white main-h flex items-center justify-center font-sans md:text-3xl text-sm">Store</div>
      </main>
    </>
  )
}

export default store