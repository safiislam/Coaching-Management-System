import { model, Schema } from "mongoose";
import { TAttendance, TAttendanceRecord } from "./attendance.interface";



const attendanceRecordSchema = new Schema<TAttendanceRecord>({
    studentId: { type: Schema.Types.ObjectId, ref: 'Student', required: true },
    status: {
        type: String,
        enum: ['Present', 'Absent', 'Sick', 'Excused'],
        required: true,
    },
});

const attendanceSchema = new Schema<TAttendance>({
    date: { type: Date, default: new Date() },
    classId: { type: Schema.Types.ObjectId, ref: 'Class', required: true },
    attendanceRecords: [attendanceRecordSchema],
}, { timestamps: true });

export const Attendance = model<TAttendance>('Attendance', attendanceSchema)