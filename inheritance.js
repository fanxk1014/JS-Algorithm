/**
 * 继承
 * 继承的六种方式
 */

 //父类
function Person (name) {
    this.name = name || 'xiaoming';
    this.sayProfile = function(){
        return '我叫'+this.name;
    };
}
Person.prototype.age = 18;
Person.prototype.eat = function(food){
    return this.name+'正在吃'+food;
}
var person = new Person;
console.log(person.eat('apple'));


// 1.原型链继承
function Singer () {
}
Singer.prototype = new Person();
Singer.prototype.job = 'singing';
Singer.prototype.sing = function (song){
    return 'my favorite song is '+song;
}
// var singer = new Singer();
console.log(singer.job);
console.log(singer.sing('pear'));
console.log(Person.prototype.sing('are you ok?'));//err
console.log(singer instanceof Singer);
console.log(singer instanceof Person);


//2.构造函数继承
function Student () {
    Person.call(this,'xiaohong');
    this.score = 100;
}
var student = new Student;
console.log(student.name);


// 3.组合继承（原型链继承+构造函数继承）
function Mixman () {
    Person.call(this,'组合人');
}
Mixman.prototype = new Person();
var mixman = new Mixman;
console.log(mixman.sayProfile());
console.log(mixman.age);


// 4.原型式继承
function container(obj){
    function F(){}
    F.prototype = obj;
    return new F();
}
var subtance = container(new Person());
console.log(subtance.name);


// 5.寄生式继承
function container(obj){
    function F(){}
    F.prototype = obj;
    return new F();
}
function subObject(obj){
    var sub = container(obj);
    sub.prop1 = 'prop1Val';
    return sub;
}
var sub2 = subObject(new Person());
console.log(sub2.name);


// 6.寄生组合式继承
// function content(obj){
//     function F(){}
//     false.prototype = obj;
//     return new F();
// }
// var subCon = content(Person.prototype);
// function Sub(){
//     Person.call(this);
// }
// Sub.prototype = subCon;
// subCon.constructor = Sub;
// var sub1 = new Sub();
// console.log(sub1.name);