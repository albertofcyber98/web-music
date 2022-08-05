import React from 'react'

export default function Button({types, label}) {
    if (types === 'primary') {
        return (
            <div className='block bg-[#f02020] text-white font-bold text-lg text-center mt-3 py-4 rounded-md cursor-pointer'>
                <button type="submit" name='submit'>{label}</button>
            </div>
        )
    } else if (types === 'secondary') {
        return (
            <div className='block transition-all ease-in duration-500 hover:bg-[#cfc8c8] bg-[#D8D8D8] text-black text-lg text-center mt-4 py-4 rounded-md cursor-pointer'>
                <button type="submit" name='submit'>Oh, I have account <br/> <span className='text-[#f02020] font-semibold'>Log now</span></button>
            </div>
        )
    }
}
