/*----Creating a class with Constructor----*/
class Person {
    // properties ---
    name;
    Age
    profession;
    ;
  
    //   PARAMETERIZED CONSTRUCTOR
    constructor(name, stand, age) {
      // this -> class Person
  
      this.name = name;
  
      this.standard = stand;
      this.Age = age;

    }
}

const createOne = ()=>{
    const obj = new Person("snb", "Softwaredeveloper", 24)
 console.log(obj, "Object created by Class")
}


/*---Creating object with constructor */
function Person1(name, stand, rolNo) {
    // this -> class Person
  
    this.planet = stand;
    this.name = name;
    this.Age = rolNo;
  }

const createTwo = ()=>{
    const obj = new Person1("ram", "earth", 24)
 console.log(obj, "Object created by Contructor function")
}


// ---------- RULE 3 Explicit Binding  -------------

// 1. call
// 2. apply
// 3. bind
/*
let obj2 = {
  name: "akash",
  func: function (a, b, c) {
    // context -> this -> utkarshPerson
    console.log("hello");
    console.log(this.name);
    // console.log(this.name, a, b, c);
  },
};

let obj = {
  name: "ankitsss",
  obj2: obj2,
};

let utkarshPerson = {
  name: "utkarsh",
};

obj.obj2.func(9, 9); //  akash   // is thsi a call site ? // YES

obj.obj2.func.call(obj, 123, 12, 66); // ankitsss
// obj.obj2.func.apply(obj, [123, 12, 66]); // ankitsss

// obj.obj2.func();

const bindedFunction = obj.obj2.func.bind(utkarshPerson);

/*
func:

function (a, b, c) {
    // context -> this -> utkarshPerson
    console.log("hello");
    console.log(this.name);
    // console.log(this.name, a, b, c);
  },


*/

/*
setTimeout(bindedFunction, 3000); //

function setTimeout(callBack, delay) {
  // delay it for delay seconds

  callBack(); // is this call site for func function ? YEs
  // ANy extra info? YES
}



*/






//
const obj = {
    a: 1,
    b: 2,
    c: 3,
  };
  

  // a b c are OWN values
  

  
  // Object.prototype.d = 100;
  
  //NOTE: PAINFUL -> remember this is IMPORTANT.
// In JS if you want to know who are your OWN properties you ll use
  // for in -> keys (any object)
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      //console.log(key, "key in for in");
    }
  }
  
  // for of -> values (ITerable object/arrays)
  
  //console.log(obj);
  
  const keyValuePair = Object.entries(obj);
//  console.log(keyValuePair); // key value pair in array.

  const allKeys = Object.keys(obj);
 // console.log(allKeys); // all the keys
  
  const allvalues = Object.values(obj);
  //console.log(allvalues); // all the Values

  //----Inheritance------//
  class Employee{
    id;
    designation;
    constructor(empId, empDsgn){
      this.id =empId;
      this.designation = empDsgn;
    }
    packageOffered(packageS){
       return packageS/12 - (packageS/100)*1;
    }

  }

  class Developer extends Employee{
    name;
    constructor(name, designation, empId){
      super(empId, designation);
      this.name = name;
    }
    packageOffered(packageS){
       return packageS/12 - (packageS/100)*1;
    }
  }
  function inheritance(){
  const developer = new Developer("ram", "Software Engineer", "254282");


  
  console.log("Monthly salary take home of "+developer.name +" is "+ developer.packageOffered(425000).toFixed())
  console.log(developer, "human develper")
}
  //-----Method overriding---//
class Employeeai{
  id;
  designation;
  constructor(empId, empDsgn){
    this.id =empId;
    this.designation = empDsgn;
  }
  packageOffered(packageS){
     return packageS/12 - (packageS/100)*1;
  }

}

class Developerai extends Employeeai{
  name;
  constructor(name, designation, empId){
    super(empId, designation);
    this.name = name;
  }
  packageOffered(packageS){
     return packageS/12 - (packageS/100)*4;
  }
}
function mehtodOverrriding(){
const aideveloper = new Developerai("aibot", "Software Engineer", "254282");
console.log("Monthly salary take home of "+aideveloper.name +" is "+ aideveloper.packageOffered(425000).toFixed())
console.log(aideveloper, "ai developer")
}

