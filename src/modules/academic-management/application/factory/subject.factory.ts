import { Subject } from "../../infrastructure/models/subject";
import { PersonFactory } from "../../../core/application/factory/person.factory";
import { StudentFactory } from "./student.factory";
import { TeacherFactory } from "./teacher.factory";

export class SubjectFactory {
  static assignment(subject: Subject, fields: any) {
    if (fields.subjectId) {
      subject.setSubjectId = fields.subjectId;
    } else {
      subject.setSubjectId = undefined;
    }

    if (fields.nameSubject) {
      subject.setNameSubject = fields.nameSubject;
    } else {
      subject.setNameSubject = undefined;
    }

    if (fields.grade) {
      subject.setGrade = fields.grade;
    } else {
      subject.setGrade = undefined;
    }

    if (fields.students) {
      subject.setStudents = StudentFactory.arrayJsonToModelArray(fields.students);
    } else {
      subject.setStudents = undefined;
    }

    if (fields.teachers) {
      subject.setTeachers = TeacherFactory.arrayJsonToModelArray(fields.teachers);
    } else {
      subject.setTeachers = undefined;
    }

    if (fields.status) {
      subject.setStatus = fields.status;
    } else {
      subject.setStatus = undefined;
    }

    if (fields.dateRegister) {
      subject.setDateRegister = fields.dateRegister;
    } else {
      subject.setDateRegister = undefined;
    }

    if (fields.dateUpdate) {
      subject.setDateUpdate = fields.dateUpdate;
    } else {
      subject.setDateUpdate = undefined;
    }
  }

  static jsonToModel(fields: any) {
    let subject = new Subject();

    if (fields.subjectId) {
      subject.setSubjectId = fields.subjectId;
    } else {
      subject.setSubjectId = undefined;
    }

    if (fields.nameSubject) {
      subject.setNameSubject = fields.nameSubject;
    } else {
      subject.setNameSubject = undefined;
    }

    if (fields.grade) {
      subject.setGrade = fields.grade;
    } else {
      subject.setGrade = undefined;
    }

    if (fields.students) {
      subject.setStudents = StudentFactory.arrayJsonToModelArray(fields.students);
    } else {
      subject.setStudents = undefined;
    }

    if (fields.teachers) {
      subject.setTeachers = TeacherFactory.arrayJsonToModelArray(fields.teachers);
    } else {
      subject.setTeachers = undefined;
    }

    if (fields.status) {
      subject.setStatus = fields.status;
    } else {
      subject.setStatus = undefined;
    }

    if (fields.dateRegister) {
      subject.setDateRegister = fields.dateRegister;
    } else {
      subject.setDateRegister = undefined;
    }

    if (fields.dateUpdate) {
      subject.setDateUpdate = fields.dateUpdate;
    } else {
      subject.setDateUpdate = undefined;
    }

    return subject;
  }

  static toJson(subject: Subject) {
    return {
      subjectId: subject.getSubjectId,
      nameSubject: subject.getNameSubject,
      grade: subject.getGrade,
      students: StudentFactory.arrayToJsonArray(subject.getStudents!),
      teachers: TeacherFactory.arrayToJsonArray(subject.getTeachers!),
      status: subject.getStatus,
      dateRegister: subject.getDateRegister,
      dateUpdate: subject.getDateUpdate,
    };
  }

  static checkUndefinedFields(subject: Subject) {
    const fields = [
      subject.getNameSubject,
      subject.getGrade,
    ];

    return fields.some(field => field === undefined);
  }

  static arrayToJsonArray(data: Subject[]) {
    let subjectJson: any[] = [];
    data?.map(subject => {
      subjectJson.push(SubjectFactory.toJson(subject));
    });
    return subjectJson;
  }

  static arrayJsonToModelArray(data: any) {
    let subjects: Subject[] = [];
    data?.map((subject: any) => {
      subjects.push(SubjectFactory.jsonToModel(subject));
    });
    return subjects;
  }

}
