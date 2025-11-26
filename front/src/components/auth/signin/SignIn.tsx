import Button from "../../ui/components/Button"
import Emailnput from "../../ui/components/Emailnput"
import PasswordInput from "../../ui/components/PasswordInput"
import Container from "../../ui/containers/Container"
import Panel from "../../ui/containers/Panel"
import VDirection from "../../ui/containers/VDirection"

const SignIn = () => {
    return (
        <Panel styles="w-1/6">
            <Container styles="">
                <VDirection>
                    <Emailnput
                        onChange={() => { }}
                        name="email"
                        label="Email"
                    />
                    <PasswordInput
                        onChange={() => { }}
                        name="password"
                        label="Password"
                    />
                    <PasswordInput
                        onChange={() => { }}
                        name="confirm"
                        label="confirm"
                    />
                    <Button title="LogIn" onClick={() => { }}>
                        SignIN
                    </Button>
                </VDirection>
            </Container>
        </Panel>
    )
}

export default SignIn