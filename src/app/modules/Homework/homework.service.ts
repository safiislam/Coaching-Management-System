import AppError from "../../errors/AppError";

import httpStatus from 'http-status';
import { THomework } from "./homework.interface";
import { Homework } from "./homework.model";
import { Class } from "../Class/class.model";
import { User } from "../Users/user.model";


const createHomeworkIntoDB = async (payload: THomework) => {
    const isClassExist = await Class.findById(payload.classId)
    if (!isClassExist) {
        throw new AppError(httpStatus.NOT_FOUND, "This class Doesn't found  ")
    }
    const isTeacherExist = await User.findOne({ _id: payload.assignedBy, role: 'Teacher' })
    if (!isTeacherExist) {
        throw new AppError(httpStatus.NOT_FOUND, "Teacher is not Exist ")
    }

    const result = Homework.create(payload)
    return result
}
const getAllHomeworkFromDB = async () => {
    const result = await Homework.find()
        .populate([
            { path: 'classId', model: 'Class' },
            { path: 'assignedBy', model: 'User', select: '-password -role' }
        ]);

    return result
}



export const homeworkServices = {
    createHomeworkIntoDB,
    getAllHomeworkFromDB
}