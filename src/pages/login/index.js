import React from 'react'
import Logo from '../../components/logo';
import imageHero from '../../assets/img/music-hero.png'
import iconGmail from '../../assets/icon/gmail.png'
import iconMicro from '../../assets/icon/microsoft.png'
import iconYahoo from '../../assets/icon/yahoo.png'
import iconApple from '../../assets/icon/apple.png'
import iconFace from '../../assets/icon/facebook.png'
import Button from '../../components/button';
import Input from '../../components/input';

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
                <div className='absolute ml-5 mt-3 w-[60px] hidden md:hidden lg:block'>
                    <Logo/>
                </div>
            <div className="absolute hidden md:hidden lg:block md:w-[350px] md:mt-[240px] md:ml-[60px] lg:w-[400px] lg:mt-[120px] lg:ml-[80px] xl:w-[380px] xl:mt-[160px] xl:ml-[90px] 2xl:w-[400px] 2xl:ml-[90px] 2xl:mt-[150px] transition-all ease-in duration-500">
                <img src={imageHero}  alt="Hero"/>
            </div>
        <div className='mx-auto pt-[50px] sm:pt-[50px] md:pt-[50px] lg:pt-[50px] xl:pt-[40px] 2xl:pt-[40px] w-[420px] sm:w-[440px] md:w-[450px] lg:w-[500px] xl:w-[530px] 2xl:w-[560px] transition-all ease-in duration-500'>
            <div className='relative bg-white shadow-slate-200 shadow-md rounded-md sm:rounded-md md:rounded-md lg:rounded-lg xl:rounded-xl px-5 py-4 lg:py-7 xl:py-7 2xl:py-8'>
                <h4>Hello, &#128075;</h4>
                <h1 className='font-bold text-2xl mt-2'>Welcome to the black parade</h1>
                <p className='text-neutral-500 mt-2'>Please <span className='font-bold'>enter your details</span> here</p>
                    <form>
                        <Input
                            label='Email or Username'
                            type='text'
                            name='email'
                            placeholders='eg: homersimpsons@gmail.com / homerSimps'
                        />
                        <Input
                            label='Password'
                            type='password'
                            name='password'
                            placeholders='Minimun 8 character'
                        />
                        <Button type='primary' label='Log in'/>
                    </form>
                <p className='text-blue-600 mt-2 text-right underline'>Forget Password?</p>
                <div className='mt-5'>
                    <hr />
                        <div className='text-center mt-[-13px] bg-white w-8 ml-[46%] text-slate-500'>
                    Or
                    </div>
                    </div>
                    <p className='text-black text-center mt-3'>Login using</p>
                    <div className='flex mt-3 justify-center'>
                        {dataIcon.map((data) => { 
                            return (
                            <div className='mx-1'>
                                <img src={data.icon} width={data.size} className='cursor-pointer' alt="icon" key={data.id} />
                            </div>
                            )
                        }) }
                    </div>
                    <p className='text-center mt-6'>Not registered? <span className='text-blue-600 underline'>Create an account</span></p>
                </div>
            </div>
        </div>
        </>
    )
}
