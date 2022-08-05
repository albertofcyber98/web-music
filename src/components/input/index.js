import React from 'react'
import { Field, ErrorMessage } from 'formik'

export default function Input({label, type, name, placeholders}) {
  return (
    <>
      <div className='mt-3 text-black text-lg'>
        <label>{label}</label>
      </div>
      <div className='mt-2'>
        <Field type={type} name={name} className='w-full border rounded-md h-14 bg-neutral-50 pl-4' placeholder={placeholders} />
        <div className="text-red-500">
        <ErrorMessage name={name}/>          
        </div>
      </div>
    </>
  )
}
