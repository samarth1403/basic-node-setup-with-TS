import express from 'express';
import userRoute from './Routes/userRoute.js';

const app = express();

app.use("/users",userRoute);

app.listen(4000,()=>{
    console.log("Server is Running");
})