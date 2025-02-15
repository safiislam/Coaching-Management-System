import AppError from "../../errors/AppError";
import { TAttendance } from "./attendance.interface";
import { Attendance } from "./attendance.model";
import httpStatus from 'http-status';


const createAttendanceIntoDB = async (payload: TAttendance) => {
    const isExist = await Attendance.findOne({ classId: payload.classId, date: new Date() })
    if (isExist) {
        throw new AppError(httpStatus.CONFLICT, "This Time Already Take A Attendance")
    }
    const result = Attendance.create(payload)
    return result

}
const getAllAttendanceFromDB = async () => {
    const result = await Attendance.find().populate([
        {
            path: 'classId',
            model: 'Class',
        },
        {
            path: 'attendanceRecords.studentId',
            model: 'User',
            select: '-password'
        },
    ])
    return result
}
const updateAttendanceAStudentFromDB = async (attendanceId: string, studentId: string, newStatus: string) => {

    const result = await Attendance.findOneAndUpdate({ _id: attendanceId, 'attendanceRecords.studentId': studentId }, {
        $set: {
            'attendanceRecords.$[record].status': newStatus
        }
    },
        {
            arrayFilters: [{ 'record.studentId': studentId }],
            new: true,
            runValidators: true,
        }
    )
    return result
}

const findAStudentAttendanceFromDB = async (studentId: string) => {
    const records = await Attendance.find(
        { 'attendanceRecords.studentId': studentId },
        { date: 1, classId: 1, 'attendanceRecords.$': 1 }
    ).populate([
        {
            path: 'attendanceRecords.studentId',
            model: 'User',
            select: '-password -role'
        },
        {
            path: 'classId',
            model: 'Class',
            select: '+title '
        }
    ]).exec();

    // Map the results to extract the desired fields
    const attendanceData = records.map(record => ({
        date: record.date,
        classId: record.classId,
        studentId: record.attendanceRecords[0].studentId,
        status: record.attendanceRecords[0].status
    }));
    return attendanceData
}


export const attendanceServices = {
    createAttendanceIntoDB,
    getAllAttendanceFromDB,
    updateAttendanceAStudentFromDB,
    findAStudentAttendanceFromDB
}