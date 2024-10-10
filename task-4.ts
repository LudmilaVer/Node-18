interface Employee {
    name: string;
    salary: number;
  }
  
  const employees: Employee[] = [
    { name: "Alena", salary: 7 },
    { name: "Elmira", salary: 9},
    { name: "Ja", salary: 1000000 }
  ];
  
  function getSalaries(employees: Employee[]): number[] {
    return employees.map((employee) => employee.salary);
  }
  
  console.log(getSalaries(employees));