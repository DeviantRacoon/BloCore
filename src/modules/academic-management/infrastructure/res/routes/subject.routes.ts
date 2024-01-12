import { Router } from "express";
import { getSubjects, saveSubject, getSubjectByPk, updateSubject } from "../controller/subject.controller";

const subjectRouting = Router();

subjectRouting.get('/', [getSubjects])
subjectRouting.get('/:id', [getSubjectByPk])
subjectRouting.post('/', [saveSubject])
subjectRouting.put('/', [updateSubject])

export default subjectRouting;