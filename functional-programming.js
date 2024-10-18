  //--------Functions---------\\

/**
 * function are objects
 * Immutability is a core principle in functional programming,
 * 
 */

/**Side Effect Functions - impurity functions*/
let out =10;
function sum(a,b){
    out = 100;
    console.log("depending on browser window");
    return a+b;
}
//not only caring about intended opearation, doing other work too, these are side effects
//window is sychronous in nature
/** Pure Fucntions*/
function pure_sum(a,b){ 
    return a+b;
}

//----Declarative and Imperative Programming-----\\

//Imperative Programming-
let arr=[1,3,5,67,7];
//Hard work is Imparative Programming , independent from library functions
function arraySum(){
let sum =0;
for(let i in arr){
   sum += arr[i];
}
return sum;
}

//----Declarative programming----\\
const myDemand = (accumalator, currentValue)=>{
    accumalator+currentValue, 04
    
}
const sum = arr.reduce((accumalator, currentValue)=>accumalator+currentValue, 0);


//We can say array functions and defined functions are pure functions, they do what need.

//----MUTABLE-----\\
//Changable
let ram ={
    name:"snb",
    fsfs: 343
}
ram["fsfs"] = 567; //mutating

//Shallow copy - objects are related to each other
let employee1 = {
	eid: "E102",
	ename: "Jack",
	eaddress: "New York",
	salary: 50000
}

console.log("Employee=> ", employee);
let newEmployee = employee; // Shallow copy
console.log("New Employee=> ", newEmployee);

console.log("---------After modification----------");
newEmployee.ename = "Beck";
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);
// Name of the employee as well as 
// newEmployee is changed.

//Deep Copy  - objects are independent  

let employee = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000
}
console.log("=========Deep Copy========");
let newEmployee = JSON.parse(JSON.stringify(employee));
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);
console.log("---------After modification---------");
newEmployee.ename = "Beck";
newEmployee.salary = 70000;
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);


//Even though it creates the new object and refrence alse difenrent for the current object, 
//but the objects inside the object won't change refrence. so it will forms shallow copy
/*
Deep Copy vs. Shallow Copy

Deep copy: Creates entirely independent copies of all nested objects, resulting in complete isolation between the original and the copy.
Shallow copy: Creates a new object structure with copied top-level values and references to the original nested objects.

*/

// Mutable approach (not functional)
let count = 0;
function increment() {
  count++; // Modifying global state
  return count;
}

console.log(increment()); // Output: 1
console.log(increment()); // Output: 2 (count is now 2)

// Immutable approach (functional)
function increment(n) {
  return n + 1; // Creates a new value
}

const startingCount = 0;
const newCount1 = increment(startingCount);  // newCount1 is 1 (immutable)
const newCount2 = increment(newCount1);  // newCount2 is 2 (immutable)

console.log(newCount1); // Output: 1 (startingCount remains unchanged)
console.log(newCount2); // Output: 2


/**the main cause with spread operator is , it can't changes the reference of nested objects,  */


// ---------- In functional Programming ---------------
// -> Pure Function
// -> Declarative Programming
// -> STRICT RULE (React) -> DO NOT MUTATE

// --------------------- immutability RULES ---------------
// HOW TO MUTATE FOR  functional Programming.

/*
const obj1 = {
  name: "utkarsh",
  class: 9,
  age: 27,
  phone: "8822882291",
  address: {
    pincode: 110034,
    road: 44,
  },
};

// AS PER THE RULES OF functional Programming WE  SHOULD NOT MUTATE;

// obj1.phone = "asdasd" // this is not nICE .. SHould not be done...

// const copyObj1 = { ...obj1 }; // shallow copy
const copyObj1 = JSON.parse(JSON.stringify(obj1)); // DEEP COPY (NOT RECOMMENDED) always use some library
copyObj1.phone = "000000000";
copyObj1.address.pincode = 11001100;

console.log(obj1);
console.log(copyObj1);

*/

// ---------------------- HIGHER ORDER FUNCTION (HOF) -----------------------

// a function that ACCEPT a function as Parameter
// a function that RETURN a function
// or can do both

// set timeout is a HOF
// setTimeout(() => {}, 100);

/*
function add(a, b) {
  // logger.log("user  asdasdsa")
  console.log("user sum");
  return a + b;
}

function sub(a, b) {
  console.log("user sub");

  // logger.log("user asdasdasd")
  return a - b;
}

function mult(a, b) {
  console.log("user mult");

  // logger.log("user  asdasdasd")
  return a * b;
}


console.log(add(1, 3)); // 4
console.log(sub(1, 3)); // -2
console.log(mult(1, 3)); // 3

*/

// How many pure functio do you see? 0
// IMPURE FUNCTION: 3

/*
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

function caculateWithLogging(fn, a, b) {
  // logger.log("user + asdasdasd " + fn.__name__);
  console.log("user");
  return fn(a, b);
}

console.log(caculateWithLogging(add, 1, 3)); // 4
console.log(caculateWithLogging(sub, 1, 3)); // -2
console.log(caculateWithLogging(mult, 1, 3)); // 3

// How many pure functio do you see? 3
// IMPURE FUNCTION: 1

*/