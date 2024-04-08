import React from 'react'
import BG from '../assets/bg.png';


const SignUp = () => {
  return (
    <div className='flex'>
      <div className='w-4/12 pt-10 text-2xl pl-10 bg-[#F2D184] min-h-screen'>
        <span id='logo'>multisiteform</span>
        <h2 className='text-xl mt-4'>Discover the world's top <br /> Designers & Creatives.</h2>
        <div className='w-full flex justify-center items-center mt-10'>
        <img src={BG} alt="" className='w-8/12' />
        </div>
      </div>
      <div className='w-8/12'>
        <div className='justify-end flex m-4'>
            <p className='text-md'>Already a member? <a className='text-blue-500' href="/signin">Sign In</a></p>
        </div>
        <div>
            <h3>Sign up to Multi Site Form</h3>
            <form>
                <div>
                    
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
