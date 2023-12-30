import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function uploadImage(){
    
  }

  return (
    <>
    <form method="post" enctype="multipart/form-data">
    <input type='file' accept='.png' style={{marginLeft:'10px'}}  />  
    </form>
    <img style={{display:'block',width:'200px',height:'200px',margin:'10px auto auto auto'}} src={"http://localhost:3000/files/zx.png"} alt="" />
    </>
  )
}

export default App
