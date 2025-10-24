import React, { useState } from "react"
import Sidebar from "./components/Sidebar"
import Cards from "./components/Cards"
import About from "./components/About"
import Contact from "./components/Contact"
import Resume from "./components/Resume"
import Footer from "./components/Footer"
import "./style.css"


function App() {
  const [currentPage, setCurrentPage] = useState("About")

  function handleCurrentPageChange(page){
        setCurrentPage(page);
        window.scrollTo(0, 0);
    }

  return(
    <>
      <Sidebar  changePage = {handleCurrentPageChange}/>
      {
        currentPage === "About" 
        ? <About changePage = {handleCurrentPageChange}/>
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
