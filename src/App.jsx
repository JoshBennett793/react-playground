import reactLogo from './assets/react.svg'
import './App.css'
import { Header } from './header'
import { List } from './List'

function App() {
  return (
    <>
      <Header img={reactLogo} />
      <List />
    </>
  )
}

export default App
