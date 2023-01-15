import Student from "./student.js";

//массив студентов
let students = [
  new Student('Василий', 'Петров', 'Игнатович', 2020, new Date(1997, 3, 18), 'прикладная математика'),
  new Student('Инга', 'Дмитриева', 'Олеговна', 2021, new Date(1998, 12, 2), 'юридический'),
  new Student('Петр', 'Звездный', 'Сергеевич', 2022, new Date(2000, 5, 22), 'психологический'),
  new Student('Сергей', 'Иванов', 'Васильевич', 2018, new Date(2002, 4, 11), 'прикладная математика'),
  new Student('Валерия', 'Сергеева', 'Петровна', 2021, new Date(2003, 6, 8), 'экономический'),
  new Student('Валерия', 'Соколова', 'Витальевна', 2020, new Date(2002, 6, 8), 'экономический'),
  new Student('Валерия', 'Сергеева', 'Юрьевна', 2020, new Date(2000, 11, 7), 'психологический')
]


const $studentsList = document.getElementById('studentsList'),
  $studentsListThAll = document.querySelectorAll('.studentsTable th');

let column = 'fio';
let columnDir = true;


//получить тр студента
function newStudentTR(student) {
  const $studentTR = document.createElement('tr'),
    $fioTD = document.createElement('td'),
    $trainingStart = document.createElement('td'),
    $birthDateTD = document.createElement('td'),
    $facultyTD = document.createElement('td')

  $fioTD.textContent = student.fio;
  $trainingStart.textContent = getSept();

function getSept() {
  let date = new Date();
  let dateFinish = new Date(student.getFinish(), 9, 1)
  if (date > dateFinish) {
    return student.trainingStart + '-' + student.getFinish() + ' ('  + 'закончил' +  ')';
  } else {
    return student.trainingStart + '-' + student.getFinish() + ' (' + student.getCourse() + ' курс' +  ')';
  }
}
getSept();


  $birthDateTD.textContent = student.getBirthDate() + ' (' + student.getAge() + ')';
  $facultyTD.textContent = student.faculty;

  $studentTR.append($fioTD);
  $studentTR.append($trainingStart);
  $studentTR.append($birthDateTD);
  $studentTR.append($facultyTD);

  return $studentTR;
}

// //сортировать студентов
function getSortStudents(prop, dir) {
  const studentsCopy = [...students];
  return studentsCopy.sort(function (studentA, studentB) {
    if ((!dir == false ? studentA[prop] < studentB[prop] : studentA[prop] > studentB[prop]))
      return -1;
  })
}

function filter(arr, prop, value) {
  let result = [];
  let copy = [...result];
  for (let item of arr) {
    if (String(item[prop]).includes(value) == true) {
      copy.push(item);
    }
  }
  return copy;
}

//получить год окончания
for (let student of students) {
  student.finish = (student.trainingStart + 4);
}

//отрисовать таблицу
function render() {
  let studentsCopy = [...students];
  studentsCopy = getSortStudents(column, columnDir);

  //получение данных из фильтра
  let filterName = document.getElementById('filter-name').value;
  let filterSurname = document.getElementById('filter-surname').value;
  let filterLastame = document.getElementById('filter-lastame').value;
  let filterTrainingStart = document.getElementById('filter-trainingStart').value;
  let filterFinishStart = document.getElementById('filter-finishStart').value;
  let filterFaculty = document.getElementById('filter-faculty').value;


  studentsCopy = filter(studentsCopy, 'name', filterName);
  studentsCopy = filter(studentsCopy, 'surname', filterSurname);
  studentsCopy = filter(studentsCopy, 'lastname', filterLastame);
  studentsCopy = filter(studentsCopy, 'trainingStart', filterTrainingStart);
  studentsCopy = filter(studentsCopy, 'finish', filterFinishStart);
  studentsCopy = filter(studentsCopy, 'faculty', filterFaculty);


  $studentsList.innerHTML = '';
  for (const student of studentsCopy) {
    $studentsList.append(newStudentTR(student));
  }
}

//события при клике на заголовок
$studentsListThAll.forEach(elem => {
  elem.addEventListener('click', function () {
    column = this.dataset.column;
    columnDir = !columnDir;
    render();
  })
})

//Добавить студента
document.getElementById('add-student').addEventListener('submit', function (event) {
  event.preventDefault();
  let date = new Date();
  let yearNow = date.getFullYear();

  if ((Number(document.getElementById('input-trainingStart').value) >= 2000 && Number(document.getElementById('input-trainingStart').value) <= yearNow && new Date(document.getElementById('input-birthDate').value) >= new Date(1900, 0, 0))) {
    students.push(new Student(
      document.getElementById('input-name').value,
      document.getElementById('input-surname').value,
      document.getElementById('input-lastame').value,
      Number(document.getElementById('input-trainingStart').value),
      new Date(document.getElementById('input-birthDate').value),
      document.getElementById('input-faculty').value,
    ))
    render();

    (document.getElementById('input-name').value) = '';
    document.getElementById('input-surname').value = '';
    document.getElementById('input-lastame').value = '';
    document.getElementById('input-trainingStart').value = '';
    document.getElementById('input-birthDate').value = '';
    document.getElementById('input-faculty').value = '';
  } else {
    document.querySelector('.message').classList.add('active');
  }
})

document.getElementById('filter-student').addEventListener('submit', function (event) {
  event.preventDefault();
  render();
});

render();











