import { useState } from "react"
import Container from "./components/ui/containers/container"
import TextInput from "./components/ui/containers/TextInput"


function App() {
  const [test, setState] = useState(false)
  const [testString, setTestString] = useState('');
  const hadleChangeIput = (str: string) => setTestString(str)
  return (
    <>
      <div className="w-full h-screen">
        <Container>
          <TextInput onChange={hadleChangeIput} value={testString} name="test" placeholder="placeholder" isError={test} />
          <button className="btn" onClick={() => { setState(prev => !prev) }}>test</button>
        </Container>
      </div>
    </>
  )
}

export default App
