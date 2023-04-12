import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }) {

  const [cart, setcart] = useState({})
  const [subTotal, setsubTotal] = useState(0)

  useEffect(() => {
    console.log("UseEffect")

    try {
      if (localStorage.getItem("cart")) {
        setcart(JSON.parse(localStorage.getItem("cart")))
        saveCart(JSON.parse(localStorage.getItem("cart")))
      }

    } catch (error) {
      console.error(error)
      localStorage.clear()

    }

  }, [])


  const saveCart = (savedInLocalStorage) => {
    localStorage.setItem("cart", JSON.stringify(savedInLocalStorage))
    //yesma cart deko chae savedInLocalStorage ko key ho tei vayera yesma cart lekheko ho
  let subT= 0;
  let keys= Object.keys(savedInLocalStorage)

  for(let i=0; i<keys.length; i++)
  {
    subT += savedInLocalStorage[keys[i]].price* savedInLocalStorage[keys[i]].qty;
  }
  setsubTotal(subT)
  }

  const addToCart = (k, price, name,  size, qty) => {
    let newCart = cart
    
    if (k in cart) {
      newCart[k].qty = cart[k].qty + qty
      
    }
   
    else 
    {
      newCart[k] = { qty: 1, price, size, name }
    }
    setcart(newCart)
    saveCart(newCart) //newCart mathi gayera savedInLocalStorage ma props ma pass gareko chu 
  }

  const clearCart = () => {
    setcart({})
    saveCart({})
  }

  const removeFromCart = (k, price, name,  size, qty) => {
    let newCart = cart
    if (k in cart) {
      newCart[k].qty = cart[k].qty - qty
    }
    if (newCart[k].qty <= 0) {
      delete newCart[k]
    }
    setcart(newCart)
    saveCart(newCart)
  }



  return <> <Navbar cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal}/><Component cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} {...pageProps  } /><Footer /></>
}
