import { Post} from "./Post"
import { Header } from "./components/Header"
import './styles.css'

export function App() {
  return (
    <div>
      <Header />
      <Post author="Paulo Reis" content="teste1 teste2 teste3" />
      <Post author="Pedro Reis" content="teste4 teste5 teste6" />
    </div>
  )
}
