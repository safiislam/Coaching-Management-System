import { z } from "zod";

const examValidationSchema = z.object({
    body: z.object({
        title: z.string(),
        description: z.string(),
        courseId: z.string(),
        dueDate: z.string().datetime(),
        maxScore: z.number(),
        createdBy: z.string({ required_error: "Teacher id is required" }),
        status: z.enum(["Pending", "Submit"])
    })
})
export const examValidations = {
    examValidationSchema
}