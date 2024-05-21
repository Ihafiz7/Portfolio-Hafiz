import React from 'react'

const Loading = () => {
  return (
    <div className='h-screen w-screen bg-black '>
      <svg viewBox='0 0 400 160'>
        <text x='50%' y='50%' dy='.32em' textAnchor='middle' className='text-4xl tracking-widest font-bold italic text-svg'>
          hafiz.dev 
        </text>
      </svg>
    </div>
  )
}

export default Loading