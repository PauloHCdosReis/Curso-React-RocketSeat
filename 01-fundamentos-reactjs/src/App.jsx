import { Post} from "./components/Post"
import { Header } from "./components/Header"
import './global.css'

import styles from './App.module.css'
import { Sidebar } from "./components/SideBar"

export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author={'Paulo Reis'} content={'Um novo post muito legal'} />
          <Post author={'Pedro Reis'} content={'Um novo post muito legal, e divertido.'} />
        </main>
      </div>
    </div>
  )
}
