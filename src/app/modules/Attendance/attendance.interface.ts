import { Schema } from "mongoose";


export type TAttendanceRecord = {
    studentId: Schema.Types.ObjectId;
    status: 'Present' | 'Absent';

}


export type TAttendance = {
    date: Date;
    classId: Schema.Types.ObjectId;
    attendanceRecords: TAttendanceRecord[];
}


