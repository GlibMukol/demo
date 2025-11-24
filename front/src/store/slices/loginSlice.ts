import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { emailValidation, passwordValidation } from '../../validations/auth';

type TFiledValid<T, E> = {
    value: T,
    valid: boolean,
    errors: E
}

export type TLoginField = TFiledValid<string, Array<string>>

type TLogin = {
    email: TLoginField
    password: TLoginField
}

const initFieldValue = {
    value: "",
    valid: true,
    errors: []
} satisfies TLoginField

const initialState: TLogin = {
    email: initFieldValue,
    password: initFieldValue
}



const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        emailOnChange: (state, { payload: email }: PayloadAction<string>) => {
            state.email = emailValidation(email)
        },
        passwordOnChange: (state, { payload: password }: PayloadAction<string>) => {
            state.password = passwordValidation(password);
        }
    },
});


export const { emailOnChange, passwordOnChange } = loginSlice.actions
export default loginSlice.reducer;
