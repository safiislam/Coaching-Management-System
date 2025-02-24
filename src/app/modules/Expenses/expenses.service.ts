
import { TExpenses } from "./expenses.interface";
import { Expenses } from "./expenses.model";



const createExpensesIntoDB = async (payload: TExpenses) => {
    const result = Expenses.create(payload)
    return result
}
const getAllExpensesFromDB = async () => {
    const result = await Expenses.find()
    return result
}

export const expensesServices = {
    createExpensesIntoDB,
    getAllExpensesFromDB
}