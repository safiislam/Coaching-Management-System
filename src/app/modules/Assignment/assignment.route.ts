import { Router } from "express";
import { assignmentControllers } from "./assignment.controller";



const router = Router()


router.post('/create', assignmentControllers.createAssignment)
router.get('/', assignmentControllers.getAllAssignment)
router.patch('/:assignmentId', assignmentControllers.statusChangeOfAssignment)



export const assignmentRoutes = router