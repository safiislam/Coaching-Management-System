import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import httpStatus from 'http-status';
import sendResponse from "../../utils/sendResponse";
import { submissionServices } from "./submission.service";



const createSubmissionIntoDB = catchAsync(async (req: Request, res: Response) => {
    const data = req.body
    const result = await submissionServices.createSubmissionIntoDB(data)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: `Task Submission Successfully`,
        data: result,
    });
})
const getAllSubmission = catchAsync(async (req: Request, res: Response) => {
    const result = await submissionServices.getAllSubmissionFromDB()
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: `Get All Submission Successfully`,
        data: result,
    });
})
const submissionTakeReviewByTeacher = catchAsync(async (req: Request, res: Response) => {
    const { submissionId } = req.params
    const data = req.body
    const result = await submissionServices.submissionTakeReviewByTeacherFromDB(submissionId, data)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: `A Teacher Mark add Successfully`,
        data: result,
    });
})
const aStudentAllSubmission = catchAsync(async (req: Request, res: Response) => {
    const { studentId } = req.params
    const result = await submissionServices.aStudentAllSubmission(studentId)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: `A Student Get All Submission Successfully`,
        data: result,
    });
})

export const submissionControllers = {
    createSubmissionIntoDB,
    getAllSubmission,
    submissionTakeReviewByTeacher,
    aStudentAllSubmission
}