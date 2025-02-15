import { Router } from "express";
import { classControllers } from "./class.controller";



const router = Router()


router.post('/create', classControllers.createClass)
router.get('/', classControllers.getAllClass)
router.get('/student/:courseId/:studentId', classControllers.studentAccessClass)



export const classRoutes = router