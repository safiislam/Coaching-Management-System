import { model, Schema } from "mongoose";
import { TPayrollRecords } from "./payrollRecords.interface";



const payrollRecordsSchema = new Schema<TPayrollRecords>({
    employeeId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    salary: { type: Number, required: true },
    paymentDate: { type: Date, required: true, default: new Date() }
}, { timestamps: true });

export const PayrollRecords = model<TPayrollRecords>('PayrollRecords', payrollRecordsSchema); 