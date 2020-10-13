//Comment Single line
/* Multi line 
comment
*/

//VARIABLES(Can be reassigned)
//First one 
var colour ='red';
console.log(colour);
//or let 
let rang ='red';
console.log(rang);
// let is reassingable
let color;
color='red';
color='yellow';
console.log(color);
/*Variables naming
 Are Case-sensitive
 Cant start with number
 cant contain spaces or hyphen(-)
 cant be a reserved word
*/

//Constants (cant be  reassigned and must declare and intiliaze)
const pi=3.14;

//DATA TYPES(primitive and reference)
//Primitive
let name ='FAizee';//String literal
let age=40;//Number literal
let liar= True;//Boolean literal
let colors=null//Null 
// let list;//Undefined
namee+='Stacker'
console.log('name');
//Concatination
let message=name +'is' +name;
/*Better way
let message='${name} is ${age}';
console.log('message');*/

//ARRRAY (reference)
//Declaring An ARRAy
const numbers =new Array(1,2,3,4,5,6)
//SHORTHAND     const numbers =[1,2,3,4,5,6];
numbers[2]=8; //Adding element at a particular index.
numbers.push(0);
numbers.pop();//pops last element.
numbers.shift();//pops first element.
//Nested Array
const nestedArray =['red',5,null,True, [1,2,3,4,5]]
console.log(nestedArray[4][3]);//Accesing element inside the nested array

//Object Literasls(reference)
const person = {
  firstname: 'md' ,
  lastname: 'Sahil' ,
  age:22,
  teams: [india,mumbai],
  address :{
    street :'MAripur',
    City :'Muzaffarpur',
    State: 'Bihar'
  }
}
person.email ='sahil212@gmail.com';//adding to object person.
delete person.age;//deleting an element
//Dot notation
console.log(person.age);//gives the age of the person(accesssig each element)
//or Bracket Noataion
console.log(person[age]);
//Array of objects
const people =[
  {
    firstname: 'md' ,
    lastname: 'Sahil' ,
    age:22,
    teams: [india,mumbai],
    address :{
      street :'MAripur',
      City :'Muzaffarpur',
      State: 'Bihar'
    }
  },
    {
      firstname: 'Aasif' ,
      lastname: 'conman' ,
      age:22,
      teams: [india,mumbai],
      address :{
        street :'MAripur',
        City :'Muzaffarpur',
        State: 'Bihar'
      }
    }
]

//Functions(reference)
function hey(){
  console.log(hello);
}
hey();//calling the function
//function with parameter
function hello(first,last){
  console.log('hello &{first} ${last}');
}
hey('MD','sahil');//calling the function

//loops
//while
let i=0;
while(i<10){
  console.log(i);
  i++;
}
//for
for(let i=0;i<10;i++){
  console.log(i);
}
//loop in Array
const same =[
  {
    firstname: 'md' ,
    lastname: 'Sahil' ,
    age:22
  },
    {
      firstname: 'Aasif' ,
      lastname: 'conman' ,
      age:22,
      teams: [india,mumbai]
    }
]
for(let i=0;i<same.length;i++){
  console.log(same[i]);//prints array
  console.log(same[i].age);//prints specific element
}
/*Shorthand
for(let x of same){
  console.log(same[i].age);
}
 */

 //Conditionals
 let animal ='dog';
 if (animal ==='dog'){
   console.log(true);
 }
 else{
   console.log(false);
 }
 //for multiple conditiopn we use for(condition &&condition && so on)
 //for or we use ||
 //else of works

 //SWITCH
 let model ='ben';
 switch(model){
   case 'ben':
     console.log('ben');
     break;
   case 'mike':
     console.log('mike');
     break;
   default :
     console.log('neither');
     break;
 }

 //DOM Document object model
 //Single Element Selector
const list =document.getElementById('list');
console.log(list);
/*OR const list =document.querySelector('#list');
const listItems =document.querySelector('.list-items');
console.log(list-items);*/
//Multiple Elemen Selector
const listItems =document.querySelectorAll('.list-items');
console.log(list-items);
//Manupulation
list.firstElementChild.remove();
// list.lastElementChild.textContent='New Item;
// list.lastElementChild.innerHTML="<h1> new item</h1>


//Events
const btn =document.getElementById('mybtn');
btn.addEventListener('click',function(e){
  console.log(e);
});//other eventlistner are (mouseover,mouseout)
// btn.addEventListener('mousehover',function(e){//or replace function with (e)=>
//   btn.style.background ='blue';
// });