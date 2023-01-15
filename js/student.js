export default class Student {
  constructor(name, surname, lastname, trainingStart, birthDate, faculty) {
    this.name = name
    this.surname = surname
    this.lastname = lastname
    this.trainingStart = trainingStart
    this.birthDate = birthDate
    this.faculty = faculty
  }

  get fio() {
    return (this.surname + ' ' + this.name + ' ' + this.lastname).trim();
  }

  getCourse() {
    const currentTime = new Date();
    return currentTime.getFullYear() - this.trainingStart;
    }

  getBirthDate() {
      const yyyy = this.birthDate.getFullYear();
      let mm = this.birthDate.getMonth() + 1;
      let dd = this.birthDate.getDate();

      if(dd < 10) dd = '0' + dd;
      if(mm < 10) mm = '0' + mm;

      return dd + '.' + mm + '.' + yyyy;

    }

  getAge() {
      const today = new Date();
      let age = today.getFullYear() - this.birthDate.getFullYear();
      let m = today.getMonth() - this.birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < this.birthDate.getDate())) {
        age--;}

      if (String(age)[1] == 0 || String(age)[1] >= 5 && String(age)[1] <= 9) {
        age = age + ' лет';
      }
      if (String(age)[1] == 1) {
        age = age + ' год';
      }
      if (String(age)[1] == 2 || String(age)[1] == 3 || String(age)[1] == 4) {
        age = age + ' года';
      }

      return age;
      }

  getFinish() {
    let result = this.trainingStart + 4;
    return result;
  }

}




