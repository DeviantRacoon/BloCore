import { Router } from "express";
import { getTeachers, saveTeacher, getTeacherByPk, updateTeacher, savesSubjectToTeacher } from "../controller/teacher.controller";

const teacherRouting = Router();

teacherRouting.get('/', [getTeachers])
teacherRouting.get('/:id', [getTeacherByPk])
teacherRouting.post('/', [saveTeacher])
teacherRouting.post('/subjects', [savesSubjectToTeacher])
teacherRouting.put('/', [updateTeacher])


export default teacherRouting;