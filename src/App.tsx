
import Home from './pages/home/Home'
import NavbarSimple from './components/Navbar/NavBar'

export default function App() {
  return (
    <div className='w-[calc(100vw)] overflow-visible'>
      <NavbarSimple/>
      <Home />
    </div>
  )
}
