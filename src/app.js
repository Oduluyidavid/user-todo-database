import express from "express";
import todoRouter from "./routes/todo.route.js";
import "./config/db.config.js"; 
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";


const app = express();

// middleware
app.use(express.json());

const HOST = "http://localhost";
const PORT = 3000

app.use(todoRouter);
app.use(userRouter);
app.use(authRouter);



app.listen(PORT, () => {
  console.log(`listening on ${HOST}:${PORT}`);
});
