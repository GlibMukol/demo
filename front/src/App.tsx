import Container from "./components/ui/containers/Container"
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
