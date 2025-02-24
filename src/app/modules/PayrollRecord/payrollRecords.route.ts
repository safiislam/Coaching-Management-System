import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { payrollRecordsValidations } from "./payrollRecords.validation";
import { payrollRecordsControllers } from "./payrollRecords.controller";



const router = Router()


router.post('/create', validateRequest(payrollRecordsValidations.payrollRecordsValidationSchema), payrollRecordsControllers.createPayrollRecords)
router.get('/', payrollRecordsControllers.getAllPayrollRecords)
router.get('/:employeeId', payrollRecordsControllers.getAEmployeePayrollRecords)



export const payrollRecordsRoutes = router