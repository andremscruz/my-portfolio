import React, { useState } from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import About from "./components/About"
import Contact from "./components/Contact"
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
          ? <Main/>
          : <Contact/>
      }
      
      <Footer sidebarShow/>
    </>
    
  )
}

export default App
