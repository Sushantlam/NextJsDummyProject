import React from 'react'
import { AiOutlineShoppingCart, AiOutlineClose, AiOutlinePlusCircle, AiOutlineMinusCircle, AiOutlineShopping } from 'react-icons/ai';


const checkout = ({cart, clearCart, removeFromCart, addToCart, subTotal}) => {
    return (
   <>
   {console.log(cart)}
            <div className="container m-auto ">
                <h1 className='font-bold text-center py-6'>CheckOut</h1>
                <div className="mx-auto flex ">

                    <div class="p-2 w-1/2">
                        <div class="relative">
                            <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                            <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>

           </div>
           <div class="p-2 w-1/2">
                        <div class="relative">
                            <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                            <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>

           </div>
            </div>
                    <div className="mx-auto flex ">
           <div class="p-2 w-full">
                        <div class="relative">
                            <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                            <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>

           </div>
           </div>

           <div className="mx-auto flex ">

<div class="p-2 w-1/2">
    <div class="relative">
        <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
        <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
    </div>

</div>
<div class="p-2 w-1/2">
    <div class="relative">
        <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
        <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
    </div>

</div>
</div>

<div className="mx-auto flex ">

<div class="p-2 w-1/2">
    <div class="relative">
        <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
        <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
    </div>

</div>
<div class="p-2 w-1/2">
    <div class="relative">
        <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
        <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
    </div>

</div>
</div>

<div className="mx-10 flex ">

<div class="p-2 w-1/2">
    <div class="relative">
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

<button onClick={clearCart} className="flex mx-1 text-white bg-blue-500 border-0 py-2 px-2 focus:outline-none hover:bg-blue-600 rounded text-sm">Clear Cart</button>
        
  

   
     
</ol>
        </div>
</div>
</div>

          
          
           
                </div>
            </>
            )
}

            export default checkout