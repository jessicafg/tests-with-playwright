// Declarative Function
function helloOne(){
    console.log('Hello one!')
}
helloOne()

// anoymus function
var helloTwo = function(){
    console.log('Hello Two!')
}
helloTwo()

//ES6 function syntax or arrow function
var helloThree = () => {
    console.log('Hello three!')
}
helloThree()

//Function with arguments
function printName(name, lastName){
    console.log(name + ' ' + lastName)
}
printName('John', 'Felizardo')

//Function Return
function miltiplyByTwo(numer){
    var result = numer * 2
    return result
}
var myResult = miltiplyByTwo(5)
console.log(myResult)

//import function
import { printAge } from '../helpers/printHelper.js'
printAge(5)

//import everything
import * as helper from '../helpers/printHelper.js'
helper.printAge()