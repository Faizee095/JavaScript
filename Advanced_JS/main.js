//Scope  in Nested FUnction
// let a =10

// function outer(){
//     let b = 20
//     function inner(){
//         let c =30
//         console.log(a,b,c)
//     }
//     inner()
// }
// outer()

//--------------------------------------------------------------------

//Clousre
// function outer(){
//     let counter = 0 
//     function inner(){
//         counter += 1
//         console.log(counter)
//     }
//     return inner
// }
// const x = outer()
// x()
// x()

//--------------------------------------------------------------------
//Currying
//Normal Function
// function sum(a,b,c){
//     return a+b+c
// }
// console.log(sum(1,2,3))
//After Currying
// function sum(a){
//     return function (b){
//         return function (c){
//             return a+b+c
//         }
//     }
// }
// console.log(sum(1)(2)(3))

//--------------------------------------------------------------------
//this [pending]
// function myName(name){
//     console.log(`My name is ${name}`)
// }

// myName('Walter WHite')

//--------------------------------------------------------------------
//Prototype
// function Person(fname,lname){
//     this.fname = fname
//     this.lname = lname
// }

// const person1 = new Person('Tom' ,'Hardy')
// const person2 = new Person('JAck' ,'Ryan')
// person1.getFname = function (){
//     return this.fname + " " + this.lname
// }
// Person.prototype.getFname = function (){
//     return this.fname + " " + this.lname
// }
// console.log(person1.getFname())
//console.log(person2.getFname()) //if we dont use prototype this will give error
// console.log(person1.getFname())
// console.log(person2.getFname())

//--------------------------------------------------------------------
//Iterables and Iterators


//Generators
