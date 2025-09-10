import React from 'react'

export default function IcecreamCard({ image, alt = 'Icecream', selected = false }) {
  return (
    <button className={`group relative rounded-lg transition focus:outline-none ring-2 ring-pink-400/80`}>
      <div className="rounded-lg bg-white/10 border-l border-r border-b border-white/30 backdrop-blur-sm p-1 w-14 h-18 sm:w-16 sm:h-20 flex items-end justify-center overflow-visible">
        <img 
          src={image} 
          alt={alt} 
          className="h-24 sm:h-26 object-contain object-center drop-shadow-sm transition-transform group-hover:-translate-y-0.5 filter-none" 
          style={{
            imageRendering: 'high-quality',
            WebkitImageRendering: 'high-quality',
            transform: 'rotate(2deg)'
          }}
        />
      </div>
    </button>
  )
}



