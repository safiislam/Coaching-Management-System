import { Router } from "express";
import { assignmentControllers } from "./assignment.controller";
import validateRequest from "../../middlewares/validateRequest";
import { assignmentValidation } from "./assignment.validation";



const router = Router()


router.post('/create', validateRequest(assignmentValidation.assignmentValidationSchema), assignmentControllers.createAssignment)
router.get('/', assignmentControllers.getAllAssignment)
router.get('/:courseId', assignmentControllers.getAllAssignmentByCourseId)
router.patch('/:assignmentId', assignmentControllers.statusChangeOfAssignment)



export const assignmentRoutes = router