import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { expensesValidation } from "./expenses.validation";
import { expensesControllers } from "./expenses.controller";



const router = Router()


router.post('/create', validateRequest(expensesValidation.expensesValidationSchema), expensesControllers.createExpenses)
router.get('/', expensesControllers.getAllExpenses)



export const expensesRoutes = router