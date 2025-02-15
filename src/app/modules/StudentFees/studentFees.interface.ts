import { Types } from "mongoose";


export type TStudentFees = {
    studentId: Types.ObjectId;
    amount: number;
    date: Date;
}