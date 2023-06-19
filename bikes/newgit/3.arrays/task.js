function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    } 
        // arr2 = arr2.reverse(); если нужно сравнивать с конца второго массива
   let res = arr1.every((value, index) => value === arr2[index]);
    return(res);
}

compareArrays([8, 9], [6]); 
compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]); 
compareArrays([9, 2, 4, 8, 2], [9, 2, 4]);
compareArrays([1, 2, 3], [2, 3, 1]); 
compareArrays([8, 1, 2], [8, 1, 2]); 
// const Numbers = [127,42,354,296,489];
// const isEven =(item) => {
//     return item % 2 === 0;
// }

// let res = Numbers.findIndex(isEven);
// console.log(Numbers[res]);



const people = [
    {firstName: "Александр", secondName: "Карпов", age: 17, gender: "мужской"},
    {firstName: "Егор", secondName: "Морозов", age: 21, gender: "мужской"},
    {firstName: "Мелисса", secondName: "Леонова", age: 40, gender: "женский"},
    {firstName: "Мелания", secondName: "Савельева", age: 37, gender: "женский"},
    {firstName: "Мария", secondName: "Овчинникова", age: 18, gender: "женский"},
    {firstName: "Марьяна", secondName: "Котова", age: 17, gender: "женский"},
    {firstName: "Фёдор", secondName: "Селезнев", age: 50, gender: "мужской"},
    {firstName: "Георгий", secondName: "Петров", age: 35, gender: "мужской"},
    {firstName: "Даниил", secondName: "Андреев", age: 49, gender: "мужской"},
    {firstName: "Дарья", secondName: "Савельева", age: 25, gender: "женский"},
    {firstName: "Михаил", secondName: "Шаров", age: 22, gender: "мужской"},
    {firstName: "Владислав", secondName: "Давыдов", age: 40, gender: "мужской"},
    {firstName: "Илья", secondName: "Казаков", age: 35, gender: "мужской"},
    {firstName: "Евгений", secondName: "Кузьмин", age: 19, gender: "мужской"},
  ]



function getUsersNamesInAgeRange(users, gender) {
    if ((gender != "мужской") && (gender != "женский"))  {
        return 0;
    } 
    if (users !== people) {
        return 0;
    }
    let result = people.filter((item) => item.gender === gender).map((item) => item.age).reduce((accumulator, item, index, array)=> accumulator + item / array.length, 0)
    return result
}
console.log(getUsersNamesInAgeRange(people, "мужской"));
console.log(getUsersNamesInAgeRange(people, "женский")); 
console.log(getUsersNamesInAgeRange([], "женский")); 
console.log(getUsersNamesInAgeRange(people, "инопланетянин")); 

//     let result = people.filter((item) => item.gender === gender)
//     .map((item) => item.age)
// let res = result.reduce((accumulator, item) => (accumulator + item)) / result.length;
//     return res
