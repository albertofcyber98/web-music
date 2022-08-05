import React from 'react'
import EllipsesEdit from '../../assets/icon/ellipse.png'
import StatusList from '../status-list'

export default function List({data}) {
  return (
    <>
        <div className='bg-neutral-600 w-full rounded-2xl flex justify-between mb-4'>
            <div className='bg-neutral-700 flex justify-between w-full rounded-2xl py-3'>
                  <div className={`h-12 absolute rounded-md ${(data.downloaded)?'bg-[#32E6B7]':'bg-[#f02020]'}  w-2 mt-[7px] ml-[-3px]`}></div>
                <div className='pl-7'>
                    <h4>{data.song_name}</h4>
                    <h6 className='text-[14px]'>{data.band_name}</h6>
                    <p className='text-[12px]'>{data.year}</p>
                </div>
                  <StatusList status={data.downloaded} />
            </div>
            <div className='w-20 my-auto justify-center'>
                <div className='w-5 ml-6 cursor-pointer'>
                    <img src={EllipsesEdit} alt="iconEllipse"/>
                </div>
            </div>
        </div>
    </>
  )
}
