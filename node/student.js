var util = require('util');
var Person=require('./person.js');

function Student(){
    Person.call(this);
    this.study=function(){
        console.log('Student study');
    }
}
util.inherits(Student,Person);   //自己的构造函数，父类的构造函数
// Student.prototype.study=function(){  }

var stud = new Student();
stud.sleep();


