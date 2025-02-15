import { model, Schema } from "mongoose";
import { TSubmission } from "./submission.interface";


const submissionSchema = new Schema<TSubmission>({
    studentId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    assignmentId: { type: Schema.Types.ObjectId, ref: 'Assignment' },
    examId: { type: Schema.Types.ObjectId, ref: 'Exam' },
    submissionDate: { type: Date, default: Date.now },
    fileUrl: { type: String, required: true },
    score: { type: Number, default: 0 },
    feedback: { type: String },
    status: { type: String, enum: ['submitted', 'graded'], default: 'submitted' },
}, { timestamps: true });


export const Submission = model<TSubmission>('submission', submissionSchema)