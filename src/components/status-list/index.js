import React from 'react'

export default function StatusList({status}) {
    return (
        <>
            <div className='my-auto mr-10'>
                <button type="" className={`${(status)? 'bg-[#32E6B7] text-black':'border-2 border-[#f02020] text-[#f02020]'} font-bold  px-6 py-2 rounded-2xl text-[13px]`}>{(status)?'Already Download':'Not Yet, Download Now !'}</button>
            </div>
        </>
    )
}
