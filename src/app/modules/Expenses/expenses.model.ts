import { model, Schema } from "mongoose";
import { TExpenses } from "./expenses.interface";



const expensesSchema = new Schema<TExpenses>({
    category: { type: String, required: true },
    description: { type: String },
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now },
}, { timestamps: true });

export const Expenses = model<TExpenses>('Expenses', expensesSchema); 