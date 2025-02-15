import { model, Schema } from "mongoose";
import { TAssignment } from "./assignment.interface";


const assignmentSchema = new Schema<TAssignment>({
    title: { type: String, required: true },
    description: { type: String },
    courseId: { type: Schema.Types.ObjectId, ref: 'Course', required: true }, // Reference to the course
    dueDate: { type: Date, required: true },
    maxScore: { type: Number, required: true }, // Maximum score for the assignment
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    status: { type: String, enum: ['Pending', "Submit"], default: 'Pending' }
}, { timestamps: true });



export const Assignment = model<TAssignment>('Assignment', assignmentSchema)