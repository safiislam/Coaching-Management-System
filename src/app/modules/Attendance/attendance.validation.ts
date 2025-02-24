import { z } from "zod";
export const UserRoleEnum = z.enum(['Admin', 'Teacher', 'Student', 'Accountant', 'Staff']);

const attendanceValidationSchema = z.object({
    body: z.object({
        date: z.string({ required_error: 'Date is Require' }).datetime(),
        classId: z.string({ required_error: "Class Id is Require" }),
        attendanceRecords: z.array(z.string()).optional()
    })
})


export const attendanceValidation = {
    attendanceValidationSchema
}