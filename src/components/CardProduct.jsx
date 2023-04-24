import React from 'react'

export default function CardProduct({image, title, price}) {
  return (
    <div id='card' className='w-[302.5px] h-[480px] flex flex-col'>
      <div className={`w-[302.5px] h-[480px] bg-no-repeat bg-cover`} style={{backgroundImage:`url(${image})`}}>
      </div>
      <div>
        <h1 className='text-[32px] font-bold text-center'>{title}</h1>
      </div>
      <div className='flex justify-center'>
        <span className='relative'>
          <span></span>
          <span className='text-[16px] font-medium'>{price}</span>
        </span>
      </div>
    </div>
  )
}
