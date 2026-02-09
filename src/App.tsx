import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'
import { ProductsPage } from './components/market/products-page/products-page'
import Header from './components/common/header/header'
import { Shop, } from './components/market/shop/shop'
import type { ICartItem } from './components/market/models/merchandise'
import { ViewCart } from './components/market/shop/cart'



function App() {
  // Initialize state from localStorage or use defaults
  const [cartCounter, setCartCounter] = useState(() => {
    const stored = localStorage.getItem('cartCounter')
    return stored ? parseInt(stored, 10) : 0
  })

  const [cartItems, setCartItems] = useState<ICartItem[]>(() => {
    const stored = localStorage.getItem('cartItems')
    return stored ? JSON.parse(stored) : []
  })

  // Save cartCounter to localStorage whenever it changes - 
  // Bug fix captured from playwright and implementation came with  playwright as well - persistent 
  // local storage

  useEffect(() => {
    localStorage.setItem('cartCounter', cartCounter.toString())
  }, [cartCounter])

  // Save cartItems to localStorage whenever it changes 
  // Bug fix captured from playwright and implementation came with  playwright as well - persistent 
  // local storage

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems])

  // Sync cart state across tabs/windows - AI assited
  useEffect(() => {
    const handleStorage = (event: StorageEvent) => {
      if (event.key === 'cartCounter') {
        const next = event.newValue ? parseInt(event.newValue, 10) : 0
        setCartCounter(next)
      }

      if (event.key === 'cartItems') {
        const next = event.newValue ? JSON.parse(event.newValue) : []
        setCartItems(next)
      }
    }

    window.addEventListener('storage', handleStorage)
    return () => window.removeEventListener('storage', handleStorage)
  }, [])

  return (
    <>
      <Header title='Baro' cartCount={cartCounter} />

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
