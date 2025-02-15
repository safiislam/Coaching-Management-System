import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import httpStatus from 'http-status';
import sendResponse from "../../utils/sendResponse";
import { courseServices } from "./course.service";



const createCourse = catchAsync(async (req: Request, res: Response) => {
    const data = req.body
    const result = await courseServices.createCourseIntoDB(data)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: `Create Course Successfully`,
        data: result,
    });
})
const getAllCourse = catchAsync(async (req: Request, res: Response) => {
    const result = await courseServices.getAllCourseFromDB()
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: `Get All Course Successfully`,
        data: result,
    });
})
const addASchedule = catchAsync(async (req: Request, res: Response) => {
    const { courseId } = req.params
    const data = req.body
    const result = await courseServices.addAScheduleIntoDB(data, courseId)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: `Add A Schedule Successfully`,
        data: result,
    });
})
const deleteSchedule = catchAsync(async (req: Request, res: Response) => {
    const { courseId, scheduleId } = req.params
    const result = await courseServices.deleteScheduleIntoDB(scheduleId, courseId)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: `Delete A Schedule Successfully`,
        data: result,
    });
})
const enrollCourseByStudent = catchAsync(async (req: Request, res: Response) => {
    const { courseId, studentId } = req.params
    const result = await courseServices.enrollCourseByStudent(courseId, studentId)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: `Student Enroll A course Successfully`,
        data: result,
    });
})
const enrollStudentAccessCourse = catchAsync(async (req: Request, res: Response) => {
    const { studentId } = req.params
    const result = await courseServices.enrollStudentAccessCourse(studentId)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: `Student Enroll Access course Successfully`,
        data: result,
    });
})
const seeCourseSchedule = catchAsync(async (req: Request, res: Response) => {
    const { courseId, studentId } = req.params
    const result = await courseServices.seeCourseScheduleFromDB(courseId, studentId)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: `See Course Schedule Successfully`,
        data: result,
    });
})
export const courseControllers = {
    createCourse,
    getAllCourse,
    addASchedule,
    deleteSchedule,
    enrollCourseByStudent,
    enrollStudentAccessCourse,
    seeCourseSchedule
}