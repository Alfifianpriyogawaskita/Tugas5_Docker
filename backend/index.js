import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(3000, ()=> console.log('server up running.....'));
