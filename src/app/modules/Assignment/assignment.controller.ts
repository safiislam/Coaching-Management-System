import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import httpStatus from 'http-status';
import sendResponse from "../../utils/sendResponse";
import { assignmentServices } from "./assignment.service";



const createAssignment = catchAsync(async (req: Request, res: Response) => {
    const data = req.body
    const result = await assignmentServices.createAssignmentIntoDB(data)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: `Create Assignment Successfully`,
        data: result,
    });
})
const getAllAssignment = catchAsync(async (req: Request, res: Response) => {
    const result = await assignmentServices.getAllAssignmentFromDB()
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: `Get All Assignments Successfully`,
        data: result,
    });
})
const statusChangeOfAssignment = catchAsync(async (req: Request, res: Response) => {
    const { assignmentId } = req.params
    const { status } = req.body
    const result = await assignmentServices.statusChangeOfAssignment(assignmentId, status)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: `Update A Students Attendance Successfully`,
        data: result,
    });
})
const getAllAssignmentByCourseId = catchAsync(async (req: Request, res: Response) => {
    const { courseId } = req.params
    const result = await assignmentServices.getAllAssignmentByCourseIdFromDB(courseId)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: `Get All Assignment By CourseId Successfully`,
        data: result,
    });
})

export const assignmentControllers = {
    createAssignment,
    getAllAssignment,
    statusChangeOfAssignment,
    getAllAssignmentByCourseId
}