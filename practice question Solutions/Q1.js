const user = {
  name: "Alice",
  greet: function () {
    console.log(this.name);
    const innerGreet = () => {
      console.log(this.name);
    }
    innerGreet();
  }
};

user.greet();