import { z } from "zod";
export const UserRoleEnum = z.enum(['Admin', 'Teacher', 'Student', 'Accountant', 'Staff']);

const userValidationSchema = z.object({
    body: z.object({
        username: z.string().min(1, 'Username is required'),
        email: z.string().email('Invalid email address'),
        password: z.string().min(6, 'Password must be at least 6 characters long'),
        role: UserRoleEnum,
    })
})


export const userValidations = {
    userValidationSchema
}