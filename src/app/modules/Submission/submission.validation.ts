import { z } from "zod";


const submissionValidationSchema = z.object({
    body: z.object({
        studentId: z.string(),
        assignmentId: z.string().optional(),
        examId: z.string().optional(),
        submissionDate: z.string().datetime(),
        fileUrl: z.string(),
        score: z.string(),
        feedback: z.string(),
        status: z.enum(['submitted', 'graded'])
    })
})

export const submissionValidation = {
    submissionValidationSchema
}