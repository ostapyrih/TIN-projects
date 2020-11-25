(() => {
  const Student = function(firstname, lastname, id, grades) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.id = id;
    this.grades = grades;

    this.getGradeAvg = function() {
      return this.grades.reduce((a, v) => a + v) / this.grades.length;
    };
  };

  const ostap = new Student("Ostap", "Pyrih", 1, [5, 5, 4, 5]);

  console.log(ostap.getGradeAvg());
})();
