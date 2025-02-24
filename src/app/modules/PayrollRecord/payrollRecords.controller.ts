import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import httpStatus from 'http-status';
import sendResponse from "../../utils/sendResponse";
import { payrollRecordsServices } from "./payrollRecords.service";



const createPayrollRecords = catchAsync(async (req: Request, res: Response) => {
    const data = req.body
    const result = await payrollRecordsServices.createPayrollRecordsIntoDB(data)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: `Create Payroll Successfully`,
        data: result,
    });
})
const getAllPayrollRecords = catchAsync(async (req: Request, res: Response) => {
    const result = await payrollRecordsServices.getAllPayrollRecordsFromDB()
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: `Get All Payroll Successfully`,
        data: result,
    });
})
const getAEmployeePayrollRecords = catchAsync(async (req: Request, res: Response) => {
    const { employeeId } = req.params
    const result = await payrollRecordsServices.getAEmployeePayrollRecordsFromDB(employeeId)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: `Get All Payroll A Employee Successfully`,
        data: result,
    });
})
export const payrollRecordsControllers = {
    createPayrollRecords,
    getAllPayrollRecords,
    getAEmployeePayrollRecords
}