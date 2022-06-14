function numbers(number1, number2) {
    console.log(Math.min(number1, number2))
}
let number = {
        number1: prompt("Введите число"),
        number2: prompt("Введите число"),
}
numbers(number.number1, number.number2)

function  countChar() {
    const num = prompt("???")
    console.log(num.length)
}
countChar()



//
// function countChar() {
//     for (let i = 0; i < arguments.length; i++){
//         console.log(arguments[i])
//     }
// }
// countChar()