import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
// import type { TFiledValid } from "./loginSlice";
import { confirmValidation, emailValidation, passwordValidation } from "../../validations/auth";
import type { TAuthFieldInput } from "../types";

// export type TSignInField = TFiledValid<string, Array<string>>

type TSignIn = {
    email: TAuthFieldInput
    password: TAuthFieldInput
    confirm: TAuthFieldInput
    load: boolean
};

const initFieldValue = {
    value: "",
    valid: true,
    errors: []
} satisfies TAuthFieldInput;

const setInitStete = <T>(strs: string[]): T => strs.reduce((acc, cur) => {
    return {
        ...acc,
        [cur]: initFieldValue
    }
}, {} as T);

let initInputs = setInitStete(['email', 'password', 'confirm']);

const initialState = {
    load: false,
    ...initInputs as Omit<TSignIn, "load">
};

const sliceName = "signIn";

export const signInAsync = createAsyncThunk(
    `${sliceName}/sigin`,
    async (data: { email: string, password: string }) => {
        await new Promise((res) => setTimeout(res, 1000));
        return data
    }
)


const signInSlice = createSlice({
    name: sliceName,
    initialState,
    reducers: {
        emailOnChange: (state, { payload: email }: PayloadAction<string>) => {
            state.email = emailValidation(email)
        },
        passwordOnChange: (state, { payload: password }: PayloadAction<string>) => {
            state.password = passwordValidation(password);
            state.confirm = confirmValidation(state.password.value, state.confirm.value).confirm;
        },
        confirmOnChange: (state, { payload: confirmPwd }: PayloadAction<string>) => {
            const { password, confirm } = confirmValidation(state.password.value, confirmPwd)
            state.password = password;
            state.confirm = confirm;
        }
    },
    extraReducers(builder) {
        builder.addCase(signInAsync.pending, (state) => {
            state.load = true
        }).addCase(signInAsync.fulfilled, (state) => {
            state.load = false;
        }).addCase(signInAsync.rejected, (state) => {
            state.load = false;
        })
    }
});


export const { emailOnChange, confirmOnChange, passwordOnChange } = signInSlice.actions;
export default signInSlice.reducer;
