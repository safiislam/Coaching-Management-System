import { Types } from "mongoose";

export type TClass = {
    type: 'live' | 'offline';
    schedule: Types.ObjectId;
    materials?: string[];
    courseId: Types.ObjectId
}