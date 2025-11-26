import type { TTextInput } from "./TextInput"
import TextInput from "./TextInput"

const Emailnput = (params: TTextInput) => {
    return (
        <TextInput
            {...params}
            type="email"
        />
    )
}

export default Emailnput