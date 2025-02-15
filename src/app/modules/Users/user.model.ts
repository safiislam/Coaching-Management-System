import { model, Schema } from "mongoose";
import { TUsers, UserRole } from "./users.interface";

const userSchema = new Schema<TUsers>({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: UserRole, required: true },
});


userSchema.post('save', function (doc, next) {
    doc.password = ''
    next()

})

export const User = model<TUsers>('User', userSchema);