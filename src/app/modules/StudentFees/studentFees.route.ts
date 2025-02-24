import { Router } from "express";
import { studentFeesControllers } from "./studentFees.controller";
import validateRequest from "../../middlewares/validateRequest";
import { studentFeesValidation } from "./studentFees.validation";




const router = Router()


router.post('/create', validateRequest(studentFeesValidation.studentFeesValidationSchema), studentFeesControllers.createStudentFees)
router.get('/', studentFeesControllers.getStudentFees)



export const studentFeesRoutes = router