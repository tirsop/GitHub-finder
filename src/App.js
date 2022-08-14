import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// components
import Navbar from "./components/layouts/Navbar";



function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col justify-between h-screen">

        <Navbar />
        <main>Content</main>
      </div>
    </BrowserRouter>
  );
}

export default App;
