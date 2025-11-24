import Panel from "../../ui/containers/Panel"
import VDirection from "../../ui/containers/VDirection"
import TextInput from "../../ui/components/TextInput"
import PasswordInput from "../../ui/components/PasswordInput"
import { useLogin } from "./hook"
import type { TLoginField } from "../../../store/slices/loginSlice"
import Container from "../../ui/containers/Container"
import Button from "../../ui/components/Button"


const setValidationResult = ({ valid, value, errors }: TLoginField) => ({
    isError: !valid,
    value,
    errorMessage: !valid ? errors[0] : ""

})

const Login = () => {

    const { email, setEmail, password, setPassword } = useLogin();
    return (
        <Panel styles="w-1/6">
            <Container styles="">
                <VDirection>
                    <TextInput
                        onChange={setEmail}
                        name="email"
                        label="Email"
                        styles="w-full"
                        {...setValidationResult(email)}
                    />
                    <PasswordInput
                        onChange={setPassword}
                        name="password"
                        label="Password"
                        {...setValidationResult(password)}
                    />
                    <Button title="LogIn" onClick={() => { }} disabled={true} />
                </VDirection>
            </Container>

        </Panel>
    )
}

export default Login
