import { z } from "zod";

const homeworkValidationSchema = z.object({
    body: z.object({
        title: z.string().min(1, 'Title is required'),
        description: z.string().min(1, 'Description is required'),
        dueDate: z.string(),
        classId: z.string(),
        assignedBy: z.string()
    })
})


export const homeworkValidations = {
    homeworkValidationSchema
}