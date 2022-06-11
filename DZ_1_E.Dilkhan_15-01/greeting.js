const name = prompt("Как вас зовут?")
console.log("Hello " + name)

const arr = [1, 2,]
const arrTwo = ["Dodo", 4, "Dilkhan",]
if(arr.length < arrTwo.length){
    console.log("Второй массив длиннее")
} else if(arr.length > arrTwo.length){
    console.log("Первый массив длиннее")
} else {
    console.log("Длинна первого и второго массива равны")
}
const color = 'yellow';

switch (color) {
    case "green":
        console.log("Горит зеленный свет, можно проходить через дорогу!!!");
        break;
    case "red":
        console.log("Горит крассный свет, идти через дорогу нельзя!!!");
        break;
    case "yellow":
        console.log("Горит желтый свет, приготовься идти через дорогу!!!");
        break;
    default:
        console.log("Default");
}
const arr2 = [[[[[[[[[[[[[[[5]]]]]]]]]]]]]]]
console.log(arr2[0][0][0][0][0][0][0][0][0][0][0][0][0][0][0])