import { useState } from "react";
import { useAppSelector } from "../../../store/store";

export const useLogin = () => {

    const { email, password } = useAppSelector((store) => store.login)

    const [, setEmail] = useState<string>("");
    const [, setPassword] = useState<string>("");

    return {
        email,
        password,
        setEmail,
        setPassword
    }
}