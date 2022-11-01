// lesson 24.1
/*
var orang = {
    name: "Agung", age: 17, favColor: "green", height: 171, weight: 72
};

console.log(orang.name)
*/

// lesson 25.1
/*
var course = {name: 'Menjahit', chapter:1}
console.log(course.name.lenght);
*/

// lesson 26.1
// instance of object (new)

/*
function person(name, age, color){
    this.name = name
    this.age = age
    this.favColor = color
}
var p1 = new person("John", 37, "hitam")
var p2 = new person("Jordi", 27, "putih")

console.log(p1.name+' dan '+p2.name+' menyukai warna '+p1.favColor+' dan '+p2.favColor);
*/

function manusia(name, age) {
    this.name = name;
    this.age = age;
    this.changeName = function (name) {
        this.name = name;
    }
}
var p1 = new manusia("jordi", 30);
p1.changeName("John");
console.log(p1.name+" usia "+p1.age)