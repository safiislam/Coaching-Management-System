import AppError from "../../errors/AppError";

import httpStatus from 'http-status';
import { TPayrollRecords } from "./payrollRecords.interface";
import { PayrollRecords } from "./payrollRecords.model";
import { User } from "../Users/user.model";
import { UserRole } from "../Users/users.interface";


const createPayrollRecordsIntoDB = async (payload: TPayrollRecords) => {
    const isEmployeeExist = await User.findById(payload.employeeId)
    if (isEmployeeExist?.role === UserRole.Student) {
        throw new AppError(httpStatus.NOT_FOUND, "Employee Doesn't Exist")
    }
    if (!isEmployeeExist) {
        throw new AppError(httpStatus.NOT_FOUND, "Employee Doesn't Exist")
    }
    const isExistInThisMonth = await PayrollRecords.findOne({
        employeeId: payload.employeeId,
        paymentDate: {
            $gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1), // First day of current month
            $lt: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1) // First day of next month
        }
    });

    if (isExistInThisMonth) {
        throw new AppError(httpStatus.NOT_FOUND, "Already Paid in this Month");
    }

    const result = PayrollRecords.create(payload)
    return result
}
const getAllPayrollRecordsFromDB = async () => {
    const result = await PayrollRecords.find()
        .populate([
            { path: 'employeeId', model: 'User', select: ['-password'] },
        ]);

    return result
}
const getAEmployeePayrollRecordsFromDB = async (employeeId: string) => {
    const isEmployeeExist = await User.find({ _id: employeeId })
    if (!isEmployeeExist) {
        throw new AppError(httpStatus.NOT_FOUND, "Employee Doesn't Exist")
    }
    const result = await PayrollRecords.findOne({ employeeId })
    return result
}



export const payrollRecordsServices = {
    createPayrollRecordsIntoDB,
    getAllPayrollRecordsFromDB,
    getAEmployeePayrollRecordsFromDB
}