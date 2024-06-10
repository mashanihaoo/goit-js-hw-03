//створити порожній масив
//перебрати масив numbers за допомогою for
//в цьому циклу за допомогою іф перевірии якщо і більше за валью то додавати ці числа в пустий масив
//
//
//
//


//створити змінну старт елемент за допомогою якої порівняємо числа
// створити новий масив з чисел з масиву намсьес які більші за валью
//повернути цей новий масив
function filterArray(numbers, value) {
    const newArr = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > value) {
          newArr.push(numbers[i])  
        }
    }

    return newArr
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
