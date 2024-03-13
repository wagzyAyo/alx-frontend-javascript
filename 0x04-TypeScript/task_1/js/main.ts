interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience: number;
  [key: string]: boolean;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const export printTeacher: printTeacherFunction = (firstName: string, lastname: string): string => `${firstName[0]}. ${lastName}`;
