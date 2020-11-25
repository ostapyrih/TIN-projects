(() => {
  const proto = { courses: ['GRK', 'TIN', 'BYT'] };

  const createStudent = (firstname, lastname, id) => {
    const student = {};
    student.__proto__ = proto;
    student.firstname = firstname;
    student.lastname = lastname;
    student.id = id;

    return student;
  };

  const ostap = createStudent("Ostap", "Pyrih", 1);

  console.log(ostap.courses);
})();
