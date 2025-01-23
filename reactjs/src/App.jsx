import { useState } from 'react'
import { Header } from './components/Header'

import './global.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ipsum magnam facilis delectus inventore. Architecto aliquid obcaecati doloribus quaerat, nobis aut accusantium voluptatibus suscipit. Necessitatibus vel quas quam deserunt qui.</h1>
    </>
  )
}

export default App
