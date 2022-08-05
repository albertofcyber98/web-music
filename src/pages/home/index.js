import React from 'react'
import Logo from '../../components/logo'
import Chat from '../../assets/icon/chat-icon.png'
import Book from '../../assets/icon/book-icon.png'
import Ellipse from '../../assets/icon/ellipse-icon.png'
import Logout from '../../assets/icon/logout-icon.png'
import Data from '../../mock/mock_data.json'
import List from '../../components/list'

export default function Home() {
    const IconMenu = [
        { id: 1, img: Ellipse, label: 'My music list' },
        { id: 2, img: Book, label: 'My lyrics collection' },
        { id: 3, img: Chat, label: 'Chat with musicians' },
        { id: 4, img: Logout, label: 'Logout' }
    ]
    const dataMock = Data.song_playlist.data;

    return (
        <div className='flex'>
            <div className='bg-[#f02020] h-screen pt-8 w-[100px] sm:w-[100px] md:w-[300px] fixed'>
                <div className='px-5'>
                    <Logo />                  
                </div>
                <div className='mt-20 mx-2'>
                    {
                        IconMenu.map((item) => {
                            return (
                                <div key={item.id} className='py-3 px-5 mb-7 hover:rounded-lg hover:bg-[#f04747] transition-all duration-500 flex cursor-pointer'>
                                    <img src={item.img} alt="icon-chat" width="22px" />
                                    <h4 className='hidden sm:hidden md:block my-auto ml-5 text-white'>{item.label}</h4>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='bg-[#212024] w-full text-white ml-[50px] sm:ml-[100px] md:ml-[280px] lg:ml-[280px] xl:ml-[250px] 2xl:ml-[300px] pt-10 px-20'>
                <div className='md:flex justify-between'>
                    <div className='mb-2'>
                        <h1 className='text-3xl'>My music list</h1>
                    </div>
                    <div>
                        <input type="text" name="" onChange={(e)=>console.log(e.target.value)} placeholder='Search' className='bg-neutral-700 py-2 pl-6 text-white rounded-lg w-[285px]'/>
                    </div>
                </div>
                <p className='mt-1'>My recent search list</p>
                <div className='my-8'>
                    {
                        dataMock.map((data) => {
                            return (
                                <List key={data.id} data={data} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
