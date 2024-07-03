interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction { (
  firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string) => {
  return `${firstName[0]}. ${lastName}`;
};


interface StudentConstructor {
  new (firstName: string, lastName: string): StudentInstance;
}

interface StudentInstance {
  firstName: string;
  lastName: string;
  workOnHomeWork(): string;
  displayName(): string;
}

class StudentClass implements StudentInstance {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomeWork(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

function createStudent(ctor: StudentConstructor, firstName: string, lastName: string): StudentInstance {
  return new ctor(firstName, lastName)
}

