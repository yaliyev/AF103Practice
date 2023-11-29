import React from "react"
import '@coreui/coreui/dist/css/coreui.min.css'
import CreateAccountForm from "./components/CreateAccountForm"
function App() {
  

  return (
    <>
    <div style={{backgroundColor:"#0875EB",height:'100vh'}} className="row">
      <div className="col-6"></div>
      <div className="col-6">
      <CreateAccountForm/>
      </div>
    </div>
      
    </>
  )
}

export default App
