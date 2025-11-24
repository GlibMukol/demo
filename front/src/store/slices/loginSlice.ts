import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type TFiledValid<T, E> = {
    value: T,
    valid: boolean,
    errors: E
}

type TLoginField = TFiledValid<string, Array<string>>

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
        emailOnChange: (state, action: PayloadAction<TLoginField>) => {
            state.email = action.payload
        },
        passwordOnChange: (state, action: PayloadAction<TLoginField>) => {
            state.password = action.payload
        }
    },
});



export default loginSlice.reducer;
