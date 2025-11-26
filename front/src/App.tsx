import Container from "./components/ui/containers/Container"
import SignIn from "./components/auth/signin/SignIn";


function App() {

  return (
    <>
      <div className="w-full h-screen">
        <Container>
          <SignIn />
        </Container>
      </div>
    </>
  )
}

export default App
