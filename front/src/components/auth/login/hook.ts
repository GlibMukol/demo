import { useAppDispatch, useAppSelector } from "../../../store/store";
import { emailOnChange, passwordOnChange } from "../../../store/slices/loginSlice";

export const useLogin = () => {

    const { email, password } = useAppSelector((store) => store.login);
    const dispatch = useAppDispatch()

    const setEmail = (value: string) => dispatch(emailOnChange(value))
    const setPassword = (value: string) => dispatch(passwordOnChange(value))

    return {
        email,
        password,
        setEmail,
        setPassword
    }
}