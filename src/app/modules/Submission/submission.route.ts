import { Router } from "express";
import { submissionControllers } from "./submission.controller";



const router = Router()


router.post('/create', submissionControllers.createSubmissionIntoDB)
router.get('/', submissionControllers.getAllSubmission)
router.patch('/teacher/:submissionId', submissionControllers.submissionTakeReviewByTeacher)
router.get('/student/:studentId', submissionControllers.aStudentAllSubmission)



export const submissionRoutes = router