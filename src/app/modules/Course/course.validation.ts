import { Types } from "mongoose";
import { z } from "zod";
export const UserRoleEnum = z.enum(['Admin', 'Teacher', 'Student', 'Accountant', 'Staff']);

const ScheduleSchema = z.array(
    z.object({
        date: z.coerce.date(), // Converts input to Date
        topic: z.string().min(1, "Topic is required"),
        startTime: z.string().regex(/^\d{2}:\d{2}$/, "Invalid time format (HH:MM)"),
        endTime: z.string().regex(/^\d{2}:\d{2}$/, "Invalid time format (HH:MM)"),
    })
);

export const courseValidationSchema = z.object({
    body: z.object({
        title: z.string().min(1, "Title is required"),
        description: z.string().min(1, "Description is required"),
        schedule: ScheduleSchema,
        students: z.array(z.instanceof(Types.ObjectId)), // Mongoose ObjectId validation
        teacher: z.string(),
    })
});


export const courseValidation = {
    courseValidationSchema
}