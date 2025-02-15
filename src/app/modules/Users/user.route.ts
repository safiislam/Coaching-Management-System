import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { userValidations } from "./user.validation";
import { userControllers } from "./user.controller";



const router = Router()


router.post('/create', validateRequest(userValidations.userValidationSchema), userControllers.createUser)
router.get('/', userControllers.getAllUsers)
router.patch('/:id', userControllers.roleUpdate)
router.delete('/:id', userControllers.deleteUser)
router.post('/login', userControllers.userLogin)



export const userRoutes = router