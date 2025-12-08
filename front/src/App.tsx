import Container from "./components/ui/containers/Container"
import SignIn from "./components/auth/signin/SignIn";
import Auth from "./pages/Auth";


function App() {

  return (
    <>
      <div className="w-full h-screen">
        <Container>
          <Auth />
        </Container>
      </div>
    </>
  )
}

export default App
