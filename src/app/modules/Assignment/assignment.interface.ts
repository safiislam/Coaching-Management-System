import { Types } from "mongoose"

export type TAssignment = {
    title: string,
    description: string
    courseId: Types.ObjectId,
    dueDate: Date
    maxScore: number
    createdBy: Types.ObjectId,
    status: "Pending" | "Submit"
}