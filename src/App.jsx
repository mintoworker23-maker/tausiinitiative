import { useEffect } from 'react'
import HomePage from './Components/HomePage'
import Navigation from './Components/Navigation'
import { AuthProvider } from './context/AuthContext'
import AuthSuccess from './Components/AuthSuccess'
import Footer from './Components/footer'

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import About from './Components/About'
import Projects from './Components/Projects'
import Volunteer from './Components/Volunteer'
import Contact from './Components/Contact'
import Blog from './Components/Blog'

function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.replace('#', '')
    const timer = setTimeout(() => {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 80)

    return () => clearTimeout(timer)
  }, [location.pathname, location.hash])

  return null
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToHash />
        <div className="min-h-screen flex flex-col justify-between">
          <Navigation />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />}/>
              <Route path="/about" element={<About />}/>
              <Route path="/projects" element={<Projects />}/>
              <Route path="/blog" element={<Blog />}/>
              <Route path="/volunteer" element={<Volunteer />}/>
              <Route path="/contact" element={<Contact />}/>
              <Route path="/auth-success" element={<AuthSuccess />} />
            </Routes>
          </div>
          <Footer />
          <ChatBot />
        </div>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App;
