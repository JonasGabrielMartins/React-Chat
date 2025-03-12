import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';


const posts = [
  {
    id: 1,
    author: {
        avatarUrl: "https://github.com/JonasGabrielMartins.png",
        name: "Jonas Gabriel",
        role: "Web Developer"
      },
    contents: [
      {type: "paragraph", content: "Fala galeraa 👋"},
      {type: "paragraph", content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: "link", content: 'jane.design/doctorcare'},
      {type: "linkWithoutParagraph", content: '#novoprojeto'},
      {type: "linkWithoutParagraph", content: '#nlw'},
      {type: "linkWithoutParagraph", content: '#rocketseat'},
    ],
    publishedAt: new Date("2025-03-03 10:00:00")
  },
  {
    id: 2,
    author: {
        avatarUrl: "https://github.com/dekisr.png",
        name: "Alexandre",
        role: "Web Developer"
    },
    contents: [
      {type: "paragraph", content: "Fala galeraa 👋"},
      {type: "paragraph", content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: "link", content: 'jane.design/doctorcare'},
      {type: "linkWithoutParagraph", content: '#novoprojeto'},
      {type: "linkWithoutParagraph", content: '#nlw'},
      {type: "linkWithoutParagraph", content: '#rocketseat'},
    ],
    publishedAt: new Date("2025-03-03 10:00:00")
  },
];

function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>

        <aside>
          <Sidebar/>
        </aside>
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                contents={post.contents}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
export default App