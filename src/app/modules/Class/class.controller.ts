import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import httpStatus from 'http-status';
import sendResponse from "../../utils/sendResponse";
import { classServices } from "./class.service";



const createClass = catchAsync(async (req: Request, res: Response) => {
    const data = req.body
    const result = await classServices.createClassIntoDB(data)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: `Create Class Successfully`,
        data: result,
    });
})
const getAllClass = catchAsync(async (req: Request, res: Response) => {
    const result = await classServices.getAllClassFromDB()
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: `Get All Class Successfully`,
        data: result,
    });
})
const studentAccessClass = catchAsync(async (req: Request, res: Response) => {
    const { courseId, studentId } = req.params
    const result = await classServices.studentAccessClassFromDB(courseId, studentId)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: `Get All Class Successfully`,
        data: result,
    });
})
export const classControllers = {
    createClass,
    getAllClass,
    studentAccessClass
}