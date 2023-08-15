import reactLogo from './assets/react.svg'
import Header from './components/Header'
import List from './components/List'
import './App.css'

function App() {
  return (
    <>
      <Header img={reactLogo} />
      <List />
    </>
  )
}

export default App
