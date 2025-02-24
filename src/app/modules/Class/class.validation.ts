import { z } from "zod";


const classValidationSchema = z.object({
    body: z.object({
        type: z.enum(['live', 'offline']),
        schedule: z.string({ required_error: 'Schedule is Required' }),
        materials: z.array(z.string()).optional(),
        courseId: z.string({ required_error: 'Course id Is Required' })
    })
})


export const classValidation = {
    classValidationSchema
}