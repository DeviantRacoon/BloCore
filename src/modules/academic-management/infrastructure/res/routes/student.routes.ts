import { Router } from "express";
import { getStudents, saveStudent, getStudentByPk, updateStudent, savesSubjectToTeacher } from "../controller/student.controller";

const studentRouting = Router();

studentRouting.get('/', [getStudents])
studentRouting.get('/:id', [getStudentByPk])
studentRouting.post('/', [saveStudent])
studentRouting.post('/subjects', [savesSubjectToTeacher])
studentRouting.put('/', [updateStudent])


export default studentRouting;