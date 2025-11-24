import TextInput, { type TTextInput } from "./TextInput"

const PasswordInput = (params: TTextInput) => {
    return (
        <TextInput
            {...params}
            type="password"

        />
    )
}

export default PasswordInput