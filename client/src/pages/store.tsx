import Topbar from '@/components/Topbar/Topbar'
import React from 'react'

type Props = {}

function store({}: Props) {
  return (
    <>
      <main className="bg-dark-layer-2 min-h-screen">
        <Topbar />
        <div className="text-white">Store</div>
      </main>
    </>
  )
}

export default store