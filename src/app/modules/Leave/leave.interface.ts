import { Types } from "mongoose";


export type TLeave = {
    userId: Types.ObjectId
    username: string,
    reason: string
    status: "pending" | "approved" | "rejected"
    appliedAt: Date
}