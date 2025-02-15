import { model, Schema } from "mongoose";
import { TClass } from "./class.interface";

const classSchema = new Schema<TClass>({
    type: { type: String, enum: ['live', 'offline'], required: true },
    schedule: { type: Schema.Types.ObjectId, required: true, ref: 'Course.schedule' },
    materials: { type: [String] },
    courseId: { type: Schema.Types.ObjectId, ref: 'Course', required: true }
}, { timestamps: true });


export const Class = model<TClass>('Class', classSchema);