import { z } from "zod";

const leaveValidationSchema = z.object({
    body: z.object({
        userId: z.string(),
        reason: z.string(),
        status: z.enum(["pending", "approved", "rejected"]).default('pending'),
    })
})
const leaveApplicationStatusChangeValidationSchema = z.object({
    body: z.object({
        status: z.enum(["pending", "approved", "rejected"])
    })
})


export const leaveValidations = {
    leaveValidationSchema,
    leaveApplicationStatusChangeValidationSchema
}