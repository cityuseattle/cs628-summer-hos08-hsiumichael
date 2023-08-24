import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import records from "./routes/record.mjs";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/record", records);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});

//u5s5Zy1HVWyD0f1l
//mongodb+srv://hsiumichael:<password>@cs628michael.h4lkphm.mongodb.net/?retryWrites=true&w=majority