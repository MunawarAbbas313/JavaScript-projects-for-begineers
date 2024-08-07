//Linking JavaScript with HTML
//<script scr"nameOfJsFile"> </script>
// i.e <script src="script.js"></script>

//printing hello World
console.log("Hello World");

// DATATYPES

let a = 10;// let can change its value 

//This is a sequence of text known as a string. 
//To signify that the value is a string, enclose it in single or double quote marks.
let name = "Munawar ";
var m = 10; // not recomended doue to its globel scope issue
// var with same name can be used again and again but it wil override the previos value
const num = 14; // const cannot change its value 
	

//boolen
//This is a True/False value.
// The words true and false are special keywords that don't need quote marks.	
let myVariable = true;


// Arrays
//This is a structure that allows you to store multiple values in a single reference.
let array = [1,2,3,4];
// In javaScript it comes may methods with array i.e
array.concat();//Combines two or more arrays. This method returns a new array without modifying any existing arrays.
array.entries();//Returns an iterable of key, value pairs for every entry in the array
array.fill();//Changes all array elements from start to end index to a static value and returns the modified array
array.filter();//Returns the elements of an array that meet the condition specified in a callback function.
array.findIndex();//Returns the index of the first element in the array where predicate is true, and -1 otherwise.
array.flat();//Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
array.join();//Adds all the elements of an array into a string, separated by the specified separator string.
array.push();//Appends new elements to the end of an array, and returns the new length of the array
array.splice();//Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
array.length(); // use to find the length of array 


//objects 
/*The Object type represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. Objects can be created using the Object() constructor or the object initializer / literal syntax. */
const o = new Object();
o.foo = 42;

console.log(o);
// { foo: 42 }

const object = {
    name: "Munawar",
    age: 20,
    address:"street number 8",
    hobbies: ["cricket","football"],

}
// accessing the elements of object with . operator 
//e.g

object.name;
object.age;
object.address;

// we can use arrays inside an objects as well and access its values 
// with . operator and index value 
//i.e
object.hobbies[1];

//Conditonal statemts use to work with condtions
//if
// else if
// switch


// IF
// uses a single condtion
if (condition) {
    
}
else{
    // if the conditon does not mets then this block runs
}


// else if
// in case where there are multiple conditions we use Else if

if (condition) {
    
}
else if (condition) {
    
    // if the first constions does not meat then this block of code runs
} else {
    // if no condtions mets then this block runs
}



// switch
// similter to else if switch is used for multiple condtions with a change in Syntax
switch (key) {
    case value:
        
        break;

    default:
        // default runs when no condtion is true 
        break;
}






// loops means repeatations 
// for
// forEach specillay for Arrays
// for of
// for in
//while 
// do while


//FOR
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
};

// for in
for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}

// For of
for (const element of object) {
    
}

// For Each
array.forEach(element => {
    
});

// While
while (condition) {
    
}
//


//do while
do {
    
} while (condition);


// functions 
// A chunk of code perfroms a spefic task

//Simple function

function adder(a, b) {
    return a+b;
    
}
const asnwer = adder(1,4);
console.log(asnwer);
// the functon will add the number given in parameters and returns the value
// to the varbile answer


// call back funcitons

const subtarcter = ()=>{
    console.log("Hello");
}

subtarcter();
// it will display message Hello when called
// ()=>{} is part of its syntex 
//mostly used with DOM , event listener , fetching apis etc
const calculate = (a, b) => {
    const sum = a + b;
    const sub = a - b;
    return { sum, sub };
  }
  const result = calculate(2, 3);
console.log(result.sum); // 5
console.log(result.sub); // -1


// DOM
// Document Objcet Model 
// selecting Items of html using diff selectors
document.getElementById(id);
// 1.Returns an element with the specified ID.

const elem = document.getElementById("myId");
console.log(elem); // Output: <div id="myId">...</d>


//2. document.querySelector(selector): Returns the first element that matches the specified selector.
const elemm = document.querySelector("#myId");
console.log(elem); // Output: <div id="myId">...</div>

//3. document.querySelectorAll(selector): Returns a NodeList of elements that match the specified selector.
const elems = document.querySelectorAll(".myClass");
console.log(elems); // Output: NodeList [<div class="myClass">...</div>, <div class="myClass">...</div>]


//4. element.querySelector(selector): Returns the first element that matches the specified selector, starting from the specified element.
const parent = document.getElementById("myParent");
const elem = parent.querySelector(".myClass");
console.log(elem); // Output: <div class="myClass">...</div>


//5. element.querySelectorAll(selector): Returns a NodeList of elements that match the specified selector, starting from the specified element.
const parent = document.getElementById("myParent");
const elems = parent.querySelectorAll(".myClass");
console.log(elems); // Output: NodeList [<div class="myClass">...</div>, <div class="myClass">...</div>]

//6. document.getElementsByName(name): Returns a NodeList of elements with the specified name.

const elems = document.getElementsByName("myInput");
console.log(elems); // Output: NodeList [<input name="myInput">, <input name="myInput">]


//7. document.getElementsByTagName(tagName): Returns a NodeList of elements with the specified tag name.
document.getElementsByTagName(tagName)

const elems = document.getElementsByTagName("div");
console.log(elems); // Output: NodeList [<div>...</div>, <div>...</div>]



//8. element.getElementsByTagName(tagName): Returns a NodeList of elements with the specified tag name, starting from the specified element.

const parent = document.getElementById("myParent");
const elems = parent.getElementsByTagName("div");
console.log(elems); // Output: NodeList [<div>...</div>, <div>...</div>]



//9. document.getElementsByClassName(className): Returns a NodeList of elements with the specified class name.
document.getElementsByClassName(className):

const elems = document.getElementsByClassName("myClass");
console.log(elems); // Output: NodeList [<div class="myClass">...</div>, <div class="myClass">...</div>]


//10. element.getElementsByClassName(className): Returns a NodeList of elements with the specified class name, starting from the specified element.
element.getElementsByClassName(className):

const parent = document.getElementById("myParent");
const elems = parent.getElementsByClassName("myClass");
console.log(elems); // Output: NodeList [<div class="myClass">...</div>, <div class="myClass">...</div>]



//These are some of the most commonly used selectors in JavaScript. There are many more, and you can also use CSS selectors with querySelector and querySelectorAll.



//Es6 Featurs 
//Here are the ES6 features with code examples:

//1. Let and Const

//In ES6, let and const are introduced as new ways to declare variables. let is similar to var, but it has block scope, which means it is only accessible within the block it is declared in. const is used to declare constants, which cannot be changed once declared.

let x = 10;
if (true) {
  let x = 20;
  console.log(x); // 20
}
console.log(x); // 10

const PI = 3.14;
PI = 2.14; // Error: Assignment to constant variable.



//2. Arrow Functions
//Arrow functions are a new way to define functions in ES6. They are similar to traditional functions, but they have a more concise syntax and they do not have their own this context.

const add = (a, b) => a + b;
console.log(add(1, 2)); // 3

const obj = {
  name: 'John',
  age: 30,
  printInfo: () => {
    console.log(this.name + ' is ' + this.age + ' years old.');
  }
};
obj.printInfo(); // undefined is undefined years old.


//3. Classes
//ES6 introduces classes, which are a new way to define objects. Classes are similar to functions, but they have a more traditional syntax and they support inheritance.

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    printInfo() {
      console.log(this.name + ' is ' + this.age + ' years old.');
    }
  }
  
  const john = new Person('John', 30);
  john.printInfo(); // John is 30 years old.



  //4. Template Literals
  //Template literals are a new way to define strings in ES6. They allow you to embed expressions inside string literals, which makes it easier to create complex strings.
  const name = 'John';
  const age = 30;
  console.log(`My name is ${name} and I am ${age} years old.`);
  // My name is John and I am 30 years old.


  //5. Destructuring

//Destructuring is a new way to extract values from arrays and objects in ES6. It allows you to extract values from arrays and objects and assign them to variables in a more concise way.
const arr = [1, 2, 3];
const [a, b, c] = arr;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

const obj = { name: 'John', age: 30 };
const { name, age } = obj;
console.log(name); // John
console.log(age); // 30


//6. Spread Operator

//The spread operator is a new way to spread arrays and objects in ES6. It allows you to spread arrays and objects into new arrays and objects.
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];
console.log(arr2); // [1, 2, 3, 4, 5, 6]

const obj1 = { name: 'John', age: 30 };
const obj2 = { ...obj1, country: 'USA' };
console.log(obj2); // { name: 'John', age: 30, country: 'USA' }



//IMPORTNAT
//7. Promises

//Promises are a new way to handle asynchronous operations in ES6. They allow you to write asynchronous code that is easier to read and maintain.
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello World!');
    }, 2000);
  });
  
  promise.then((message) => {
    console.log(message); // Hello World!
  });