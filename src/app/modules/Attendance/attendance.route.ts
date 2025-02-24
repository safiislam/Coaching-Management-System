import { Router } from "express";
import { attendanceControllers } from "./attendance.controller";
import validateRequest from "../../middlewares/validateRequest";
import { attendanceValidation } from "./attendance.validation";


const router = Router()


router.post('/create', validateRequest(attendanceValidation.attendanceValidationSchema), attendanceControllers.createAttendance)
router.get('/', attendanceControllers.getAllAttendance)
router.patch('/:attendanceId', attendanceControllers.updateAttendanceAStudent)
router.get('/:studentId', attendanceControllers.findAttendanceAStudent)



export const attendanceRoutes = router