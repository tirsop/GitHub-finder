import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
// components
import Navbar from "./components/layouts/Navbar"
import Footer from "./components/layouts/Footer"



function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col justify-between h-screen">

        <Navbar />
        <main className="container mx-auto px-3 pb-12">Content</main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
