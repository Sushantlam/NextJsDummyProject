import Image from 'next/image'
import Link from 'next/link';
import React, { useRef } from 'react'
import { AiOutlineShoppingCart, AiOutlineClose, AiOutlinePlusCircle, AiOutlineMinusCircle, AiOutlineShopping } from 'react-icons/ai';
const Navbar = ({cart, clearCart, removeFromCart, addToCart, subTotal}) => {

  const handleClick=()=>{
    if(ref.current.classList.contains('translate-x-full'))
    {
      ref.current.classList.add('translate-x-0')
      ref.current.classList.remove('translate-x-full')
    }
    else{
      ref.current.classList.add('translate-x-full')
      ref.current.classList.remove('translate-x-0')
    }

  }

  const ref=useRef()
  return (
    <>
    <div className='flex flex-col md:flex-row md:justify-start  md:py-3 justify-center items-center shadow-2xl sticky top-0 z-10'>
        <div className='logo mx-6'>
      <Link href={'/'} > <Image
        src="/logo.png"
        alt="Picture of the author"
        width={200}
        height={100}
      /></Link>
        </div>
        <div className='nav mx-24'>
            <ul className='flex space-x-6 text-sm'>
                <Link href="/components/hoodie"><li>Hoodie</li></Link>
                <Link href="/components/mug"><li>Mug</li></Link>
                <Link href="/"><li>Hoodie</li></Link>
                <Link href="/"><li>Sticker</li></Link>
                
            </ul>
        </div>
        <div onClick={handleClick} className='absolute right-0 mx-8 text-2xl cursor-pointer'>
            <AiOutlineShoppingCart/>
             
        </div>
        <div ref={ref} className="sidebar h-[100vh] absolute top-0 right-0 w-64 bg-blue-300 p-10 tranform transition-transform translate-x-full">
      
        <span onClick={handleClick} className='absolute top-4 right-7 text-xl cursor-pointer'><AiOutlineClose/></span>
           <h2 className='text-xl font-bold' >Cart-Item</h2>
          <ol>

            {Object.keys(cart).length===0 && <div>No cart</div>}
           
              {Object.keys(cart).map((e)=>{
                return  <li key={e}> <div  className="flex my-4">
                  <div className="item w-2/3">
                   
                         {cart[e].name}
                  </div>
                  <div className="number w-2/3 flex justify-center items-center">
                  <AiOutlineMinusCircle onClick={()=> removeFromCart(e, cart[e].price, cart[e].name, cart[e].size, 1)}/> <span className='mx-2'>{cart[e].qty}</span> <AiOutlinePlusCircle onClick={()=> addToCart(e, cart[e].price, cart[e].name, cart[e].size, 1)}/>   
                  </div>

                  
                  </div> 
                  <span> Rs {subTotal}</span>
                  </li>   
              })}
              

              
                 
            </ol>
             
             <div className="flex justify-start">
         <Link href={"/components/checkout"}>  <button className="flex mx-1  text-white bg-blue-500 border-0 py-2 px-1 focus:outline-none hover:bg-blue-600 rounded text-sm"><AiOutlineShopping className='m-1'/>Check-Out</button>
         </Link>   <button onClick={clearCart} className="flex mx-1 text-white bg-blue-500 border-0 py-2 px-2 focus:outline-none hover:bg-blue-600 rounded text-sm">Clear Cart</button>
             </div>
           
        </div>
    </div>
    </>
  )
}

export default Navbar