function getArrayParams(...arr) {
let min = arr[0];
for (let i=0; i < arr.length; i+=1){
  if(min > arr[i]){
    min = arr[i];
  }
}
let max = arr[0];
for (let i=0; i < arr.length; i+=1){
  if(max < arr[i]){
    max = arr[i];
  }
}
let sum = 0;
for (let i=0; i < arr.length; i+=1){
  sum += arr[i];
}
let average = 0;
average =  Number((sum / arr.length).toFixed(2));

return{ min: min, max: max, avg: average };
}
console.log(getArrayParams(-99, 99, 10))
console.log(getArrayParams(1, 2, 3, -100, 10))
console.log(getArrayParams(5))


// ____________________version 2.0_________________________________


function getArrayParams(...arr) {
  let max = -Infinity;
  max = Math.max.apply(null, arr);
  let min = Infinity;
  min = Math.min.apply(null, arr);
  let sum = 0;
  for (let i=0; i < arr.length; i+=1){
    sum += arr[i];
  }
  let avg = 0;
  avg = sum / arr.length;
  
  let average = 0;
  average =  Number(avg.toFixed(2));
  return { min: min, max: max, avg: average };
}
console.log(getArrayParams(-99, 99, 10))
console.log(getArrayParams(1, 2, 3, -100, 10))
console.log(getArrayParams(5))



// ____________________задача 2______________________________________




function summElementsWorker(...arr) {
  if (arr.length == 0){
    return 0;
  }
  const initialValue = 0;
  const sum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  return sum;
}

// console.log(summElementsWorker()); 
// console.log(summElementsWorker(10, 10, 11, 20, 10)); 


function differenceMaxMinWorker(...arr) {
  if (arr.length == 0){
  return 0;
}
  let max = -Infinity;
  max = Math.max.apply(null,arr);
  let min = -Infinity;
  min = Math.min.apply(null,arr);
  return max - min;
}

// console.log(differenceMaxMinWorker());
// console.log(differenceMaxMinWorker(10, 10, 11, 20, 10)); 


function differenceEvenOddWorker(...arr) {
  if (arr.length == 0){
    return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i += 1){
    if (arr[i] % 2){
      sumOddElement += arr[i];
    }
    else {
      sumEvenElement +=arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}

// console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17)); 
// console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); 


function averageEvenElementsWorker(...arr) {
  if (arr.length == 0){
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i += 1){
    if (arr[i] % 2){
    }
    else{ sumEvenElement += arr[i];
      countEvenElement += 1;
    }
  }
  return sumEvenElement  / countEvenElement;
}

// console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)); 
// console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); 


// _______________3 задание___________________


const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
   arrOfArr.forEach(element => {
    res = func(...element);
    if (maxWorkerResult < res){
      maxWorkerResult = res;
    }
    })
  return maxWorkerResult
}




// _________________________________________________

function checkAge(age){
  if (age >= 18){
  return true
  }else{
  return confirm("А родители разрешили?")
  }
}

let age = prompt("Сколько вам лет?", 18);

if (checkAge(age)){
  alert ("Доступ получен");
}else{
  alert("Доступ закрыт")
}

// ______________________________________________


let question = prompt("путин Хуйло?");

function checked(question){
if (question === "да"){
    return true
}else{
  return confirm("подумай ещё",question)}
}

if (checked(question)){
  alert("Слава Украине")
}else{
  alert("походу ты ватник")
}
// _________________________________



function checkAge(age) {
   return (age > 18) || confirm('Родители разрешили?');
  }

  function checkAge(age) {
    return (age > 18) ? true: confirm('Родители разрешили?');
   }


function min(a,b){
  if (a > b){
  return a
  }else{
  return b}
}
// _______________________________

// let number = prompt("x=");
// let degree = prompt("n=");

// function pow(number, degree){
//   if (Number.isInteger(degree)){
//     return Math.pow(number, degree)
//   }
//     return("неподходящее число n")
// }



// СРАВНЕНИЕ МАССИВОВ

function arraysEqual(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
}

alert( arraysEqual([1, 2], [1, 2])); // true

// _______________________________________________________________________________________________

function camelize(str){
    let res = str.split('-')         // получаем массив из слов 

      res.forEach((item) => { 
        (item[0].toUpperCase())       // первые буквы слов стали заглавными
      
    });
}


// ___________________________________ решение


function camelize(str) {
  return str
    .split('') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
    .map(
      // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
      // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)// index == 0 ? word: word[0] условик если индекс равен 0, то word, иначе word[0].toUpperCase()
    )
    .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
}



// ___________делаем все буквы большими_______________________
function test(str){
  return (str).split().map((word) => word.toUpperCase()).join('')
}

// _________________фильтрация по диапозону____________________

// function filterRange(array, a, b) {
//   // добавлены скобки вокруг выражения для улучшения читабельности
//   return array.filter(item => (a <= item && item <= b));
// }

// let array = [5, 3, 8, 1];

// let filtered = filterRange(array, 1, 4);

// alert( filtered ); // 3,1 (совпадающие значения)

// alert( array ); // 5,3,8,1 (без изменений)




// ____________фтльтрация по диапозону на месте
// function filterRangeInPlace(arr, a, b) {

//   for (let i = 0; i < arr.length; i++) { //проходим циклом по массиву
//     let val = arr[i];                    // создаем переменную равную элементу массива

//     // удалить, если за пределами интервала
//     if (val < a || val > b) {              //сравнимаем эту меременную с условием
//       arr.splice(i, 1);                    //вырезаем неподходящие элементы и уменьшаем индекс
//       i--;
//     }
//   }

// }



function problem(x){
  if (typeof x == string ){
    
    return("Error")
  }else{
    return (50 * x) + 6
  }
 }

//  ___________функция принимает цисло и возвращает массив в обратном порядке______________
 function digitize(n){
  let array = (""+n).split("").map(Number).reverse()
 return array
}
// ______________________________________________________________________

function basicOP (operation, value1, value2){
  if(operation == "+"){
    return value1 + value2
  }else if(operation == "-"){
    return value1 - value2
  }else if( operation == "/"){
    return value1 / value2
  }
  else if(operation == "*"){
    return value1 * value2
  }
}

function basicOP (operation, value1, value2){
  switch(operation){
    case"+": return value1 + value2;
    case"-": return value1 - value2;
    case"/": return value1 / value2;
    case"*": return value1 * value2;
  }
}

const reverseSeq = n => {
  let myArray = [];
  for (let i = n; i >= 1; i -= 1){
      myArray.push(i)
  }
  return myArray;
};

function numberToString(num) {
  let str = num.toString()
  return str
}

function opposite(number) {
  if (number > 0){
    return -number
  }else if(number < 0){
    return  Math.sqrt(number * number)   
  }else{
    return 0
  }
  
}
// ______________функция переводит строку в верхний регистр_________________
function makeUpperCase(str) {
  return str.toUpperCase()
}



// ___________________функция выводит строку n раз_____________________________

function repeatStr (n, s) {
  return s.repeat(n);
}

// _________________функция преобразует имя и фамилию в инициалы, разделеные точкой____________

function abbrevName(name){
  return name.split(" ")
              .map((word) => word[0].toUpperCase())
              .join(".")
}

// ______________функция переводт ДНК в РНК____________________

function DNAtoRNA(dna) {
  let arr = dna.split("")
  for (let i = 0; i < arr.length; i += 1){
    if(arr[i] == "T"){
      arr[i] = "U"
    }
  }
   dna = arr.join("")
  return dna
}

// _______________функция считает сколько литров воды выпьет велосипедист зачас езды, округленое в меньшую сторону______

function litres(time) {
  return Math.floor(time / 2)
    // return ((time / 2) - (time % 2)/2) или так
}
// __________________________ функция принимает массив, удаляет из него элементы и ничего не возвращает


function filterRangeInPlace(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    // удалить, если за пределами интервала
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--; // ?????????????????????
    }
  }

}
// _______________________________________________________________
// __________________сортировка в порядке убывания_________________

// let arr = [5, 2, 1, -10, 8]
// arr.sort((a,b) => b - a);
//   alert(arr)

// __________скопировать и отсортировать массив____________________
//  по умолчанию сортирует по алфавиту

function copySorted(arr) {
  let newArr = arr.slice().sort()
  return newArr
}

// ___________-если число четное *8, нечетное *9_____________
function simpleMultiplication(number) {
  if (number % 2 === 0){
    return number * 8
  }else {
    return number * 9
  }
}

// __________функция определит хватит ли топлива до заправки___________

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  if((mpg * fuelLeft) >= distanceToPump){
    return true
  }else {
  return false
  }
};


// _______________функция сравнивает первую букву названия блюда и животного___________
function feast(beast, dish) {
    if ((beast[0] === dish[0]) && (beast.slice(-1) === dish.slice(-1))){
      return true
    } else{
    return false
    }
}

// __________________строки предбразовать в слова со всеми большими буквами______________

 function newStr(str) {
  let str2 = "";
  str2 = str2 + str[0].toUpperCase();
  for (let i = 1; i<str.length; i +=1){
    if (str[i-1] === " "){
      str2 = str2 + str[i].toUpperCase();
    }
    else
    {
      str2 = str2 + str[i];
    }
  }
  return str2
}


function supe(n){
  let str = n.toString();
  return +str.split("").sort((a,b) => b - a).join("")
}