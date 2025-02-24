import { model, Schema } from "mongoose";
import { TEvent } from "./event.interface";



const eventSchema = new Schema<TEvent>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    location: { type: String, required: true },
    organizer: { type: Schema.Types.ObjectId, ref: "User", required: true },
    status: {
        type: String,
        enum: ["scheduled", "ongoing", "completed", "canceled"],
        default: "scheduled"
    },
}, { timestamps: true });

export const Event = model<TEvent>('E', eventSchema); 