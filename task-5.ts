interface Person {
    firstName: string;
    lastName: string;
  }
  
  interface Student extends Person {
    grade: number;
  }
  
  const student: Student = {
    firstName: "Lusya",
    lastName: "Verbitskaya",
    grade: 70
  };
  
  function printStudentInfo(student: Student): void {
    console.log(`Full Name: ${student.firstName} ${student.lastName}, Grade: ${student.grade}`);
  }
  
  printStudentInfo(student);