import LoadIcon from "../../ui/animated/LoadIcon"
import Button from "../../ui/components/Button"
import Emailnput from "../../ui/components/Emailnput"
import PasswordInput from "../../ui/components/PasswordInput"
import Container from "../../ui/containers/Container"
import Panel from "../../ui/containers/Panel"
import VDirection from "../../ui/containers/VDirection"
import { setValidationResult } from "../helper"
import { useSignIn } from "./hook"

const SignIn = () => {
    const {
        load,
        confirm,
        password,
        email,
        setEmail,
        setPassword,
        setConfirm,
        disabled,
        signIn
    } = useSignIn();
    return (
        <Panel styles="w-1/3">
            <Container styles="">
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
                    <PasswordInput
                        onChange={setConfirm}
                        name="confirm"
                        label="Confirm"
                        {...setValidationResult(confirm)}
                    />
                    <Button title="LogIn" onClick={signIn} disabled={disabled || load}>
                        {load ?
                            <LoadIcon />
                            : `SignIn`
                        }
                    </Button>
                </VDirection>
            </Container>
        </Panel>
    )
}

export default SignIn