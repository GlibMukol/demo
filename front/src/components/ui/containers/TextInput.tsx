import clsx from "clsx"
import { useRef, useState, type ChangeEvent, useId } from "react"

type TInputError = {
    isError: boolean,
    errorMessoge: string
}

type TInput<S = string, D = string> = {
    onChange: (s: S) => void
    name: string
    styles?: string
    value?: D
    placeholder?: string
} & Partial<TInputError>

type TTextInput = TInput<string, string>

const TextInput = (params: TTextInput) => {

    const [isFocus, setOnFocus] = useState(false);
    const input = useRef(null);
    const id = useId();

    const { onChange, placeholder = "", styles = "", value = '', isError = false, errorMessoge = "" } = params;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value);
    return (
        <div className="relative flex flex-col">
            <label htmlFor={id} className={clsx("absolute bg-[var(--bg)]", isError && "text-[var(--error)]", value || isFocus ? "-top-3 left scale-70" : "top-2 left-2 opacity-90")}>
                <span className="opacity-70">

                    {placeholder}
                </span>
            </label>
            <input
                ref={input}
                id={id}
                className={clsx(styles)}
                type="text"
                placeholder={placeholder}
                onChange={handleChange}
                value={value}
                data-error={isError}
                onFocus={() => setOnFocus(true)}
                onBlur={() => setOnFocus(false)}
            />
            <p>some error text for this input</p>
        </div>
    )
}

export default TextInput