import { model, Schema } from "mongoose";
import { THomework } from "./homework.interface";



const homeworkSchema = new Schema<THomework>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    dueDate: { type: Date, required: true },
    classId: { type: Schema.Types.ObjectId, ref: 'Class', required: true },
    assignedBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

export const Homework = model<THomework>('Homework', homeworkSchema); 