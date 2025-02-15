import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import httpStatus from 'http-status';
import sendResponse from "../../utils/sendResponse";
import { studentFeesServices } from "./studentFees.service";



const createStudentFees = catchAsync(async (req: Request, res: Response) => {
    const data = req.body
    const result = await studentFeesServices.createStudentFeesIntoDB(data)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: `Student Fees Add Successfully`,
        data: result,
    });
})
const getStudentFees = catchAsync(async (req: Request, res: Response) => {
    const result = await studentFeesServices.getStudentFeesFromDB()
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: `Get All Student fees Successfully`,
        data: result,
    });
})
export const studentFeesControllers = {
    createStudentFees,
    getStudentFees
}