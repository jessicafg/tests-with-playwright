let familySize = 5;
let plannedDistanceToDrive = 100;

function recommendedCar(familySize, plannedDistanceToDrive) {
    if(familySize <= 4 && plannedDistanceToDrive <200) {
        return('O carro recomendado é o Tesla')
    }else if (familySize <=4 && plannedDistanceToDrive >= 200) {
        return('O carro recomendado é o Toyota Camry')
    }else if (familySize > 4){
        return('O carro recomendado é o Minivan')
    }
}

console.log(recommendedCar(familySize, plannedDistanceToDrive));


