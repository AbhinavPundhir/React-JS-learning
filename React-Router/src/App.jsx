import React, {useState} from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Footer></Footer>
      <AboutUs></AboutUs>
      <ContactUS></ContactUS>
    </>
  )
}

export default App
