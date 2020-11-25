(() => {
  const obj1 = {
    name: "Ostap",
    birthday: new Date(2000, 08, 16),
    greet: function() {
      return "Hello" + this.name;
    },
    getAge: function() { return new Date().getFullYear() - this.birthday.getFullYear() }
  };

  const getObjProperties = obj => {
    Object.entries(obj).forEach(([key, value]) => console.log(key, typeof(value)));
  };

  getObjProperties(obj1);
})();
