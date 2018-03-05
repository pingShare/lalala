// import { Module } from "module";

//动态
// var 
function Person(){
    this.sleep=function(){
       	console.log('person sleep'); 
    }
    this.eat=function(){
        console.log('person eat');
    }
}

//exports.Person=Person;      x
Module.exports