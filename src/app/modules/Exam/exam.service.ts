import AppError from "../../errors/AppError";

import httpStatus from 'http-status';
import { Course } from "../Course/course.model";
import { TExam } from "./exam.interface";
import { Exam } from "./exam.model";




const createExamIntoDB = async (payload: TExam) => {
    const isExist = await Course.find({ _id: payload.courseId })
    if (!isExist) {
        throw new AppError(httpStatus.CONFLICT, "The Course Don't Exist")
    }
    if (new Date(payload.dueDate) < new Date()) {
        throw new AppError(httpStatus.CONFLICT, "The due date cannot be in the past.");
    }

    const result = Exam.create(payload)
    return result

}
const getAllExamFromDB = async () => {
    const result = await Exam.find().populate([
        {
            path: 'courseId',
            model: 'Course',
            select: ['-students', '-schedule']
        }
    ])
    return result
}
const statusChangeOfExam = async (examId: string, status: string) => {
    const result = await Exam.findByIdAndUpdate(examId, { $set: { status } })
    return result
}
const getAllExamByCourseIdFromDB = async (courseId: string) => {
    const result = await Exam.find({ courseId }).populate([
        {
            path: 'courseId',
            model: 'Course',
            select: ['-students', '-schedule']
        }
    ])
    if (result.length == 0) {
        throw new AppError(httpStatus.NOT_FOUND, 'Exam is Not Found')
    }
    return result
}


export const examServices = {
    createExamIntoDB,
    getAllExamFromDB,
    statusChangeOfExam,
    getAllExamByCourseIdFromDB
}