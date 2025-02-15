import { model, Schema } from "mongoose";
import { TCourse, } from "./course.interface";




const scheduleSchema = new Schema({
    date: { type: Date, required: true },
    topic: { type: String, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
});


const courseSchema = new Schema<TCourse>({
    title: { type: String, required: true },
    description: { type: String },
    schedule: [scheduleSchema],
    students: [{ type: Schema.Types.ObjectId, ref: 'User', index: true }],
    teacher: { type: Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });


export const Course = model<TCourse>('Course', courseSchema);