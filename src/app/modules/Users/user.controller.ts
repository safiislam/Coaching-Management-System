import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { userServices } from "./users.service";
import httpStatus from 'http-status';
import sendResponse from "../../utils/sendResponse";



const createUser = catchAsync(async (req: Request, res: Response) => {
    const data = req.body
    const result = await userServices.createUserIntoDB(data)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: `Create ${result.role} Successfully`,
        data: result,
    });
})
const getAllUsers = catchAsync(async (req: Request, res: Response) => {
    const result = await userServices.getAllUsersFromDB()
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: `Get All Users Successfully`,
        data: result,
    });
})
const roleUpdate = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params
    const data = req.body
    const result = await userServices.roleUpdateFromDB(data.role, id)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: `User Role Update Successfully`,
        data: result,
    });
})
const deleteUser = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params
    const result = await userServices.deleteUserFromDB(id)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: ` Delete User Successfully`,
        data: result,
    });
})
const userLogin = catchAsync(async (req: Request, res: Response) => {
    const { email, password } = req.body
    const result = await userServices.userLoginFromDB(email, password)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: ` User login Successfully`,
        data: result,
    });
})

export const userControllers = {
    createUser,
    getAllUsers,
    roleUpdate,
    deleteUser,
    userLogin
}