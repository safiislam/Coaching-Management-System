import { Router } from "express";
import { submissionControllers } from "./submission.controller";
import validateRequest from "../../middlewares/validateRequest";
import { submissionValidation } from "./submission.validation";



const router = Router()


router.post('/create', validateRequest(submissionValidation.submissionValidationSchema), submissionControllers.createSubmissionIntoDB)
router.get('/', submissionControllers.getAllSubmission)
router.patch('/teacher/:submissionId', submissionControllers.submissionTakeReviewByTeacher)
router.get('/student/:studentId', submissionControllers.aStudentAllSubmission)



export const submissionRoutes = router