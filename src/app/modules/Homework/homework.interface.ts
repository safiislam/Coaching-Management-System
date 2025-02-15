import { Types } from "mongoose";


export type THomework = {
    title: string;
    description: string;
    dueDate: Date;
    classId: Types.ObjectId;
    assignedBy: Types.ObjectId; // Teacher ID
}