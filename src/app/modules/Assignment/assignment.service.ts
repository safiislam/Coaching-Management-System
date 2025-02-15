import AppError from "../../errors/AppError";

import httpStatus from 'http-status';
import { TAssignment } from "./assignment.interface";
import { Assignment } from "./assignment.model";
import { Course } from "../Course/course.model";




const createAssignmentIntoDB = async (payload: TAssignment) => {
    const isExist = await Course.find({ _id: payload.courseId })
    if (!isExist) {
        throw new AppError(httpStatus.CONFLICT, "The Course Don't Exist")
    }
    if (new Date(payload.dueDate) < new Date()) {
        throw new AppError(httpStatus.CONFLICT, "The due date cannot be in the past.");
    }

    const result = Assignment.create(payload)
    return result

}
const getAllAssignmentFromDB = async () => {
    const result = await Assignment.find().populate([
        {
            path: 'courseId',
            model: 'Course',
            select: ['-students']
        }
    ])
    return result
}
const statusChangeOfAssignment = async (assignmentId: string, status: string) => {
    const result = await Assignment.findByIdAndUpdate(assignmentId, { $set: { status } })
    return result
}


export const assignmentServices = {
    createAssignmentIntoDB,
    getAllAssignmentFromDB,
    statusChangeOfAssignment
}