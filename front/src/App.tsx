import { useState } from "react"
import Container from "./components/ui/containers/container"
import VDirection from "./components/ui/containers/VDirection";
import Login from "./components/auth/login/Login";


function App() {

  return (
    <>
      <div className="w-full h-screen">
        <Container>
          <Login />
        </Container>
      </div>
    </>
  )
}

export default App
