import React from 'react'

const forgot = () => {
  return (
   <>
  
    <div className="bg-blue-200 h-[100vh] flex flex-col">
    <div className="container max-w-[40vw]  m-auto h-[100vh] flex-1 flex flex-col items-center  ">
        <div className="bg-white px-6 py-2 rounded shadow-md text-black  w-full">
       <input 
                type="email"
                className="  block py-1 m-3 w-full  bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                name="email"
                placeholder="Email" />
                <button className='bg-blue-500  block m-3 w-full text-center py-1 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1'>Email</button>
 </div>

       

       
    </div>
</div></>
  )
}

export default forgot