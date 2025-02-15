import { Types } from "mongoose";

export type TSchedule = {

    date: Date;
    topic: string;
    startTime: string;
    endTime: string;
}[];




export type TCourse = {
    title: string;
    description: string;
    schedule: TSchedule
    students: Types.Array<Types.ObjectId>; // References to User (Students)
    teacher: Types.ObjectId; // Reference to User (Teacher)
}

