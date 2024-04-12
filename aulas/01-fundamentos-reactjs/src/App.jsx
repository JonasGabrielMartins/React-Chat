import { Header } from "./components/Header";
import { Post } from "./Post";
import "./global.css";
import styles from "./App.module.css";

function App() {  
  return (
    <div>
      <Header/>


      <div className={styles.wrapper}>
        <aside>
          sidebar
        </aside>
        <main>
          <Post
            author="Jose"
            content="Conteudos de primeira, venha conferir!!"
          />
        </main>
      </div>
    </div>
  )
}

export default App
