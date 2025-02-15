import { model, Schema } from "mongoose";
import { TStudentFees } from "./studentFees.interface";



const studentFeesSchema = new Schema<TStudentFees>({
    studentId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now }
});

export const StudentFees = model<TStudentFees>('StudentFees', studentFeesSchema); 