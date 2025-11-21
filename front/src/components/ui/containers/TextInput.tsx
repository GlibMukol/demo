import clsx from "clsx"
import { useState, type ChangeEvent, useId } from "react"

type TInputError = {
    isError: boolean,
    errorMessoge: string
}

type TInput<S = string, D = string> = {
    onChange: (s: S) => void
    name: string
    label?: string
    styles?: string
    value?: D
    placeholder?: string
} & Partial<TInputError>

type TTextInput = TInput<string, string>

const TextInput = (params: TTextInput) => {

    const [isFocus, setOnFocus] = useState(false);
    const id = useId();

    const { onChange, name, label = "", styles = "", value = '', isError = false, errorMessoge = "", } = params;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value);
    return (
        <div className="relative flex flex-col p-3">
            <label htmlFor={id} className={clsx("absolute bg-[var(--bg)]", isError && "text-[var(--error)]", value || isFocus ? "top-0 left scale-70" : "top-5 left-5 opacity-90")}>
                <span className="opacity-70">
                    {label}
                </span>
            </label>
            <input
                id={id}
                className={clsx(styles)}
                name={name}
                type="text"
                onChange={handleChange}
                value={value}
                data-error={isError}
                onFocus={() => setOnFocus(true)}
                onBlur={() => setOnFocus(false)}
            />
            <p className={clsx("absolute -bottom-1 text-[.8rem] text-[var(--error)] opacity-0", isError && "opacity-85")} > {errorMessoge}</p>
        </div >
    )
}

export default TextInput