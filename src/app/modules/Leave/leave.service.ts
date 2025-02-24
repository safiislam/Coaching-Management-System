import AppError from "../../errors/AppError";

import httpStatus from 'http-status';
import { TLeave } from "./leave.interface";
import { User } from "../Users/user.model";
import { Leave } from "./leave.model";


const createLeaveIntoDB = async (payload: TLeave) => {

    const isUserExist = await User.findOne({ _id: payload.userId })
    if (!isUserExist) {
        throw new AppError(httpStatus.NOT_FOUND, "User is not Exist ")
    }

    const existingLeave = await Leave.findOne({
        userId: payload.userId,
        status: { $in: ["pending", "approved"] }
    });

    if (existingLeave) {
        throw new AppError(httpStatus.CONFLICT, "Leave request already exists");
    }
    payload.username = isUserExist.username

    const result = Leave.create(payload)
    return result
}
const getAllLeaveFromDB = async () => {
    const result = await Leave.find()
        .populate([
            { path: 'userId', model: 'User', select: ['-password'] },
        ]);

    return result
}

const userLeaveStatusChangeFromDB = async (leaveId: string, payload: { status: string }) => {
    const isExistLeave = await Leave.findById(leaveId)
    if (!isExistLeave) {
        throw new AppError(httpStatus.NOT_FOUND, "Leave application is not exist ")
    }
    const result = await Leave.findByIdAndUpdate(leaveId, { status: payload.status }, { new: true })
    if (payload.status === 'approved') {
        await User.findByIdAndUpdate(result?.userId, { isLeave: 'yes' })
    }
    return result

}


export const LeaveServices = {
    createLeaveIntoDB,
    getAllLeaveFromDB,
    userLeaveStatusChangeFromDB
}