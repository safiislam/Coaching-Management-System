import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { eventValidations } from "./event.validation";
import { eventControllers } from "./event.controller";



const router = Router()


router.post('/create', validateRequest(eventValidations.eventValidationSchema), eventControllers.createEvent)
router.get('/', eventControllers.getAllEvent)



export const eventRoutes = router