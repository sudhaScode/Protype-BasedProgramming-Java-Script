*open the index.html on browser*


# Pure Funtional Programming

Functions with minimal side effects, whereby any modifications to the program's state beyond the function are precisely managed.

Self-contained functions that don't rely on the program's state, including global variables that can be altered.

Pure functions that consistently produce the same output when given the same input.

    const getTea = (typeOfTea, numberOfCups) => {

    const tea_cups = [];

    for (let cups = 1; cups <= numberOfCups; cups += 1) {
        const tea_cup = prepareTea(typeOfTea);
        tea_cups.push(tea_cup);
    }
    return tea_cups;
    };

    const prepareTea = (typeOfTea) => {
    return typeOfTea;
    }

    const tea = (typeOfTea, numberOfCups) => {
    // You need to implement this function.
    const tea_cups = getTea(typeOfTea,numberOfCups);
    return tea_cups;

    }


## Avoid Mutations

Functional programming emphasizes the principle of immutability, where avoiding changes is key to preventing bugs. By ensuring that functions do not modify function arguments or global variables, it becomes easier to prevent potential issues.


In functional programming, modifying or altering variables or objects is referred to as mutation, which results in side effects. Ideally, functions should be designed as pure functions that do not cause any side effects.

    let constValue = 11;

    function increment(num) {
    // only focus on process and output
    return constValue+num;
    }

## Avoid External Dependence
A fundamental principle of functional programming is to explicitly declare dependencies, which entails passing any necessary variables or objects directly into a function as an argument if it relies on them.

This principle has several positive outcomes. It simplifies the testing process for the function, ensures clear identification of its required input, and eliminates any external dependencies within your program.

When you follow this principle, it can make you feel more certain when you make changes to your code, such as modifying, deleting, or adding new code. You will have a better understanding of what can be altered and what should not be changed, and you can easily identify areas where errors could occur.

    function increment(constValue) {
    //NO External dependencies
    return constValue++;
    }

## Refractor Global Variables
Two fundamental rules in functional programming are:

Instead of modifying a variable or object, create new variables and objects and return them from a function when necessary. For instance, using something like const newArr = arrVar, where arrVar is an array, only creates a reference to the existing variable rather than a copy. As a result, changing a value in newArr would alter the value in arrVar.

Declare function parameters – all calculations inside a function should solely rely on the arguments passed to the function and not on any global object or variable.

const bookList = ["A Brief History of Time", "The Works of Archimedes", "The Theory of Relativity", "Opticks"];

    function add(arr, bookName) {
    arr.push(bookName);
    return arr;
    }

    function remove(arr, bookName) {
    const book_index = arr.indexOf(bookName);
    if (book_index >= 0) {
        arr.splice(book_index, 1);
        return arr;
    }
    }

    function manageBooks(bookAdded, bookRemoved) {
    let newBookList = JSON.parse(JSON.stringify(bookList));

    newBookList = remove(bookList, bookRemoved);
    //add new book
    newBookList = add(newBookList, bookAdded);
    return newBookList;
    }


