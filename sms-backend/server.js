import "dotenv/config"
import express from "express"
import connectDb from "./src/db/connect.db.js"
import authRouter from "./src/routes/auth.routes.js"
import operationsRouter from "./src/routes/home.routes.js"
import cors from "cors"

const app = express()
const port = process.env.PORT

app.use(cors())
app.use(express.json())

app.use("/api/auth" ,authRouter);
app.use("/api/students", operationsRouter);

connectDb()

app.listen(port, () => {
    console.log(`App is listening on: http://localhost:${port}`)
})