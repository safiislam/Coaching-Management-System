import AppError from "../../errors/AppError";

import httpStatus from 'http-status';
import { TSubmission } from "./submission.interface";
import { User } from "../Users/user.model";
import { UserRole } from "../Users/users.interface";
import { Assignment } from "../Assignment/assignment.model";
import { Submission } from "./submission.model";




const createSubmissionIntoDB = async (payload: TSubmission) => {
    const isExist = await User.findOne({ _id: payload.studentId, role: UserRole.Student })
    if (!isExist) {
        throw new AppError(httpStatus.CONFLICT, "User Is not Exist")
    }
    if (payload.assignmentId) {
        const isAssignmentIdExist = await Assignment.findById(payload.assignmentId)
        if (!isAssignmentIdExist) {
            throw new AppError(httpStatus.CONFLICT, "Assignment is not Exist")
        }
    }
    if (payload.examId) {
        const isExamExist = await Assignment.findById(payload.examId)
        if (!isExamExist) {
            throw new AppError(httpStatus.CONFLICT, "Exam is not Exist")
        }
    }

    const result = await Submission.create(payload)
    return result

}
const getAllSubmissionFromDB = async () => {
    const result = await Submission.find().populate([
        {
            path: 'assignmentId',
            model: 'Assignment',
        },
        {
            path: 'examId',
            model: 'Assignment',
        }
    ])
    return result
}
const submissionTakeReviewByTeacherFromDB = async (submissionId: string, payload: Partial<TSubmission>) => {
    const isSubmissionExist = await Submission.findById(submissionId)
    if (!isSubmissionExist) {
        throw new AppError(httpStatus.NOT_FOUND, "Your Submission is not Found")
    }
    const result = await Submission.findByIdAndUpdate(submissionId, { $set: { ...payload } }, { new: true })
    return result
}
const aStudentAllSubmission = async (studentId: string) => {

    const result = await Submission.find({ studentId })
    if (!result) {
        throw new AppError(httpStatus.NOT_FOUND, "Student Have No Submission")
    }
    return result
}


export const submissionServices = {
    createSubmissionIntoDB,
    getAllSubmissionFromDB,
    submissionTakeReviewByTeacherFromDB,
    aStudentAllSubmission
}