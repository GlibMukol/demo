import Panel from "../../ui/containers/Panel"
import VDirection from "../../ui/containers/VDirection"
import PasswordInput from "../../ui/components/PasswordInput"
import { useLogin } from "./hook"
import Container from "../../ui/containers/Container"
import Button from "../../ui/components/Button"
import LoadIcon from "../../ui/animated/LoadIcon"
import Emailnput from "../../ui/components/Emailnput"
import { setValidationResult } from "../helper"



const Login = () => {
    const { email, setEmail, password, setPassword, disabled, login, load } = useLogin();
    return (
        <Panel styles="w-1/6">
            <Container>
                <VDirection>
                    <Emailnput
                        onChange={setEmail}
                        name="email"
                        label="Email"
                        {...setValidationResult(email)}
                    />
                    <PasswordInput
                        onChange={setPassword}
                        name="password"
                        label="Password"
                        {...setValidationResult(password)}
                    />
                    <Button title="LogIn" onClick={() => login()} disabled={disabled || load}>
                        {load ?
                            <LoadIcon />
                            : `LogIn`
                        }
                    </Button>
                </VDirection>
            </Container>

        </Panel >
    )
}

export default Login
