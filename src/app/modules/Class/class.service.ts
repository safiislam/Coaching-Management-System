import mongoose from "mongoose";
import AppError from "../../errors/AppError";
import { Course } from "../Course/course.model";
import { User } from "../Users/user.model";
import { TClass } from "./class.interface";
import { Class } from "./class.model";
import httpStatus from 'http-status';


const createClassIntoDB = async (payload: TClass) => {
    const isCourseExist = await Course.findById(payload.courseId)
    if (!isCourseExist) {
        throw new AppError(httpStatus.CONFLICT, "Course is not Found")
    }
    const isExistSchedule = await Course.findOne({ _id: payload.courseId, "schedule._id": payload.schedule })
    console.log(isExistSchedule);
    if (!isExistSchedule) {
        throw new AppError(httpStatus.NOT_FOUND, "Schedule is  not Found")
    }
    const result = Class.create(payload)
    return result
}
const getAllClassFromDB = async () => {
    const result = await Class.find()
    return result
}
const studentAccessClassFromDB = async (courseId: string, studentId: string) => {
    const isStudentExist = await User.findById(studentId)
    if (!isStudentExist) {
        throw new AppError(httpStatus.NOT_FOUND, "You Are Not Available for the Course")
    }
    const isStudentAvailableForThisCourse = await Course.findOne({ _id: courseId, students: studentId })
    if (!isStudentAvailableForThisCourse) {
        throw new AppError(httpStatus.NOT_FOUND, "You Are Not Available for the Course")
    }

    const result = await Class.aggregate([
        { $match: { courseId: new mongoose.Types.ObjectId(courseId) } },
        {
            $lookup: {
                from: 'courses',
                localField: 'courseId',
                foreignField: '_id',
                as: 'course',
            },
        },

        { $unwind: '$course' },
        {
            $addFields: {
                schedule: {
                    $arrayElemAt: [
                        {
                            $filter: {
                                input: '$course.schedule',
                                as: 'sched',
                                cond: { $eq: ['$$sched._id', '$schedule'] },
                            },
                        },
                        0,
                    ],
                },
            },
        },
        {
            $project: {
                course: 0,
            },
        },
    ])

    return result

}


export const classServices = {
    createClassIntoDB,
    getAllClassFromDB,
    studentAccessClassFromDB
}





