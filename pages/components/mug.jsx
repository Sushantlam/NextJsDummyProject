import React from 'react'
import Link from 'next/link'
import dynamic from "next/dynamic";

const mug = () => {
  return (
    <div>
     <section class="text-gray-600 body-font shadow-2xl">
  <div class="container px-10 py-14 mx-auto">
    <div class="flex flex-wrap ">
     

      <div class="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer shadow-lg">
       <Link href={'/product/hello-code'}> <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class=" h-[50vh] block" src="https://m.media-amazon.com/images/I/71gPfR7QckL._AC_UX522_.jpg"/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
          <p class="mt-1">$16.00</p>
          <p class="mt-1">S, M, L, XL, XXL</p>
        </div>
      </Link></div>

      <div class="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer shadow-lg">
       <Link href={'/product/hello-code'}> <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class=" h-[50vh] block" src="https://m.media-amazon.com/images/I/71gPfR7QckL._AC_UX522_.jpg"/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
          <p class="mt-1">$16.00</p>
          <p class="mt-1">S, M, L, XL, XXL</p>
        </div>
      </Link></div>

      <div class="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer shadow-lg">
       <Link href={'/product/hello-code'}> <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="  h-[50vh]  block" src="https://m.media-amazon.com/images/I/71gPfR7QckL._AC_UX522_.jpg"/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
          <p class="mt-1">$16.00</p>
          <p class="mt-1">S, M, L, XL, XXL</p>
        </div>
      </Link></div>

      <div class="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer shadow-lg">
       <Link href={'/product/hello-code'}> <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class=" h-[50vh] block" src="https://m.media-amazon.com/images/I/71gPfR7QckL._AC_UX522_.jpg"/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
          <p class="mt-1">$16.00</p>
          <p class="mt-1">S, M, L, XL, XXL</p>
        </div>
      </Link></div>

      <div class="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer shadow-lg">
       <Link href={'/product/hello-code'}> <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class=" h-[50vh] block" src="https://m.media-amazon.com/images/I/71gPfR7QckL._AC_UX522_.jpg"/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
          <p class="mt-1">$16.00</p>
          <p class="mt-1">S, M, L, XL, XXL</p>
        </div>
      </Link></div>

      <div class="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer shadow-lg">
       <Link href={'/product/hello-code'}> <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class=" h-[50vh] block" src="https://m.media-amazon.com/images/I/71gPfR7QckL._AC_UX522_.jpg"/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
          <p class="mt-1">$16.00</p>
          <p class="mt-1">S, M, L, XL, XXL</p>
        </div>
      </Link></div>

      <div class="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer shadow-lg">
       <Link href={'/product/hello-code'}> <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class=" h-[50vh] block" src="https://m.media-amazon.com/images/I/71gPfR7QckL._AC_UX522_.jpg"/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
          <p class="mt-1">$16.00</p>
          <p class="mt-1">S, M, L, XL, XXL</p>
        </div>
      </Link></div>

      
     
    </div>
    
  </div>
</section>
  </div>
  )
}

export default dynamic (() => Promise.resolve(mug), {ssr: false})