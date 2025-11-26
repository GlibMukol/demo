import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { emailValidation, passwordValidation } from '../../validations/auth';
import type { TAuthFieldInput } from '../types';

// export type TLoginField = TFiledValid<string, Array<string>>

type TLogin = {
    email: TAuthFieldInput
    password: TAuthFieldInput,
    load: boolean,
}

const initFieldValue = {
    value: "",
    valid: true,
    errors: [],


} satisfies TAuthFieldInput

const initialState: TLogin = {
    email: initFieldValue,
    password: initFieldValue,
    load: false
}

const sliceName = "login"

const loginSlice = createSlice({
    name: sliceName,
    initialState,
    reducers: {
        emailOnChange: (state, { payload: email }: PayloadAction<string>) => {
            state.email = emailValidation(email)
        },
        passwordOnChange: (state, { payload: password }: PayloadAction<string>) => {
            state.password = passwordValidation(password);
        }
    },
    extraReducers(builder) {
        builder.addCase(loginAsync.fulfilled, (state, action) => {
            state.load = false;
            // console.log('action', action)
        }).addCase(loginAsync.pending, (state) => {
            state.load = true
            // console.log('action', action)

        }).addCase(loginAsync.rejected, (state, action) => {
            state.load = false;
            // console.log('action', action)

        })
    },
});


export const loginAsync = createAsyncThunk(
    `${sliceName}/login`,
    async (data: { email: string, password: string }) => {
        await new Promise((res) => setTimeout(res, 1000));
        return data;
    }
)

export const { emailOnChange, passwordOnChange } = loginSlice.actions

export default loginSlice.reducer;
