import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { leaveValidations } from "./leave.validation";
import { leaveControllers } from "./leave.controller";



const router = Router()


router.post('/create', validateRequest(leaveValidations.leaveValidationSchema), leaveControllers.createLeave)
router.get('/', leaveControllers.getAllLeave)
router.patch('/:leaveId', validateRequest(leaveValidations.leaveApplicationStatusChangeValidationSchema), leaveControllers.userLeaveStatusChange)



export const leaveRoutes = router