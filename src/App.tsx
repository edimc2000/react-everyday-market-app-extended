import { Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import { ProductsPage } from './components/market/products-page/products-page'
import Header from './components/common/header/header'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header title='BARO' />
      <ProductsPage />

    </>
  )
}

export default App


// /* <h1>Vite + React</h1>
// <button onClick={() => setCount((count) => count + 1)}>
//   count is {count}
// </button> */