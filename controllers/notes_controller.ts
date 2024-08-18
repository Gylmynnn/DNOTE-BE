import Note from "../models/notes_model";
import type { Response , Request } from "express";

type ResponseData = {
    success : boolean
    status : number
    message : string
    data? : any
}

export const getNotes = async (req : Request, res :Response<ResponseData>) => {
    try {
        const notes = await Note.find();
        res.status(200).json({
            success : true,
            status : 200,
            message : "Succesfully",
            data : notes
        })
    } catch (error : any) {
        res.status(500).json({
            success : false,
            status : 500,
            message : error.message,
        })
    }
}


export const getNoteById = async (req : Request, res :Response<ResponseData>) => {
    try {
        const notes = await Note.findById(req.params.id);
        res.status(200).json({
            success : true,
            status : 200,
            message : "Succesfully",
            data : notes
        })
    } catch (error : any) {
        res.status(500).json({
            success : false,
            status : 500,
            message : error.message,
        })
    }
}


export const createNote = async (req : Request, res :Response<ResponseData>) => {

    const data = new Note(req.body);
    try {
        const notes = await data.save();
        res.status(201).json({
            success : true,
            status : 201,
            message : "Succesfully",
            data : notes
        })
    } catch (error : any) {
        res.status(400).json({
            success : false,
            status : 400,
            message : error.message,
        })
    }
}

export const updateNote = async (req : Request, res :Response<ResponseData>) => {
    try {
        const notes = await Note.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json({
            success : true,
            status : 200,
            message : "Succesfully",
            data : notes
        })
    } catch (error : any) {
        res.status(400).json({
            success : false,
            status : 400,
            message : error.message,
        })
    }
}

export const deleteNote = async (req : Request, res :Response<ResponseData>) => {
    try {
        const notes = await Note.deleteOne({_id: req.params.id});
        res.status(200).json({
            success : true,
            status : 200,
            message : "Succesfully",
            data : notes
        })
    } catch (error : any) {
        res.status(400).json({
            success : false,
            status : 400,
            message : error.message,
        })
    }
}
