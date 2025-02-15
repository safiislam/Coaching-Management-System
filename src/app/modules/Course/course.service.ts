import AppError from "../../errors/AppError";
import { TCourse, TSchedule } from "./course.interface";
import httpStatus from 'http-status';
import { Course } from "./course.model";
import { User } from "../Users/user.model";
import { UserRole } from "../Users/users.interface";


const createCourseIntoDB = async (payload: TCourse) => {
    const isExist = await Course.findOne({ title: payload.title })
    if (isExist) {
        throw new AppError(httpStatus.CONFLICT, "This Name is Already a Course ")
    }
    const isTeacherExist = await User.findOne({ _id: payload.teacher, role: UserRole.Teacher })
    if (!isTeacherExist) {
        throw new AppError(httpStatus.CONFLICT, "This Teacher is Not Exist")
    }
    const result = Course.create(payload)
    return result
}
const getAllCourseFromDB = async () => {
    const result = await Course.find().populate([{ path: 'students', model: "User", select: '-password' }, { path: 'teacher', model: "User", select: '-password' }])
    return result
}
const addAScheduleIntoDB = async (payload: TSchedule[0], courseId: string) => {
    const result = await Course.findByIdAndUpdate(courseId, { $push: { schedule: payload } }, { new: true })
    return result

}
const deleteScheduleIntoDB = async (scheduleId: string, courseId: string) => {
    const isExistCourse = await Course.findById(courseId)
    if (!isExistCourse) {
        throw new AppError(httpStatus.NOT_FOUND, "Course is Not Exist")
    }
    const result = await Course.findByIdAndUpdate(courseId, { $pull: { schedule: { _id: scheduleId } } })
    return result
}
const enrollCourseByStudent = async (courseId: string, studentId: string) => {
    const isExistCourse = await Course.findById(courseId)
    if (!isExistCourse) {
        throw new AppError(httpStatus.NOT_FOUND, "Course is Not Exist")
    }
    const isUserExist = await User.findOne({ _id: studentId, role: UserRole.Student })
    if (!isUserExist) {
        throw new AppError(httpStatus.NOT_FOUND, "You Are not Available For This Course")
    }
    const result = await Course.findByIdAndUpdate(courseId, { $push: { students: studentId } })
    return result
}
const enrollStudentAccessCourse = async (studentId: string) => {
    const result = await Course.find({ students: studentId }).select('-students')
    if (!result) {
        throw new AppError(httpStatus.BAD_REQUEST, 'You are not enrolled this corse')
    }
    return result
}

const seeCourseScheduleFromDB = async (courseId: string, studentId: string) => {
    const isUserExist = await User.findOne({ _id: studentId, role: UserRole.Student })
    if (!isUserExist) {
        throw new AppError(httpStatus.BAD_REQUEST, 'You are not Available For Schedule1')
    }
    const isScheduleAvailable = await Course.findOne({ _id: courseId, students: studentId })
    if (!isScheduleAvailable) {
        throw new AppError(httpStatus.BAD_REQUEST, 'You are not Available For Schedule2')
    }
    const result = (await Course.findById(courseId))?.schedule
    return result
}

export const courseServices = {
    createCourseIntoDB,
    getAllCourseFromDB,
    addAScheduleIntoDB,
    deleteScheduleIntoDB,
    enrollCourseByStudent,
    enrollStudentAccessCourse,
    seeCourseScheduleFromDB
}