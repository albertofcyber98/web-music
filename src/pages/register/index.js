import React from 'react'
import Logo from '../../components/logo';
import imageHero from '../../assets/img/music-hero.png'
import './index.css'
import Button from '../../components/button';
import Input from '../../components/input';

export default function Register() {
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
            <div className='relative bg-white shadow-slate-200 shadow-md rounded-md sm:rounded-md md:rounded-md lg:rounded-lg xl:rounded-xl px-5 py-4 lg:py-7 xl:py-7 2xl:py-8 overflow-y-auto h-[560px] xl:h-[630px] scroll-bar'>                    
              <h1 className='font-bold text-2xl mt-2'>Create new account?</h1>
              <p className='text-neutral-500 mt-2'>Create new account to experince the awesomeness of music</p>
              <form>
                <Input
                label='User Name'
                type='text'
                name='username'
                placeholders='e.g: TomJohn'
                />
                <Input
                label='Email'
                type='email'
                name='email'
                placeholders='e.g: example@email.com'
                />
                <Input
                label='Name'
                type='text'
                name='name'
                placeholders='e.g: Tom John'
                />
                <Input
                label='Mobile Number'
                type='text'
                name='mobileNumber'
                placeholders='e.g: +0123456789'
                />
                <Input
                label='Password'
                type='password'
                name='password'
                placeholders='Minimum 8 characters'
                />
                <Input
                label='Re-enter Password'
                type='password'
                name='rePassword'
                placeholders='Minimum 8 characters'
                />
                <Button type='primary' label='Log out' />
                <Button type='secondary' />                    
                </form>
                </div>
            </div>
        </div>
      </>
  )
}
