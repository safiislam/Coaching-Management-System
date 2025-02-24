import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import httpStatus from 'http-status';
import sendResponse from "../../utils/sendResponse";
import { LeaveServices } from "./leave.service";



const createLeave = catchAsync(async (req: Request, res: Response) => {
    const data = req.body
    const result = await LeaveServices.createLeaveIntoDB(data)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: `Create Leave Application Successfully`,
        data: result,
    });
})
const getAllLeave = catchAsync(async (req: Request, res: Response) => {
    const result = await LeaveServices.getAllLeaveFromDB()
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: `Get All Leave Successfully`,
        data: result,
    });
})
const userLeaveStatusChange = catchAsync(async (req: Request, res: Response) => {
    const { leaveId } = req.params
    const payload = req.body
    const result = await LeaveServices.userLeaveStatusChangeFromDB(leaveId, payload)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: `User Leave Application Status Change Successfully`,
        data: result,
    });
})
export const leaveControllers = {
    createLeave,
    getAllLeave,
    userLeaveStatusChange
}