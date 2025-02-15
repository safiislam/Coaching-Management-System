import { Router } from "express";
import { userRoutes } from "../modules/Users/user.route";
import { classRoutes } from "../modules/Class/class.route";
import { homeworkRoutes } from "../modules/Homework/homework.route";
import { attendanceRoutes } from "../modules/Attendance/attendance.route";
import { courseRoutes } from "../modules/Course/course.route";
import { assignmentRoutes } from "../modules/Assignment/assignment.route";
import { submissionRoutes } from "../modules/Submission/submission.route";
import { studentFeesRoutes } from "../modules/StudentFees/studentFees.route";



const router = Router()

const moduleRoutes = [
    {
        path: '/user',
        route: userRoutes
    },
    {
        path: '/course',
        route: courseRoutes
    },
    {
        path: '/class',
        route: classRoutes
    },
    {
        path: '/homework',
        route: homeworkRoutes
    },
    {
        path: '/attendance',
        route: attendanceRoutes
    },
    {
        path: '/assignment',
        route: assignmentRoutes
    },
    {
        path: '/submission',
        route: submissionRoutes
    },
    {
        path: '/studentFees',
        route: studentFeesRoutes
    }
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router