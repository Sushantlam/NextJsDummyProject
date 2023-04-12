import React from 'react'
import Link from 'next/link';

const signup = () => {
  return (
    <>
   
<div className="bg-blue-200 min-h-screen flex flex-col">
<div className="container  max-w-[40vw] max-h-[50vh] m-auto h-[100vh] flex-1 flex flex-col justify-center items-center  ">
      <div className="bg-white px-6 py-8 mb-8rounded shadow-md text-black  w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <input 
                        type="text"
                        className="  block py-1 m-3 w-full  bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        name="fullname"
                        placeholder="Full Name" />

                   <input 
                        type="email"
                        className="  block py-1 m-3 w-full  bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        name="email"
                        placeholder="Email" />

                  <input 
                        type="password"
                        className="  block py-1 m-3 w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        name="password"
                        placeholder="Password" />
                        <input 
                        type="password"
                        className="  block py-1 m-3 w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        name="ConfirmPassword"
                        placeholder="Confirm Password" />

                    <button
                        type="submit"
                        className=" bg-blue-500  block py-1 m-3 w-full text-center py-1 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                    >Create Account</button>

                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a className="no-underline -b -grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a className="no-underline -b -grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div className="text-grey-dark mt-6">
                    Already have an account? 
                 <Link href={'/components/login'}> 
                      <span className='text-blue-500'> Log in</span>  
                   </Link> 
                </div>
            </div>
        </div>
    </>
  )
}

export default signup