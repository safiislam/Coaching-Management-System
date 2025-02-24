import { Types } from "mongoose";


export type TEvent = {
    title: string;
    description: string;
    date: Date;
    startTime: string;
    endTime: string;
    location: string;
    organizer: Types.ObjectId;
    status: "scheduled" | "ongoing" | "completed" | "canceled";
}