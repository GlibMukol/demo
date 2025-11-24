import { z } from 'zod';


export const EmailSchema = z.email({
    message: "Invalid email address"
});



const passwordRequirements = {
    minLength: 8,
    maxLength: 12,
    uppercase: /.*[A-Z].*/,
    lowercase: /.*[a-z].*/,
    number: /.*[0-9].*/,
    specialChar: /.*[\W_].*/,
};

export const PasswordSchema = z.string()
    .min(passwordRequirements.minLength, {
        message: `Password must be at least ${passwordRequirements.minLength} characters long.`,
    })
    .max(passwordRequirements.maxLength, {
        message: `Password must be no more than ${passwordRequirements.maxLength} characters long.`,
    })
    .regex(passwordRequirements.uppercase, {
        message: "Password must contain at least one uppercase letter.",
    })
    .regex(passwordRequirements.lowercase, {
        message: "Password must contain at least one lowercase letter.",
    })
    .regex(passwordRequirements.number, {
        message: "Password must contain at least one number.",
    })
    .regex(passwordRequirements.specialChar, {
        message: "Password must contain at least one special character.",
    });

