import type { TLoginField } from "../../store/slices/loginSlice";

export const setValidationResult = ({ valid, value, errors }: TLoginField) => ({
    isError: !valid,
    value,
    errorMessage: !valid ? errors[0] : ""

})