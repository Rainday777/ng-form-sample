export interface Employee {
  id: number;
  name: string;
  salary: number;
  age: number;
  image: string;
}

export interface ResponeData {
  status: string;
  data: Employee[];
}
