/* eslint-disable @typescript-eslint/ban-ts-comment */
import cors from 'cors';

import express, { Application, Request, Response } from 'express';
import notFound from './app/middlewares/notFound';
import router from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorHandler';


const app: Application = express()

app.use(cors())
app.use(express.json())

app.use('/api', router)

//Not Found
// Use middleware with @ts-ignore to suppress type error
// @ts-ignore
app.use(notFound);
app.use(globalErrorHandler);

app.get('/', (req: Request, res: Response) => {
    res.send("Hello world")
})


export default app