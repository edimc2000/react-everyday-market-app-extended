import { useState } from 'react'
import './App.css'
import Header from './components/common/header/Header'
import { ProductsPage } from './components/market/products-page/products-page'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header title='BARO' />

      <ProductsPage />
      {/* <h1>Vite + React</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button> */}
    </>
  )
}

export default App
