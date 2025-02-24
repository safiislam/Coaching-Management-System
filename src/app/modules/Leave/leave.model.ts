import { model, Schema } from "mongoose";
import { TLeave } from "./leave.interface";



const homeworkSchema = new Schema<TLeave>({
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    username: { type: String, required: true },
    reason: { type: String, required: true },
    status: { type: String, enum: ["pending", "approved", "rejected"], default: "pending" },
    appliedAt: { type: Date, default: Date.now },
}, { timestamps: true });

export const Leave = model<TLeave>('Leave', homeworkSchema); 