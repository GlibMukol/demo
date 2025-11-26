import { ZodError, type ZodType } from 'zod';
import { EmailSchema, PasswordSchema } from '../common';
import type { TAuthFieldInput } from '../../store/types';

const loginFieldValidation = (schema: ZodType<string>, str: string): TAuthFieldInput => {
    let result: TAuthFieldInput = {
        valid: true,
        errors: [],
        value: str
    }
    try {
        result.value = schema.parse(str)

    } catch (error: unknown) {
        error instanceof ZodError && (
            result = {
                value: str,
                valid: false,
                errors: error.issues.map(i => i.message)
            })


    }
    return result
};


type TConfirmValidation = {
    password: TAuthFieldInput,
    confirm: TAuthFieldInput
};




export const emailValidation = loginFieldValidation.bind(null, EmailSchema);
export const passwordValidation = loginFieldValidation.bind(null, PasswordSchema);

export const confirmValidation = (password: string, confirm: string): TConfirmValidation => {
    const valid = password === confirm;
    const result = (value: string): TAuthFieldInput => ({
        valid,
        value,
        errors: valid ? [] : ["Confirm with Password not match"]
    })
    return ({
        password: { ...passwordValidation(password) },
        confirm: { ...result(confirm) }
    })
}
