import React from 'react'
import Link from 'next/link';

const order = () => {
  return (
    <>
    <section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 class="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">Animated Night Hill Illustrations</h1>
        <div class="flex mb-4">
          <a class="flex-grow text-blue-500 border-b-2 border-blue-500 py-2 text-lg px-1">Description</a>
          <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Reviews</a>
          <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Details</a>
        </div>
        <p class="leading-relaxed mb-4">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean.</p>
        <div class="flex border-t border-gray-200 py-2">
          <div class="text-gray-500">Color</div>
          <div class="ml-auto text-gray-900">Blue</div>
          <div class="ml-auto text-gray-900">Blue</div>
        </div>
        <div class="flex border-t border-gray-200 py-2">
          <div class="text-gray-500">Color</div>
          <div class="ml-auto text-gray-900">Blue</div>
          <div class="ml-auto text-gray-900">Blue</div>
        </div>
        <div class="flex border-t border-gray-200 py-2">
          <div class="text-gray-500">Color</div>
          <div class="ml-auto text-gray-900">Blue</div>
          <div class="ml-auto text-gray-900">Blue</div>
        </div>
        <div class="flex justify-between">
          <span class="title-font font-medium text-2xl text-gray-900">$58.00</span>
        <Link href={'/components/signup'}><button class=" text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">Order</button>
        </Link>   
        </div>
      </div>
      <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400"/>
    </div>
  </div>
</section></>
  )
}

export default order