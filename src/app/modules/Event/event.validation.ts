import { z } from "zod";

const eventValidationSchema = z.object({
    body: z.object({
        title: z.string().min(3, "Title must be at least 3 characters long"),
        description: z.string().min(10, "Description must be at least 10 characters long"),
        date: z.string(),
        startTime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "Invalid start time format (HH:mm)"),
        endTime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "Invalid end time format (HH:mm)"),
        location: z.string().min(3, "Location must be at least 3 characters long"),
        organizer: z.string(),
        status: z.enum(["scheduled", "ongoing", "completed", "canceled"]),
    })
})


export const eventValidations = {
    eventValidationSchema
}