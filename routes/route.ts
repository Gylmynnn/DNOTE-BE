import express from "express";
import { createNote, deleteNote, getNoteById, getNotes, updateNote } from "../controllers/notes_controller";

const route = express.Router();

route.get('/notes', getNotes);
route.get('/notes/:id', getNoteById);
route.post('/notes', createNote);
route.patch('/notes/:id', updateNote);
route.delete('/notes/:id', deleteNote);

export default route;
