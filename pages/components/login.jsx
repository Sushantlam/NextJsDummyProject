import React from 'react'
import Link from "next/link"

const login = () => {
  return (
    <div className="bg-blue-200 h-[100vh] flex flex-col">
   <div className="container  max-w-[40vw] max-h-[50vh] m-auto h-[100vh] flex-1 flex flex-col justify-center items-center  ">
       <div className="bg-white mb-8 h-full px-6 py-2 rounded shadow-md text-black  w-full">
            <h1 className="mb-8 text-3xl text-center">Sign In</h1>
           

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
              
            <button
                type="submit"
                className="bg-blue-500 block py-1 m-3 w-full text-center py-1 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
            >Log In</button>

            <div className="text-center text-sm text-grey-dark mt-4">
                By signing up, you agree to the 
                <a className="no-underline -b -grey-dark text-grey-dark" href="#">
                    Terms of Service
                </a> and 
                <a className="no-underline -b -grey-dark text-grey-dark" href="#">
                    Privacy Policy
                </a>
            </div>

           <Link href={"/components/forgot"}> <p className='text-blue-500 text-sm text-center hover:cursor-pointer hover:text-red-600'>Forgotten Password?</p>
           </Link> </div>

       

       
    </div>
</div>
  )
}

export default login