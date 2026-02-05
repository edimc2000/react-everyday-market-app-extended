import { Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import { ProductsPage } from './components/market/products-page/products-page'
import Header from './components/common/header/header'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { Shop } from './components/market/shop/shop'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header title='BARO' />
      {/* <ProductsPage /> */}

      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<ProductsPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />

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