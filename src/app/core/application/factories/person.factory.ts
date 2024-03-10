import { Person } from "../../infrastructure/models/person";
import { format } from "date-fns";

export class PersonFactory {

    static assignment(person: Person, fields: any) {

        if (fields.personId) {
            person.setPersonId = fields.personId;
        } else {
            person.setPersonId = undefined;
        }

        if (fields.firstName) {
            person.setFirstName = fields.firstName;
        } else {
            person.setFirstName = undefined;
        }

        if (fields.secondName) {
            person.setSecondName = fields.secondName;
        } else {
            person.setSecondName = undefined;
        }

        if (fields.lastName) {
            person.setLastName = fields.lastName;
        } else {
            person.setLastName = undefined;
        }

        if (fields.secondLastName) {
            person.setSecondLastName = fields.secondLastName;
        } else {
            person.setSecondLastName = undefined;
        }

        if (fields.age) {
            person.setAge = fields.setAge;
        } else {
            person.setAge = undefined;
        }

        if (fields.birthDate) {
            person.setBirthDate = format(fields.birthDate, 'dd/MM/yyyy');
        } else {
            person.setBirthDate = undefined;
        }

        if (fields.cell) {
            person.setCell = fields.cell;
        } else {
            person.setCell = undefined;
        }

        if (fields.gender) {
            person.setGender = fields.gender;
        } else {
            person.setGender = undefined;
        }

        if (fields.curp) {
            person.setCurp = fields.curp;
        } else {
            person.setCurp = undefined;
        }

        if (fields.status) {
            person.setStatus = fields.status;
        } else {
            person.setStatus = undefined;
        }

        if (fields.dateRegister) {
            person.setDateRegister = fields.dateRegister;
        } else {
            person.setDateRegister = undefined;
        }

        if (fields.dateUpdate) {
            person.setDateUpdate = fields.dateUpdate;
        } else {
            person.setDateUpdate = undefined;
        }
    }

    static jsonToModel(fields: any) {
        let person = new Person()

        if (fields.personId) {
            person.setPersonId = fields.personId;
        } else {
            person.setPersonId = undefined;
        }

        if (fields.firstName) {
            person.setFirstName = fields.firstName;
        } else {
            person.setFirstName = undefined;
        }

        if (fields.secondName) {
            person.setSecondName = fields.secondName;
        } else {
            person.setSecondName = undefined;
        }

        if (fields.lastName) {
            person.setLastName = fields.lastName;
        } else {
            person.setLastName = undefined;
        }

        if (fields.secondLastName) {
            person.setSecondLastName = fields.secondLastName;
        } else {
            person.setSecondLastName = undefined;
        }

        if (fields.age) {
            person.setAge = fields.age;
        } else {
            person.setAge = undefined;
        }

        if (fields.birthDate) {
            person.setBirthDate = format(fields.birthDate, 'yyyy-MM-dd');
        } else {
            person.setBirthDate = undefined;
        }

        if (fields.cell) {
            person.setCell = fields.cell;
        } else {
            person.setCell = undefined;
        }

        if (fields.gender) {
            person.setGender = fields.gender;
        } else {
            person.setGender = undefined;
        }

        if (fields.curp) {
            person.setCurp = fields.curp;
        } else {
            person.setCurp = undefined;
        }

        if (fields.status) {
            person.setStatus = fields.status;
        } else {
            person.setStatus = undefined;
        }

        if (fields.dateRegister) {
            person.setDateRegister = fields.dateRegister;
        } else {
            person.setDateRegister = undefined;
        }

        if (fields.dateUpdate) {
            person.setDateUpdate = fields.dateUpdate;
        } else {
            person.setDateUpdate = undefined;
        }

        return person;
    }

    static toJson(person: Person) {
        return {
            personId: person.getPersonId,
            firstName: person.getFirstName,
            secondName: person.getSecondName,
            lastName: person.getLastName,
            secondLastName: person.getSecondLastName,
            age: person.getAge,
            birthDate: person.getBirthDate,
            cell: person.getCell,
            gender: person.getGender,
            curp: person.getCurp,
            status: person.getStatus,
            dateRegister: person.getDateRegister,
            dateUpdate: person.getDateUpdate,
        };
    }

    static checkUndefinedFields(person: Person) {
        const fields = [
            person.getFirstName,
            person.getSecondName,
            person.getLastName,
            person.getSecondLastName,
            person.getAge,
            person.getGender
        ];

        return fields.some(field => field === undefined);
    }

    static arrayToJsonArray(data: Person[]) {
        let personJson: any[] = [];
        data?.map(person => {
            personJson.push(this.toJson(person));
        });
        return personJson;
    }

    static arrayJsonToModelArray(data: any) {
        let persons: Person[] = [];
        data?.map((person: any) => {
            persons.push(this.jsonToModel(person));
        });
        return persons;
    }

}