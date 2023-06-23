// __________________функция фильтрует имена из 4 символов________________
function friend (friends){
    return  friends.filter(item => item.length ===4);
}
// ___________-функция проверяетвозможен ли такой треугольник___________________
function isTriangle (a,b,c){
    if ((a + b) > c && (a + c) > b && (b + c) > a){
    return true
    }else{
    return false
    }
}

// _____________функция ищет иглу в стоге сена_________________

function findNeedle(haystack){
    return ("found the needle at position  ") + haystack.indexOf("needle")
}

// _____________сумма всех положительных чисел массива___________________
function positiveSum(arr){
    let arr2 = [];
   arr2 = arr.filter(item => item > 0)
   return arr2.reduce((a,b)=>a+b,0)// складывает все числа в массиве
}

// ___________________-функция считает кол-во положительных элементов и  сумму отприцательных_____________________


function countPositivesSumNegatives(input) {
    let positiveNums = 0;// задаем переменные 
    let negativeNums = 0;
    if (input === null || input.length === 0) {// провеекана ноль и возврат пустого массива
      return [];
    } else {
      input.forEach((num) => num > 0 ? positiveNums++ : negativeNums += num)// если массив не пустой проходим массив по элементам(num) через fprEach
    }                                                                       // для каждого элемента применяем тернарный оператор и применяем выражения через :
    return [positiveNums , negativeNums];
}

// __________________вернуть максимальное и минимальное значения из строки__________________

function highAndLow(numbers){
    numbers = numbers.split(' ').map(Number);// создает новый массив из строки numbers, разделяя символы пробелом и превращая каджый символ в цифру
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);// возвращает мах.apply(от нуля по массиву) плюс min.apply(от нуля по массиву)
  }


//   ____________________________________________________

// Здесь переменная key может быть вычислена во время выполнения кода или зависеть от 
// пользовательского ввода. После этого мы используем её для доступа к свойству. Это даёт нам большую гибкость.


let user = {
    name: "John",
    age: 30
  };
  
  let key = prompt("Что вы хотите узнать о пользователе?", "name");
  
  // доступ к свойству через переменную
  alert( user[key] ); // John (если ввели "name")

//   ______________________________________________________________________________

// ____________________считает среднее значение_____________________

function findAverage(array) {
  if (array.length === 0){
      return 0;
  }
  else{
   
    return array.reduce( ( a, v ) => a + v, 0 ) / array.length;
  }
 }

//  ________________________часы показывают время в миллисекундах после полуночи_______________

function past(h, m, s){
  return (h * 3600000) + (m * 60000) + (s * 1000)
}

// _______________автобус сажает пассажирова на остановке и высаживает, посчитать сколько останется пассажиров в конце_______________


var number = function(busStops){
  let entered = 0;
  let comeOut = 0;

  for(let i =0; i<busStops.length; i += 1){
    entered = entered + busStops[i][0];
    comeOut = comeOut + busStops[i][1];
  }
  return entered - comeOut
}


// ___________________количество ошибок принтера______________________



function printerError(s) {
  let error = 0;
  let i = 0;
  while (i < s.length){     //условия для перебора строки
    if(s[i] > "m"){   // элемент строки можно сравнивать  с буквой, как и цифры
      error ++ ;      // счетчик ошибок
    }
    i++               // счетчик элементов строки
  }

  return error + "/" + s.length
}

// _________________функция определяет длину самого короткого слова в строке_______________

function findShort(s){
  let res = s.split(" ").map((item) => item.length);
  return Math.min(...res)
}

// _______________-возвести в квадрат каждую цифру из числа_______________


function squareDigits(num){
  let array = ('' + num).split('').map((item)=> item*item);   // создаем массив путем перевода числа в строкуи довабления в массив, а далее возведение в квадрат
  return Number(array.join(''))                               // склеиваем по символьно и приводим к числу
}

// ________________________изограмма_______________________________________

function isIsogram(str){
    // let arr = str.toLowerCase().split('')
    let arr = [...str.toLowerCase()]    //тоже что и сверху
    for(let i = 0; i<arr.length; i+=1){
        for(let j=i+1; j<arr.length; j+=1){
          if(arr[i] === arr[j]){
          return false
          }
        }
      }
  return true
}
// ______________________________________________________________________________

function test(arr){          
   return Math.min(...arr)
}

 function findSmallestInt(args) {     // тоже самое
let smallest = args[0]
args.forEach(i => (i < smallest) && (smallest = i))
return smallest
}

function findSmallestInt(args) {
  return args.reduce((acc, cur) => acc < cur ? acc : cur)   // тоже самое
}
// _________________________________________________________
// ________________pin для банкомата________________________

function validatePIN (pin) {
  return typeof pin === 'string' && // проверяем что пин это строка
    Number.isInteger(+pin) && // убедимся,что при переводе в числа - это целые числа
    [4, 6].includes(pin.length) // только 4и 6 сиволо в длину
}

