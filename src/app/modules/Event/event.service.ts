import AppError from "../../errors/AppError";

import httpStatus from 'http-status';
import { TEvent } from "./event.interface";
import { Event } from "./event.model";
import { UserRole } from "../Users/users.interface";
import { User } from "../Users/user.model";


const createEventIntoDB = async (payload: TEvent) => {
    const isTeacherExist = await User.findOne({ _id: payload.organizer, role: UserRole.Staff })
    if (!isTeacherExist) {
        throw new AppError(httpStatus.NOT_FOUND, "Organizer is not Exist ")
    }
    const result = Event.create(payload)
    return result
}
const getAllEventFromDB = async () => {
    const result = await Event.find()
        .populate([
            { path: 'organizer', model: 'User', select: '-password -role' }
        ]);

    return result
}



export const eventServices = {
    createEventIntoDB,
    getAllEventFromDB
}