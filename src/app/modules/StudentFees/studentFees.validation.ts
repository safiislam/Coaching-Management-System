import { z } from "zod";

const studentFeesValidationSchema = z.object({
    body: z.object({
        studentId: z.string(),
        amount: z.number(),
        date: z.string().datetime()
    })
})
export const studentFeesValidation = {
    studentFeesValidationSchema
}