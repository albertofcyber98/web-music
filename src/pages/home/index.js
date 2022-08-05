import React from 'react'
import Logo from '../../components/logo'
import EllipsesEdit from '../../assets/icon/ellipse.png'
import Chat from '../../assets/icon/chat-icon.png'
import Book from '../../assets/icon/book-icon.png'
import Ellipse from '../../assets/icon/ellipse-icon.png'
import Logout from '../../assets/icon/logout-icon.png'

export default function Home() {
    return (
        <div className='flex'>
            <div className='bg-[#f02020] h-screen pt-8 w-[320px]'>
                <div className='px-5'>
                    <Logo />                  
                </div>
                <div className='mt-20 mx-2'>
                    <div className='py-3 px-5 mb-7 hover:rounded-lg hover:bg-[#f04747] transition-all duration-500 flex cursor-pointer'>
                        <img src={Ellipse} alt="icon-chat" width="22px" />
                        <h4 className='my-auto ml-5 text-white'>My music list</h4>
                    </div>
                    <div className='py-3 px-5 mb-7 hover:rounded-lg hover:bg-[#f04747] transition-all duration-500 flex cursor-pointer'>
                        <img src={Book} alt="icon-chat" width="22px" />
                        <h4 className='my-auto ml-5 text-white'>My lyrics collection</h4>
                    </div>
                    <div className='py-3 px-5 mb-7 hover:rounded-lg hover:bg-[#f04747] transition-all duration-500 flex cursor-pointer'>
                        <img src={Chat} alt="icon-chat" width="22px" />
                        <h4 className='my-auto ml-5 text-white'>Chat with musicians</h4>
                    </div>
                    <div className='py-3 px-5 mb-7 hover:rounded-lg hover:bg-[#f04747] transition-all duration-500 flex cursor-pointer'>
                        <img src={Logout} alt="icon-chat" width="22px" />
                        <h4 className='my-auto ml-5 text-white'>Logout</h4>
                    </div>
                </div>
            </div>
            <div className='bg-[#212024] w-full text-white pt-10 px-20'>
                <div className='flex justify-between'>
                    <div>
                        <h1 className='text-3xl'>My music list</h1>
                    </div>
                    <div>
                        <input type="text" name="" placeholder='Search' className='bg-neutral-700 py-2 pl-6 text-white rounded-lg w-[285px]'/>
                    </div>
                </div>
                <p className='mt-1'>My recent search list</p>
                <div className='my-8'>
                    <div className='bg-neutral-600 w-full rounded-2xl flex justify-between'>
                        <div className='bg-neutral-700 flex justify-between w-full rounded-2xl py-3'>
                            <div className='h-12 absolute rounded-md bg-[#32E6B7] w-2 mt-[7px] ml-[-3px]'></div>
                                <div className='pl-7'>
                                    <h4>Smeels like teen spirit</h4>
                                    <h6 className='text-[14px]'>Nirwana</h6>
                                    <p className='text-[12px]'>1991</p>
                                </div>
                                <div className='my-auto mr-10'>
                                    <button type="" className='bg-[#32E6B7] font-bold text-black px-6 py-2 rounded-2xl text-[13px]'>Already Download</button>
                                </div>
                            </div>
                            <div className='w-20 my-auto justify-center'>
                                <div className='w-5 ml-6 cursor-pointer'>
                                    <img src={EllipsesEdit} alt="iconEllipse"/>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className='bg-neutral-600 w-full rounded-2xl flex justify-between'>
                    <div className='bg-neutral-700 flex justify-between w-full rounded-2xl py-3'>
                        <div className='h-12 absolute rounded-md bg-[#32E6B7] w-2 mt-[7px] ml-[-3px]'></div>
                        <div className='pl-7'>
                            <h4>Smeels like teen spirit</h4>
                            <h6 className='text-[14px]'>Nirwana</h6>
                            <p className='text-[12px]'>1991</p>
                        </div>
                        <div className='my-auto mr-10'>
                            <button type="" className='bg-[#32E6B7] font-bold text-black px-6 py-2 rounded-2xl text-[13px]'>Already Download</button>
                        </div>
                    </div>
                    <div className='w-20 my-auto justify-center'>
                        <div className='w-5 ml-6 cursor-pointer'>
                            <img src={EllipsesEdit} alt="iconEllipse"/>
                        </div>
                    </div>
                </div>
                </div>
            </div>
  )
}
