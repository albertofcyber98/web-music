import React from 'react'
import Logo from '../../components/logo';
import imageHero from '../../assets/img/music-hero.png'
import './index.css'
import Button from '../../components/button';
import Input from '../../components/input';
import { Formik, Form } from 'formik'
import * as Yup from 'yup';

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
                <Formik
              initialValues={{
                email: '',
                password: '',
                username: '',
                mobileNumber: '',
                rePassword: '',
                nama: ''
              }}
                    validationSchema={Yup.object({
                        email: Yup.string()
                            .email('Invalid email address')
                            .max(70,'No more than 70 characters')
                            .min(5, 'Cannot be less than 5 character')
                            .required('Required'),
                        password: Yup.string()
                            .max(25,'No more than 25 characters')
                            .min(8, 'Cannot be less than 8 character')
                            .required('Required'),
                        mobileNumber: Yup.string()
                            .max(14,'No more than 14 number')
                            .min(8, 'Cannot be less than 8 numbers')
                            .required('Required'),
                        nama: Yup.string()
                            .max(50,'No more than 50 characters')
                            .min(2, 'Cannot be less than 2 character')
                            .required('Required'),
                        username: Yup.string()
                            .max(18,'No more than 18 characters')
                            .min(6, 'Cannot be less than 6 character')
                            .required('Required'),
                        rePassword: Yup.string()
                            .max(25,'No more than 25 characters')
                            .min(8, 'Cannot be less than 8 character')
                            .required('Required'),
                    })}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                        }, 400);
                    }}
                >
                    <Form>
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
                      name='nama'
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
                        <Button type='submit' types='primary' label='Log out' />
                        <Button types='secondary' /> 
                    </Form>
                </Formik>  
                </div>
            </div>
        </div>
      </>
  )
}
