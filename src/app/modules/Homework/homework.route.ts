import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { homeworkValidations } from "./homework.validation";
import { homeworkControllers } from "./homework.controller";



const router = Router()


router.post('/create', validateRequest(homeworkValidations.homeworkValidationSchema), homeworkControllers.createHomework)
router.get('/', homeworkControllers.getAllHomework)



export const homeworkRoutes = router