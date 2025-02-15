import config from "../../config";
import AppError from "../../errors/AppError";
import { User } from "./user.model";
import { TUsers } from "./users.interface";
import bcrypt from 'bcrypt';
import httpStatus from 'http-status';
import jwt from 'jsonwebtoken';


const createUserIntoDB = async (payload: TUsers) => {
    const haspassword = bcrypt.hashSync(payload.password, Number(config.saltRounds))
    const isExist = await User.findOne({ email: payload.email })
    if (isExist) {
        throw new AppError(httpStatus.CONFLICT, "User Email Already Exist")
    }
    payload.password = haspassword
    const result = await User.create(payload)
    return result
}
const getAllUsersFromDB = async () => {
    const result = await User.find().select('-password')
    return result
}
const roleUpdateFromDB = async (role: string, id: string) => {
    const result = await User.findByIdAndUpdate(id, { $set: { role } }, { new: true }).select('-password')
    return result
}
const deleteUserFromDB = async (id: string) => {
    const isExist = await User.findById(id)
    if (!isExist) {
        throw new AppError(httpStatus.NOT_FOUND, "User doesn't Exist")
    }
    await User.findByIdAndDelete(id)
    return null
}
const userLoginFromDB = async (email: string, password: string) => {
    const isUserExist = await User.findOne({ email })
    if (!isUserExist) {
        throw new AppError(httpStatus.NOT_FOUND, "User doesn't Exist")
    }
    const isPasswordMatch = bcrypt.compareSync(password, isUserExist.password)
    if (isPasswordMatch) {
        const userData = {
            email: isUserExist.email,
            role: isUserExist.role,
        }
        const token = jwt.sign(userData, config.jwt_access_secret as string, { expiresIn: '1d' })
        return { token }
    }
    else {
        throw new AppError(httpStatus.NOT_FOUND, "Wrong Password")
    }
}


export const userServices = {
    createUserIntoDB,
    getAllUsersFromDB,
    roleUpdateFromDB,
    deleteUserFromDB,
    userLoginFromDB
}