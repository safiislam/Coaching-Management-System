import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import httpStatus from 'http-status';
import sendResponse from "../../utils/sendResponse";
import { homeworkServices } from "./homework.service";



const createHomework = catchAsync(async (req: Request, res: Response) => {
    const data = req.body
    const result = await homeworkServices.createHomeworkIntoDB(data)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: `Create Home work Successfully`,
        data: result,
    });
})
const getAllHomework = catchAsync(async (req: Request, res: Response) => {
    const result = await homeworkServices.getAllHomeworkFromDB()
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: `Get All Homework Successfully`,
        data: result,
    });
})
export const homeworkControllers = {
    createHomework,
    getAllHomework
}