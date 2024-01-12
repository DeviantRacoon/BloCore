import { Student } from "../../infrastructure/models/student";
import { SubjectFactory } from "./subject.factory";
import { PersonFactory } from "../../../core/application/factory/person.factory";

export class StudentFactory {
  static assignment(student: Student, fields: any) {
    if (fields.studentId) {
      student.setStudentId = fields.studentId;
    } else {
      student.setStudentId = undefined;
    }

    if (fields.person) {
      student.setPerson = PersonFactory.jsonToModel(fields.person);
    } else {
      student.setPerson = undefined;
    }

    if (fields.grade) {
      student.setGrade = fields.grade;
    } else {
      student.setGrade = undefined;
    }

    if (fields.subjects) {
      student.setSubjects = SubjectFactory.arrayJsonToModelArray(fields.subjects);
    } else {
      student.setSubjects = undefined;
    }

    if (fields.status) {
      student.setStatus = fields.status;
    } else {
      student.setStatus = undefined;
    }

    if (fields.dateRegister) {
      student.setDateRegister = fields.dateRegister;
    } else {
      student.setDateRegister = undefined;
    }

    if (fields.dateUpdate) {
      student.setDateUpdate = fields.dateUpdate;
    } else {
      student.setDateUpdate = undefined;
    }
  }

  static jsonToModel(fields: any) {
    let student = new Student();

    if (fields.studentId) {
      student.setStudentId = fields.studentId;
    } else {
      student.setStudentId = undefined;
    }

    if (fields.person) {
      student.setPerson = PersonFactory.jsonToModel(fields.person);
    } else {
      student.setPerson = undefined;
    }

    if (fields.grade) {
      student.setGrade = fields.grade;
    } else {
      student.setGrade = undefined;
    }

    if (fields.subjects) {
      student.setSubjects = SubjectFactory.arrayJsonToModelArray(fields.subjects);
    } else {
      student.setSubjects = undefined;
    }

    if (fields.status) {
      student.setStatus = fields.status;
    } else {
      student.setStatus = undefined;
    }

    if (fields.dateRegister) {
      student.setDateRegister = fields.dateRegister;
    } else {
      student.setDateRegister = undefined;
    }

    if (fields.dateUpdate) {
      student.setDateUpdate = fields.dateUpdate;
    } else {
      student.setDateUpdate = undefined;
    }

    return student;
  }

  static toJson(student: Student) {
    return {
      studentId: student.getStudentId,
      person: student.getPerson ? PersonFactory.toJson(student.getPerson) : undefined,
      grade: student.getGrade,
      subjects: student.getSubjects ? SubjectFactory.arrayToJsonArray(student.getSubjects) : undefined,
      status: student.getStatus,
      dateRegister: student.getDateRegister,
      dateUpdate: student.getDateUpdate,
    };
  }

  static checkUndefinedFields(student: Student) {
    const fields = [
      student.getPerson,
      student.getGrade,
    ];

    return fields.some(field => field === undefined);
  }

  static arrayToJsonArray(data: Student[]) {
    let studentJson: any[] = [];
    data?.map(student => {
      studentJson.push(StudentFactory.toJson(student));
    });
    return studentJson;
  }

  static arrayJsonToModelArray(data: any) {
    let students: Student[] = [];
    data?.map((student: any) => {
      students.push(StudentFactory.jsonToModel(student));
    });
    return students;
  }
}
