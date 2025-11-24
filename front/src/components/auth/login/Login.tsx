import Panel from "../../ui/containers/Panel"
import VDirection from "../../ui/containers/VDirection"
import TextInput from "../../ui/containers/TextInput"
import PasswordInput from "../../ui/containers/PasswordInput"
import { useLogin } from "./hook"

const Login = () => {

    const { email, setEmail, password, setPassword } = useLogin();


    return (
        <Panel>
            <VDirection>
                <TextInput
                    onChange={setEmail}
                    name="email"
                    label="Email"
                    value={email}
                />
                <PasswordInput
                    onChange={setPassword}
                    name="password"
                    label="Password"
                    value={password}
                />
            </VDirection>
        </Panel>
    )
}

export default Login
