import { useState } from "react"
import Container from "./components/ui/containers/container"
import TextInput from "./components/ui/containers/TextInput"
import Panel from "./components/ui/containers/Panel";
import HDirection from "./components/ui/containers/HDirection";
import VDirection from "./components/ui/containers/VDirection";


function App() {
  const [test, setState] = useState(false)
  const [testString, setTestString] = useState('');
  const hadleChangeIput = (str: string) => setTestString(str)
  return (
    <>
      <div className="w-full h-screen">
        <Container>
          <div className="w-[80rem] h-[30rem]">
            <VDirection>
              <div className="h-full w-full bg-amber-700" >asd</div>
              <div className="h-full w-full bg-green-600">dsa</div>
            </VDirection>
          </div>

        </Container>
      </div>
    </>
  )
}

export default App
