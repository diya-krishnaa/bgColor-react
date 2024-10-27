import { useEffect, useState } from 'react'
import './App.css'

function App() {
const [color,setColor] = useState("blue")
const click =color=>{
  setColor(color)
}

useEffect(()=>{
  document.body.style.backgroundColor = color
},[color])
  return (
    <div className='App'>
      <button onClick={
        () =>{click ("Red")}
      }>RED background</button>
      <button onClick={
        () =>{click ("green")}
      }>GREEN background</button>
      <button onClick={
        () =>{click ("blue")}
      }>BLUE background</button>
      <div>Click on the button</div>

    </div>
   
  )
}

export default App