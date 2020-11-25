(() => {
  const student = function(firstname, lastname, id, grades) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.id = id;
    this.grades = grades;

    this.getGradeAvg = function() {
      return this.grades.reduce((a, v) => a + v) / this.grades.length;
    };

    Object.defineProperty(this, 'gradeAvg', { get: function() { return this.getGradeAvg(); } });
    Object.defineProperty(this, 'fullname', {
      get: function() { return [this.firstname, this.lastname].join(' '); },
      set: function(value) { [this.firstname, this.lastname] = value.split(' '); }
    });
  };

  const ostap = new student("Ostap", "Pyrih", 1, [5, 5, 4, 5]);

  console.log(ostap.gradeAvg);
  console.log(ostap.fullname);
  ostap.fullname = "John Cena";
  console.log(ostap.firstname, ostap.lastname);
  console.log(ostap.fullname);
})();
