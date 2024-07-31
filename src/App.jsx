import { Route, BrowserRouter as Router, Routes} from 'react-router-dom'

import {Home, About, Blog, Contact } from './pages'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <main className='gb-slate-300/20'>
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='Blog' element={<Blog />} />
                <Route path='contact' element={<Contact />} />
            </Routes>
        </Router>
    </main>
  )
}

export default App