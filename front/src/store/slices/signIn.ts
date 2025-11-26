import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TFiledValid } from "./loginSlice";
import { confirmValidation, emailValidation, passwordValidation } from "../../validations/auth";

export type TSignInField = TFiledValid<string, Array<string>>

type TSignIn = {
    email: TSignInField
    password: TSignInField
    confirm: TSignInField
    load: boolean
};

const initFieldValue = {
    value: "",
    valid: true,
    errors: []
} satisfies TSignInField;

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
        },
        onConfirmChange: (state, { payload: confirm }: PayloadAction<string>) => {
            state = {
                ...state,
                ...confirmValidation(state.password.value, confirm)
            }
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



export default signInSlice.reducer
