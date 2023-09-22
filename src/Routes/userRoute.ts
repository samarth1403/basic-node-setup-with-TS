import express, { Router } from 'express';
import { getAllUsers } from '../Controllers/userController.js';

const userRoute:Router = express.Router();

userRoute.get("/all",getAllUsers);

export default userRoute;