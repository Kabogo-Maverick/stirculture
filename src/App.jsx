import { Routes, Route } from 'react-router-dom'
import Header3D from './components/Navbar'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Vlogs from './pages/Vlogs'
import Games from './pages/Games'
import Gallery from './pages/Gallery'
// import Vlogs from './pages/Vlogs'

export default function App() {
  return (
    <>
      <Header3D />
      <main style={{ padding: '2rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/vlogs" element={<Vlogs />} />
          <Route path="/games" element={<Games />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </main>
    </>
  )
}
