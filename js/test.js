import Student from "./student.js";

const students = [
  new Student('Василий', 'Петров', 'Игнатович', 2020, new Date(1997, 3, 18), 'прикладная математика'),
  new Student('Инга', 'Дмитриева', 'Олеговна', 2021, new Date(1998, 12, 2),  'юридический'),
  new Student('Петр', 'Звездный', 'Сергеевич', 2022, new Date(2000, 5, 22),  'психологический'),
  new Student('Сергей', 'Иванов', 'Васильевич', 2019, new Date(2002, 4, 11),  'прикладная математика'),
  new Student('Валерия', 'Сергеева', 'Петровна', 2020, new Date(2003, 6, 8), 'экономический'),
  new Student('Валерия', 'Соколова', 'Витальевна', 2020, new Date(2002, 6, 8), 'экономический'),
  new Student('Валерия', 'Сергеева', 'Юрьевна', 2020, new Date(2000, 11, 7), 'психологический')
]


let newList = [];

for(let student of students) {
  if(student.name.includes('Вал') == true) {
    newList.push(student);
  }
}

let newList2 = [];
for(let student of newList) {
  if(student.surname.includes('Серг') == true) {
    newList2.push(student);
  }
}


console.log(newList2)

function filter(arr, prop, value) {
  let result = [];
  let copy = [...result];
  for(let item of arr) {
    if(String(item[prop]).includes(value) == true) {
      copy.push(item);
    }
  }
  return copy;
}

let arr = filter(students, 'name', 'Валер');
arr = filter(students, 'surname', 'Серг')
console.log();
