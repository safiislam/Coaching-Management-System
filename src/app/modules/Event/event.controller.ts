import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import httpStatus from 'http-status';
import sendResponse from "../../utils/sendResponse";
import { eventServices } from "./event.service";



const createEvent = catchAsync(async (req: Request, res: Response) => {
    const data = req.body
    const result = await eventServices.createEventIntoDB(data)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: `Create Home work Successfully`,
        data: result,
    });
})
const getAllEvent = catchAsync(async (req: Request, res: Response) => {
    const result = await eventServices.getAllEventFromDB()
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: `Get All Event Successfully`,
        data: result,
    });
})
export const eventControllers = {
    createEvent,
    getAllEvent
}