import { Types } from "mongoose"

export type TSubmission = {
    studentId: Types.ObjectId // Student who submitted
    assignmentId?: Types.ObjectId
    examId?: Types.ObjectId
    submissionDate: Date
    fileUrl: string
    score: number
    feedback: string
    status: 'submitted' | 'graded'
}