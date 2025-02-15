import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import httpStatus from 'http-status';
import sendResponse from "../../utils/sendResponse";
import { attendanceServices } from "./attendance.service";



const createAttendance = catchAsync(async (req: Request, res: Response) => {
    const data = req.body
    const result = await attendanceServices.createAttendanceIntoDB(data)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: `Create Attendance Successfully`,
        data: result,
    });
})
const getAllAttendance = catchAsync(async (req: Request, res: Response) => {
    const result = await attendanceServices.getAllAttendanceFromDB()
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: `Get All Attendance Successfully`,
        data: result,
    });
})
const updateAttendanceAStudent = catchAsync(async (req: Request, res: Response) => {
    const { attendanceId } = req.params
    const { studentId, newStatus } = req.body
    const result = await attendanceServices.updateAttendanceAStudentFromDB(attendanceId, studentId, newStatus)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: `Update A Students Attendance Successfully`,
        data: result,
    });
})
const findAttendanceAStudent = catchAsync(async (req: Request, res: Response) => {
    const { studentId } = req.params
    const result = await attendanceServices.findAStudentAttendanceFromDB(studentId)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: `Find A Students Attendance Successfully`,
        data: result,
    });
})
export const attendanceControllers = {
    createAttendance,
    getAllAttendance,
    updateAttendanceAStudent,
    findAttendanceAStudent
}