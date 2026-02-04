import { useState } from 'react';

import './App.css';
import Header from './components/common/Header';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header title ={'BARO'} />
      <h1>Vite + React</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </>
  );
}

export default App;
