import { useState } from 'react'
import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import './global.css';
import styles from './App.module.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
          <Sidebar />
          <main>
            <Post
              key={0}  
              author="Diuari Molinari"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quo nihil vel suscipit, mollitia aut recusandae numquam maiores, neque repudiandae eos quas similique laborum necessitatibus eum harum voluptates nam ut!"
            />

            <Post
              key={1}
              author="Daniel Molinari"
              content="Novo post"
            />
          </main>
      </div>
    </>
  )
}

export default App
