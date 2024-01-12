import { Teacher } from "../../infrastructure/models/teacher";
import { PersonFactory } from "../../../core/application/factory/person.factory";
import { SubjectFactory } from "./subject.factory";

export class TeacherFactory {
  static assignment(teacher: Teacher, fields: any) {
    if (fields.teacherId) {
      teacher.setTeacherId = fields.teacherId;
    } else {
      teacher.setTeacherId = undefined;
    }

    if (fields.person) {
      teacher.setPerson = PersonFactory.jsonToModel(fields.person);
    } else {
      teacher.setPerson = undefined;
    }

    if (fields.subjects) {
      teacher.setSubjects = SubjectFactory.arrayJsonToModelArray(fields.subjects);
    } else {
      teacher.setSubjects = undefined;
    }

    if (fields.status) {
      teacher.setStatus = fields.status;
    } else {
      teacher.setStatus = undefined;
    }

    if (fields.dateRegister) {
      teacher.setDateRegister = fields.dateRegister;
    } else {
      teacher.setDateRegister = undefined;
    }

    if (fields.dateUpdate) {
      teacher.setDateUpdate = fields.dateUpdate;
    } else {
      teacher.setDateUpdate = undefined;
    }
  }

  static jsonToModel(fields: any) {
    let teacher = new Teacher();

    if (fields.teacherId) {
      teacher.setTeacherId = fields.teacherId;
    } else {
      teacher.setTeacherId = undefined;
    }

    if (fields.person) {
      teacher.setPerson = PersonFactory.jsonToModel(fields.person);
    } else {
      teacher.setPerson = undefined;
    }

    if (fields.subjects) {
      teacher.setSubjects = SubjectFactory.arrayJsonToModelArray(fields.subjects);
    } else {
      teacher.setSubjects = undefined;
    }

    if (fields.status) {
      teacher.setStatus = fields.status;
    } else {
      teacher.setStatus = undefined;
    }

    if (fields.dateRegister) {
      teacher.setDateRegister = fields.dateRegister;
    } else {
      teacher.setDateRegister = undefined;
    }

    if (fields.dateUpdate) {
      teacher.setDateUpdate = fields.dateUpdate;
    } else {
      teacher.setDateUpdate = undefined;
    }

    return teacher;
  }

  static toJson(teacher: Teacher) {
    return {
      teacherId: teacher.getTeacherId,
      person: teacher.getPerson ? PersonFactory.toJson(teacher.getPerson) : undefined,
      subjects: teacher.getSubjects ? SubjectFactory.arrayToJsonArray(teacher.getSubjects): undefined,
      status: teacher.getStatus,
      dateRegister: teacher.getDateRegister,
      dateUpdate: teacher.getDateUpdate,
    };
  }

  static checkUndefinedFields(teacher: Teacher) {
    const fields = [
      teacher.getPerson,
    ];

    return fields.some(field => field === undefined);
  }

  static arrayToJsonArray(data: Teacher[]) {
    let teacherJson: any[] = [];
    data?.map(teacher => {
      teacherJson.push(TeacherFactory.toJson(teacher));
    });
    return teacherJson;
  }

  static arrayJsonToModelArray(data: any) {
    let students: Teacher[] = [];
    data?.map((student: any) => {
      students.push(TeacherFactory.jsonToModel(student));
    });
    return students;
  }

}
