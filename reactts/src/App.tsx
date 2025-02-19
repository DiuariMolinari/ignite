import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import './global.css';
import styles from './App.module.css'


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/DiuariMolinari.png',
      name: 'Diuari Molinari',
      role: 'Dev Fullstack'
    },
    content: [
      { type: 'paragraph', content: 'Lorem ipsum dolor sit2 amet consectetur adipisicing elit. Explicabo quo nihil vel suscipit, mollitia aut recusandae numquam maiores, neque repudiandae eos quas similique laborum necessitatibus eum harum voluptates nam ut!' },
      { type: 'paragraph', content: 'Lorem ipsum dolor sit3 amet consectetur adipisicing elit. Explicabo quo nihil vel suscipit, mollitia aut recusandae numquam maiores, neque repudiandae eos quas similique laborum necessitatibus eum harum voluptates nam ut!' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/DiuariMolinari.png',
      name: 'Diuari Molinari',
      role: 'Dev Fullstack'
    },
    content: [
      { type: 'paragraph', content: 'Lorem ipsum dolor sit4 amet consectetur adipisicing elit. Explicabo quo nihil vel suscipit, mollitia aut recusandae numquam maiores, neque repudiandae eos quas similique laborum necessitatibus eum harum voluptates nam ut!' },
      { type: 'paragraph', content: 'Lorem ipsum dolor sit5 amet consectetur adipisicing elit. Explicabo quo nihil vel suscipit, mollitia aut recusandae numquam maiores, neque repudiandae eos quas similique laborum necessitatibus eum harum voluptates nam ut!' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-13 19:00:00'),
  },

  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/DiuariMolinari.png',
      name: 'Diuari Molinari',
      role: 'Dev Fullstack'
    },
    content: [
      { type: 'paragraph', content: 'Lorem ipsum dolor sit7 amet consectetur adipisicing elit. Explicabo quo nihil vel suscipit, mollitia aut recusandae numquam maiores, neque repudiandae eos quas similique laborum necessitatibus eum harum voluptates nam ut!' },
      { type: 'paragraph', content: 'Lorem ipsum dolor sit8 amet consectetur adipisicing elit. Explicabo quo nihil vel suscipit, mollitia aut recusandae numquam maiores, neque repudiandae eos quas similique laborum necessitatibus eum harum voluptates nam ut!' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-23 21:00:00'),
  }
]


function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
          <Sidebar />
          <main>
            {
              posts.map(post => {
                return (
                  <Post 
                    key={post.id} 
                    author={post.author}
                    content={post.content}
                    publishedAt={post.publishedAt}
                  />
              )})
            }
          </main>
      </div>
    </>
  )
}

export default App
