import React from 'react'
import imageHero from '../../assets/img/music-hero.png'
import iconGmail from '../../assets/icon/gmail.png'
import iconMicro from '../../assets/icon/microsoft.png'
import iconYahoo from '../../assets/icon/yahoo.png'
import iconApple from '../../assets/icon/apple.png'
import iconFace from '../../assets/icon/facebook.png'

export default function Login() {
    const dataIcon = [
        { id: 1, icon: iconGmail, size:39},
        { id: 2, icon: iconMicro, size:46},
        { id: 3, icon: iconYahoo, size:46},
        { id: 4, icon: iconApple, size:46},
        { id: 5, icon: iconFace, size:46},
    ];
  return (
      <>
      <div className='gradient-container pb-10'>
        <div className="absolute hidden md:hidden lg:block md:w-[350px] md:mt-[240px] md:ml-[60px] lg:w-[400px] lg:mt-[120px] lg:ml-[80px] xl:w-[450px] xl:mt-[100px] xl:ml-[90px] 2xl:w-[500px] 2xl:ml-[90px] 2xl:mt-[110px] transition-all ease-in duration-500">
            <img src={imageHero}  alt="Hero"/>
        </div>
        <div className='mx-auto pt-[50px] sm:pt-[50px] md:pt-[50px] lg:pt-[50px] xl:pt-[40px] 2xl:pt-[40px] w-[420px] sm:w-[440px] md:w-[450px] lg:w-[500px] xl:w-[530px] 2xl:w-[560px] transition-all ease-in duration-500'>
            <div className='relative bg-white shadow-slate-200 shadow-md rounded-md sm:rounded-md md:rounded-md lg:rounded-lg xl:rounded-xl px-5 py-4 lg:py-7 xl:py-7 2xl:py-8'>
                    <h4>Hello, &#128075;</h4>
                    <h1 className='font-bold text-2xl mt-2'>Welcome to the black parade</h1>
                    <p className='text-neutral-500 mt-2'>Please <span className='font-bold'>enter your details</span> here</p>
                    <form>
                    <div className='mt-4 text-black text-lg'>
                    <label for="email">Email or Username</label>
                    </div>
                    <div className='mt-2'>
                    <input type="email" name="email" className='w-full border rounded-md h-12 bg-neutral-50 pl-4' placeholder='eg: homersimpsons@gmail.com / homerSimps'/>
                    </div>
                    <div className='mt-3'>
                    <label for="password" className=' text-black text-lg'>Password</label>
                    </div>
                    <div className='mt-2'>
                    <input type="text" name="password" className='w-full border rounded-md h-12 bg-neutral-50 pl-4' placeholder='Minimun 8 character' />
                    </div>
                    <div className='block bg-[#f02020] text-white font-bold text-lg text-center mt-3 py-4 rounded-md cursor-pointer'>
                    <button type="submit" name='submit'>Log in</button>
                        </div>
                </form>
                <p className='text-blue-600 mt-2 text-right underline'>Forget Password?</p>
                <div className='mt-5'>
                    <hr />
                        <div className='text-center mt-[-13px] bg-white w-8 ml-[46%] text-slate-500'>
                    Or
                    </div>
                    </div>
                    <p className='text-black text-center mt-5'>Login using</p>
                    <div className='flex mt-3 justify-center'>
                        {dataIcon.map((data) => { 
                            return (
                            <div className='mx-1'>
                                <img src={data.icon} width={data.size} className='cursor-pointer' alt="icon" key={data.id} />
                            </div>
                            )
                        }) }
                    </div>
                    <p className='text-center mt-8'>Not registered? <span className='text-blue-600 underline'>Create an account</span></p>
                </div>
            </div>
        </div>
      </>
  )
}
