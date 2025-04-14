const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
const userRouter=require("./routes/user_route");
const database = require("./utils/database");
const cors=require("cors");
const ErrorMiddleware=require("./middleware/error_middleware");

const corsOptions={
    origin:"http://localhost:5173",
    methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials:true,
}


app.use(express.json());
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }))

app.use("/api/data",userRouter);

app.use(ErrorMiddleware);
database().then(() => {
    app.listen(port, (() => { console.log(`this is your current localhost port ${port}`) }))
})

