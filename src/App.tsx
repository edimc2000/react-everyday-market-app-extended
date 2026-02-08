import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'
import { ProductsPage } from './components/market/products-page/products-page'
import Header from './components/common/header/header'
import { Shop, } from './components/market/shop/shop'
import type { ICartItem } from './components/market/models/merchandise'
import { ViewCart } from './components/market/shop/cart'



function App() {
  // Initialize state from sessionStorage or use defaults
  const [cartCounter, setCartCounter] = useState(() => {
    const stored = sessionStorage.getItem('cartCounter')
    return stored ? parseInt(stored, 10) : 0
  })

  const [cartItems, setCartItems] = useState<ICartItem[]>(() => {
    const stored = sessionStorage.getItem('cartItems')
    return stored ? JSON.parse(stored) : []
  })

  // Save cartCounter to sessionStorage whenever it changes
  useEffect(() => {
    sessionStorage.setItem('cartCounter', cartCounter.toString())
  }, [cartCounter])

  // Save cartItems to sessionStorage whenever it changes
  useEffect(() => {
    sessionStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <>
      <Header title='BARO' cartCount={cartCounter} />

      <div>
        <Routes>

          <Route path="/"
            element={<ProductsPage
            />}
          />

          <Route path="/shop"
            element={<Shop
              cartCounter={cartCounter}
              setCartCounter={setCartCounter}
              cartItems={cartItems} setCartItems={setCartItems}
            />}
          />

          <Route path="/cart"
            element={<ViewCart
              cartCounter={cartCounter}
              setCartCounter={setCartCounter}
              
              cartItems={cartItems} 
              setCartItems={setCartItems}



            />}
          />

        </Routes>
      </div>


    </>
  )
}

export default App


// /* <h1>Vite + React</h1>
// <button onClick={() => setCount((count) => count + 1)}>
//   count is {count}
// </button> */