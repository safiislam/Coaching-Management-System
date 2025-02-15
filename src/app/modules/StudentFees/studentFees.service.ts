import AppError from "../../errors/AppError";
import httpStatus from 'http-status';
import { TStudentFees } from "./studentFees.interface";
import { StudentFees } from "./studentFees.model";
import { User } from "../Users/user.model";
import { UserRole } from "../Users/users.interface";


const createStudentFeesIntoDB = async (payload: TStudentFees) => {
    const isStudentExist = await User.findOne({ _id: payload.studentId, role: UserRole.Student })
    if (!isStudentExist) {
        throw new AppError(httpStatus.NOT_FOUND, "Student Doesn't found  ")
    }

    const result = StudentFees.create(payload)
    return result
}
const getStudentFeesFromDB = async () => {
    const result = await StudentFees.aggregate([
        {
            $lookup: {
                from: "users", // Name of the User collection
                localField: "studentId",
                foreignField: "_id",
                as: "studentInfo" // Field to store the joined data
            }
        },
        {
            $unwind: "$studentInfo" // Flatten the studentInfo array
        },
        {
            $group: {
                _id: {
                    month: { $month: "$date" },
                    year: { $year: "$date" }
                },
                totalAmount: { $sum: "$amount" },
                students: {
                    $push: {
                        studentId: "$studentId",
                        studentName: "$studentInfo.username", // Assuming the User collection has a `name` field
                        amount: "$amount",
                        date: "$date"
                    }
                }
            }
        },
        {
            $addFields: {
                monthName: {
                    $arrayElemAt: [
                        [
                            "", // Placeholder for indexing
                            "January",
                            "February",
                            "March",
                            "April",
                            "May",
                            "June",
                            "July",
                            "August",
                            "September",
                            "October",
                            "November",
                            "December"
                        ],
                        "$_id.month"
                    ]
                }
            }
        },
        {
            $project: {
                _id: 0,
                month: "$_id.month",
                monthName: 1,
                year: "$_id.year",
                totalAmount: 1,
                students: 1 // Include the list of students with their details
            }
        },
        {
            $sort: { year: -1, month: -1 } // Sort by year and month (descending)
        }
    ]);



    return result

}



export const studentFeesServices = {
    createStudentFeesIntoDB,
    getStudentFeesFromDB
}