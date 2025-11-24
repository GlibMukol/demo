import Panel from "../../ui/containers/Panel"
import VDirection from "../../ui/containers/VDirection"
import TextInput from "../../ui/containers/TextInput"
import PasswordInput from "../../ui/containers/PasswordInput"
import { useLogin } from "./hook"
import type { TLoginField } from "../../../store/slices/loginSlice"
import Container from "../../ui/containers/container"


const setValidationResult = ({ valid, value, errors }: TLoginField) => ({
    isError: !valid,
    value,
    errorMessoge: !valid ? errors[0] : ""

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
                </VDirection>
            </Container>

        </Panel>
    )
}

export default Login
