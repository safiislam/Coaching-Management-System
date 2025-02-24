import { z } from "zod";

const payrollRecordsValidationSchema = z.object({
    body: z.object({
        employeeId: z.string(),
        salary: z.number(),
        paymentDate: z.string().optional(),
    })
})


export const payrollRecordsValidations = {
    payrollRecordsValidationSchema
}