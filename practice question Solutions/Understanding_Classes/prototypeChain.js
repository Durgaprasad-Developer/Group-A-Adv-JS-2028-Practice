function User(name) {
  this.name = name;
}

User.prototype.login = function () {
  return `${this.name} logged in`;
};

function Admin(name) {
  this.name = name;
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;

Admin.prototype.deleteUser = function() {
    return `${this.name} deleted`;
}

const user1 = new User("John")
console.log(user1.login());

const admin1 = new Admin("Dp");
console.log(admin1.login());
console.log(admin1.deleteUser());
