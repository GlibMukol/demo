import { ZodError, type ZodType } from 'zod';
import { EmailSchema, PasswordSchema } from '../common';
import type { TLoginField } from '../../store/slices/loginSlice';

const loginFieldValidation = (schema: ZodType<string>, str: string): TLoginField => {
    let result: TLoginField = {
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
    password: TLoginField, confirm: TLoginField
};


export const confirmValidation = (password: string, confirm: string): TConfirmValidation => {
    const valid = password === confirm;
    const result = (value: string): TLoginField => ({
        valid,
        value,
        errors: valid ? [] : ["Confirm and Password not match"]
    })
    return (
        {
            password: result(password),
            confirm: result(confirm)
        })
}

export const emailValidation = loginFieldValidation.bind(null, EmailSchema);
export const passwordValidation = loginFieldValidation.bind(null, PasswordSchema);


