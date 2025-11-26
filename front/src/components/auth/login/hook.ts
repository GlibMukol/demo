import { useAppDispatch, useAppSelector } from "../../../store/store";
import { emailOnChange, loginAsync, passwordOnChange } from "../../../store/slices/loginSlice";
import { isDisabled } from "../helper";

export const useLogin = () => {

    const { email, password, load } = useAppSelector(store => store.login);
    const dispatch = useAppDispatch();
    const disabled = isDisabled([email, password])
    const login = () => dispatch(loginAsync({ email: email.value, password: password.value }))

    const setEmail = (value: string) => dispatch(emailOnChange(value))
    const setPassword = (value: string) => dispatch(passwordOnChange(value))



    return {
        email,
        password,
        setEmail,
        setPassword,
        disabled,
        login,
        load
    }
}