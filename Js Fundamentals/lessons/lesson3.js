//object

var customer = {
    firstName: 'John',
    lastName: 'Smith',
    cars: ["Volvo", "Toyota", "Tesla"]
}
//notação de ponto
customer.firstName = "Mike"
//notação de colchete
customer['lastName'] = "Silver"
console.log(`${customer.firstName} ${customer.lastName}`)

//Matriz (array)
var car = ["Volvo", "Toyota", "Tesla"]
car[1] = "BMW"
console.log(car[1])
console.log(customer.cars[0])