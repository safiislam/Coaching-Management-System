import { Router } from "express";
import { courseControllers } from "./course.controller";
import validateRequest from "../../middlewares/validateRequest";
import { courseValidation } from "./course.validation";



const router = Router()


router.post('/create', validateRequest(courseValidation.courseValidationSchema), courseControllers.createCourse)
router.get('/', courseControllers.getAllCourse)
router.post('/add-schedule/:courseId', courseControllers.addASchedule)
router.delete('/schedule/:courseId/:scheduleId', courseControllers.deleteSchedule)
router.post('/enroll/:courseId/:studentId', courseControllers.enrollCourseByStudent)
router.get('/enrolled/:studentId', courseControllers.enrollStudentAccessCourse)
router.get('/schedule/:courseId/:studentId', courseControllers.seeCourseSchedule)



export const courseRoutes = router