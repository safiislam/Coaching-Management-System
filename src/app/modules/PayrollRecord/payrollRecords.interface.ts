import { Types } from "mongoose";


export type TPayrollRecords = {
    employeeId: Types.ObjectId
    salary: number,
    paymentDate: Date,
}