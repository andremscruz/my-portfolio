import React, { useEffect, useState } from "react"
import Header from "./components/Header"
import Home from "./components/Home"
import Main from "./components/Main"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import "./style.css"


function App() {
  const [sidebarShow, setSidebarShow] = useState(false)
  const [currentPage, setCurrentPage] = useState("Home")

  useEffect(() => {
    setSidebarShow(false)
  }, [currentPage])

  function handleClick(){
    setSidebarShow(prevShow => !prevShow)
}
  return(
    <>
      <Header 
        handleClick = {handleClick}
        sidebarShow = {sidebarShow} 
        setSidebarShow = {setSidebarShow} 
        setCurrentPage = {setCurrentPage}
      />
      {
        currentPage === "Home" 
        ? <Home sidebarShow = {sidebarShow}/>
        : currentPage === "Projects"
          ? <Main sidebarShow = {sidebarShow}/>
          : currentPage === "About"
            ? <About sidebarShow = {sidebarShow}/>
            : <Contact sidebarShow = {sidebarShow}/>
      }
      
      <Footer sidebarShow = {sidebarShow}/>
    </>
    
  )
}

export default App
