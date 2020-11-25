(() => {
  class Person {
    constructor(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
    }

    get fullname() { return [this.firstname, this.lastname].join(' '); }
    set fullname(value) { [this.firstname, this.lastname] = value.split(' '); }
  }

  class Student extends Person {
    constructor(firstname, lastname, id, grades) {
      super(firstname, lastname);
      
      this.id = id;
      this.grades = grades;
    }

    getGradeAvg() {
      return this.grades.reduce((a, v) => a + v) / this.grades.length;
    }

    get gradeAvg() { return this.getGradeAvg(); }
  }

  const ostap = new Student("Ostap", "Pyrih", 1, [5, 5, 4, 5]);

  console.log(ostap.gradeAvg);
  console.log(ostap.fullname);
  ostap.fullname = "John Cena";
  console.log(ostap.firstname, ostap.lastname);
  console.log(ostap.fullname);
})();
