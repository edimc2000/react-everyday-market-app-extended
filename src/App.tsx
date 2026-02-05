import { Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import { ProductsPage } from './components/market/products-page/products-page'
import Header from './components/common/header/header'
import { Shop,  } from './components/market/shop/shop'
import type { IMerchandise } from './components/market/models/merchandise'
import { ViewCart } from './components/market/shop/cart'



function App() {
  const [cartCounter, setCartCounter] = useState(0)
  const [cartItems, setCartItems] = useState<IMerchandise[]>([])

  return (
    <>
      <Header title='BARO' cartCount={cartCounter} />
      {/* <ProductsPage /> */}

      <div>
        <Routes>
          <Route path="/" element={<ProductsPage />} />

          <Route path="/shop"
            element={<Shop cartCounter={cartCounter}
              setCartCounter={setCartCounter}
              cartItems={cartItems} setCartItems={setCartItems} />}
          />

          <Route path="/cart" 
          
          element={<ViewCart cartCounter={cartCounter}
              setCartCounter={setCartCounter}
              cartItems={cartItems} setCartItems={setCartItems} />}
          
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