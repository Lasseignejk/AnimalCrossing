import './App.css'
import {Routes, Route} from "react-router-dom"
import Home from './components/Home'
import Nav from './components/Nav'
import SignUp from './components/SignUp'
import Account from './components/Account'
import Search from './components/Search'
import Login from './components/Login'

function App(): JSX.Element {

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/account" element={<Account />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </>
  )
}

export default App
