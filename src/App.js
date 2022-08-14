import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
// components
import Navbar from "./components/layouts/Navbar"
import Footer from "./components/layouts/Footer"
// pages
import Home from "./pages/Home"
import About from "./pages/About"
import NotFound from "./pages/NotFound"



function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col justify-between h-screen">

        <Navbar />
        <main className="container mx-auto px-3 pb-12">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/notfound' element={<NotFound />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
