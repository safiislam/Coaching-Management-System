import { Router } from "express";
import { attendanceControllers } from "./attendance.controller";



const router = Router()


router.post('/create', attendanceControllers.createAttendance)
router.get('/', attendanceControllers.getAllAttendance)
router.patch('/:attendanceId', attendanceControllers.updateAttendanceAStudent)
router.get('/:studentId', attendanceControllers.findAttendanceAStudent)



export const attendanceRoutes = router