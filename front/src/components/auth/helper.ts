import type { TAuthFieldInput } from "../../store/types";

export const setValidationResult = ({ valid, value, errors }: TAuthFieldInput) => ({
    isError: !valid,
    value,
    errorMessage: !valid ? errors[0] : ""

});

export const isDisabled = (fields: TAuthFieldInput[]) => fields.reduce((acc, cur) => acc || !cur.valid || cur.value.length === 0, false) 