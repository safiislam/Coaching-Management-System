import { Router } from "express";
import { examControllers } from "./exam.controller";
import validateRequest from "../../middlewares/validateRequest";
import { examValidations } from "./exam.validation";



const router = Router()


router.post('/create', validateRequest(examValidations.examValidationSchema), examControllers.createExam)
router.get('/', examControllers.getAllExam)
router.get('/:courseId', examControllers.getAllExamByCourseId)
router.patch('/:examId', examControllers.statusChangeOfExam)



export const examRoutes = router