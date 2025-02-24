import { Router } from "express";
import { classControllers } from "./class.controller";
import validateRequest from "../../middlewares/validateRequest";
import { classValidation } from "./class.validation";



const router = Router()


router.post('/create', validateRequest(classValidation.classValidationSchema), classControllers.createClass)
router.get('/', classControllers.getAllClass)
router.get('/student/:courseId/:studentId', classControllers.studentAccessClass)



export const classRoutes = router