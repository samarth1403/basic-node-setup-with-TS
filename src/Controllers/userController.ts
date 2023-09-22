import { Request, Response } from "express";

export const getAllUsers = (req:Request, res:Response) => {
    const users = ["a","b","c","d"];
    res.json({users});
}