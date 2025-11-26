import { confirmOnChange, emailOnChange, passwordOnChange, signInAsync } from "../../../store/slices/signIn";
import { useAppDispatch, useAppSelector } from "../../../store/store"
import { isDisabled } from "../helper";

export const useSignIn = () => {
    const { confirm, password, email, load } = useAppSelector(store => store.signIn);
    const dispatch = useAppDispatch();
    const disabled = isDisabled([email, password, confirm]);
    const signIn = () => dispatch(signInAsync({ email: email.value, password: password.value }))
    const setEmail = (value: string) => dispatch(emailOnChange(value));
    const setPassword = (value: string) => dispatch(passwordOnChange(value));
    const setConfirm = (value: string) => dispatch(confirmOnChange(value));

    return {
        load,
        confirm,
        password,
        email,
        setEmail,
        setPassword,
        setConfirm,
        disabled,
        signIn
    }
}