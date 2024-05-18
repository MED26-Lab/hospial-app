import express from 'express';
import { config } from "dotenv";

 import cors from 'cors'

const app = express();
config({path : `./config/config.env`})


app.use(
cors({

    origin: [process.env.Frontend_URL, process.env.DASHBORD_URL],
    methods : ["GET", "POST", "PUT", "DELETE"],
    Credentials: true,
})


);



export default app;