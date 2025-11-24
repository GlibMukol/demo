import clsx from "clsx"
import { useState, type ChangeEvent, useId } from "react"

export type TInputError = {
    isError: boolean,
    errorMessage: string
}

export type TInput<S = string, D = string> = {
    onChange: (s: S) => void
    name: string
    type?: "text" | "password"
    label?: string
    styles?: string
    value?: D
    placeholder?: string
} & Partial<TInputError>

export type TTextInput = TInput<string, string>

const TextInput = (params: TTextInput) => {

    const [isFocus, setOnFocus] = useState(false);
    const id = useId();

    const { onChange, name, type = "text", label = "", styles = "", value = '', isError = false, errorMessage = "", } = params;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value);
    return (
        <div className="relative flex flex-col w-full p-3">
            <label htmlFor={id} className={clsx("absolute bg-background", isError && "text-error", value || isFocus ? "top-0 left scale-70" : "top-5 left-5 opacity-90")}>
                <span className="opacity-70">
                    {label}
                </span>
            </label>
            <input
                id={id}
                className={clsx(styles)}
                name={name}
                type={type}
                onChange={handleChange}
                value={value}
                data-error={isError}
                onFocus={() => setOnFocus(true)}
                onBlur={() => setOnFocus(false)}
            />
            <p title={errorMessage} className={clsx("absolute top-13  left-3 right-0 text-[.8rem] text-error opacity-0 truncate cursor-pointer", isError && "opacity-85")} > {errorMessage}</p>
        </div >
    )
}

export default TextInput