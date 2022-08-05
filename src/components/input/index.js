import React from 'react'

export default function Input({label, type, name, placeholders}) {
  return (
    <>
      <div className='mt-3 text-black text-lg'>
        <label for={name}>{label}</label>
      </div>
      <div className='mt-2'>
        <input type={type} name={name} id={name} className='w-full border rounded-md h-14 bg-neutral-50 pl-4' placeholder={placeholders} />
      </div>
    </>
  )
}
