
export type TFiledValid<T, E> = {
    value: T,
    valid: boolean,
    errors: E
}


export type TAuthFieldInput = TFiledValid<string, string[]>