import React, { useState } from "react"
import Header from "./components/Header"
import Cards from "./components/Cards"
import About from "./components/About"
import Contact from "./components/Contact"
import Resume from "./components/Resume"
import Footer from "./components/Footer"
import "./style.css"


function App() {
  const [currentPage, setCurrentPage] = useState("About")

  return(
    <>
      <Header  
        setCurrentPage = {setCurrentPage}
        currentPage = {currentPage}
      />
      {
        currentPage === "About" 
        ? <About setCurrentPage = {setCurrentPage}/>
        : currentPage === "Projects"
          ? <Cards/>
          : currentPage === "Resume"
          ? <Resume/>
          : <Contact/>
      }
      
      <Footer />
    </>
    
  )
}

export default App
