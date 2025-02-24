import { Router } from "express";
import { userRoutes } from "../modules/Users/user.route";
import { classRoutes } from "../modules/Class/class.route";
import { homeworkRoutes } from "../modules/Homework/homework.route";
import { attendanceRoutes } from "../modules/Attendance/attendance.route";
import { courseRoutes } from "../modules/Course/course.route";
import { assignmentRoutes } from "../modules/Assignment/assignment.route";
import { submissionRoutes } from "../modules/Submission/submission.route";
import { studentFeesRoutes } from "../modules/StudentFees/studentFees.route";
import { examRoutes } from "../modules/Exam/exam.route";
import { payrollRecordsRoutes } from "../modules/PayrollRecord/payrollRecords.route";
import { expensesRoutes } from "../modules/Expenses/expenses.route";
import { leaveRoutes } from "../modules/Leave/leave.route";
import { eventRoutes } from "../modules/Event/event.route";



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
        path: '/exam',
        route: examRoutes
    },
    {
        path: '/submission',
        route: submissionRoutes
    },
    {
        path: '/studentFees',
        route: studentFeesRoutes
    },
    {
        path: '/payrollRecords',
        route: payrollRecordsRoutes
    },
    {
        path: '/expenses',
        route: expensesRoutes
    },
    {
        path: '/leave',
        route: leaveRoutes
    },
    {
        path: '/event',
        route: eventRoutes
    }
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router