import { z } from "zod";

const expensesValidationSchema = z.object({
    body: z.object({
        category: z.string(),
        description: z.string(),
        amount: z.number(),
        date: z.string().datetime(),
    })
})


export const expensesValidation = {
    expensesValidationSchema
}