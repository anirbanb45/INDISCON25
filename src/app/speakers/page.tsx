import  AnimatedGridBackground  from '@/components/animatingBackground'
import React from 'react'

export default function page() {
  return (
    <>
      <AnimatedGridBackground/>
      <div className="flex items-center justify-center h-screen ">
      <div className="text-center p-6 bg-white shadow-lg rounded-2xl">
        <h1 className="text-3xl font-bold text-gray-800">Speakers</h1>
        <p className="text-lg text-gray-600 mt-2">Coming Soon...</p>
      </div>
    </div>
    </>
  )
}
