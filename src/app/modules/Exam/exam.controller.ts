import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import httpStatus from 'http-status';
import sendResponse from "../../utils/sendResponse";
import { examServices } from "./exam.service";



const createExam = catchAsync(async (req: Request, res: Response) => {
    const data = req.body
    const result = await examServices.createExamIntoDB(data)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: `Create Exam Successfully`,
        data: result,
    });
})
const getAllExam = catchAsync(async (req: Request, res: Response) => {
    const result = await examServices.getAllExamFromDB()
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: `Get All Exams Successfully`,
        data: result,
    });
})
const statusChangeOfExam = catchAsync(async (req: Request, res: Response) => {
    const { examId } = req.params
    const { status } = req.body
    const result = await examServices.statusChangeOfExam(examId, status)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: `Update A Students Exam Successfully`,
        data: result,
    });
})

const getAllExamByCourseId = catchAsync(async (req: Request, res: Response) => {
    const { courseId } = req.params
    const result = await examServices.getAllExamByCourseIdFromDB(courseId)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: `Get All By Exam By CourseId Successfully`,
        data: result,
    });
})

export const examControllers = {
    createExam,
    getAllExam,
    statusChangeOfExam,
    getAllExamByCourseId
}