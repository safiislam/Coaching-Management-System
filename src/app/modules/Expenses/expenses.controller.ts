import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import httpStatus from 'http-status';
import sendResponse from "../../utils/sendResponse";
import { expensesServices } from "./expenses.service";



const createExpenses = catchAsync(async (req: Request, res: Response) => {
    const data = req.body
    const result = await expensesServices.createExpensesIntoDB(data)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: `Create Expenses Successfully`,
        data: result,
    });
})
const getAllExpenses = catchAsync(async (req: Request, res: Response) => {
    const result = await expensesServices.getAllExpensesFromDB()
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: `Get All Expenses Successfully`,
        data: result,
    });
})
export const expensesControllers = {
    createExpenses,
    getAllExpenses
}