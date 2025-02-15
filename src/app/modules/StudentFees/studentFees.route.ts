import { Router } from "express";
import { studentFeesControllers } from "./studentFees.controller";




const router = Router()


router.post('/create', studentFeesControllers.createStudentFees)
router.get('/', studentFeesControllers.getStudentFees)



export const studentFeesRoutes = router