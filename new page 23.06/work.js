// _______________кому понравилось лайки________________________


function likes(names) {
  switch(names.length){
    case 0:
        return "no one likes this";
    case 1:
        return names[0] + " likes this";
    case 2:
        return names[0] + " and " + names[1] + " like this";
    case 3:
        return names[0] + "," + names[1] + " and " + names[2] + " like this";
}
    if (names.length >= 4){
        return  names[0] + "," + names[1] + " and " + (names.length - 2)  + " others like this";
    }
    else{
        return "no one likes this"
    }
  }

// ___________________________________________________________________________________________________
// -------------------------заменить букву на ее позицию в алфавите-------------------------------

function alphabetPosition(text) {
    let obj = {'a':1, 'b':2, 'c':3, 'd':4, 'e':5, 'f':6, 'g':7, 'h':8, 'i':9, 'j':10, 'k':11, 'l':12,
                'm':13, 'n':14, 'o':15, 'p':16, 'q':17, 'r':18, 's':19, 't':20, 'u':21, 'v':22, 'w':23,
                'x':24, 'y':25, 'z':26
    }
    let text2 = text.toLowerCase().split('');
   
    for (let i = 0; i <= text2.length; i+= 1){
        if(Number(text2[i])){
            delete text2[i]
        }
    }
    for(let a in obj){
        let value = obj[a];
        for(let i = 0; i <= text2.length; i += 1){
            if(text2[i] == a){
            text2[i] = value
            }
        }
    }
    let text3 = text2.filter(item => Number(item))
    return text3.join(' ')
}


// _____________________вернуть строку где символ встречается один раз(, а если больше )._____________

function duplicateEncode(word){
  let str = word.toLowerCase();         // создаем строку, которая игнорирует регистр букв
  var unique = '';                      // создаем переменную где будут храниться результаты вычислений
  for (var i = 0; i < str.length; i++) {            // проходим циклом по новой строке
        if (str.lastIndexOf(str[i]) === str.indexOf(str[i])) {      //если первый и последний индекс 
          unique += '(';                          //у элемента равны, значит такой элемент всего один!
        } else
        unique += ')';                             //прибавляем символы
      }
      return unique;
}
// _________________________________________________________________________________________________



function duplicateEncode(str){
    let word = str.toLowerCase();
    let res = "";
    
    for(let i = 0; i < word.length; i += 1){
        if(word.indexOf(word[i]) === word.lastIndexOf(word[i])){
            res += "("
        }else{
            res += ")"
        }
    }return res
}


// ____две строки из букв, нужно вернуть третью, максимально длинную, что бы буквы не повторялись____


function longest(s1, s2) {
    return (s1 + s2).split('').filter(onlyUnique).sort().join('') // возвращаем две строки сложенные и 
                                                                // разделеные по знакам, отфильтроваными через функцию,
                                                                //затем отсортироваными по алфавиту и склееными без пробелов
  }
  
  function onlyUnique(value, index, self) { 
      return self.indexOf(value) === index;

    // функция возвращает массив где первое значение индекса элемента равно индексу
}



// ---------------------------вернуть средний(средние) символы слова-------------------

function getMiddle(s){
    res = s.length;
if(res % 2 ===0){
    return '' +s[Math.floor(res / 2)- 1] + s[Math.floor(res / 2)]
}else{
    return '' + s[Math.floor(res / 2)]
}
}
// ----------------------------------------------------------------------------

// ------------------доминатор массива---------------не решил--------------------------

function dominator(arr) {
    const indexes = {};                                              //создаем обьект 
    for (let x = 0; x < arr.length; x++) {                          //проходим по массиву
      indexes[arr[x]] = indexes[arr[x]] ? indexes[arr[x]] + 1: 1;   //если в обьекте есть одинаковый элемент, его количество увеличиваем на 1   
      if (indexes[arr[x]] > arr.length / 2)  return arr[x];          // если кол-во повторных элементов больше половины массиваб выводим этот элемент
    }
    return -1;
  }
// ______________________________________________________________________________________

// -------------------------перевести из двоичных в целое число--------------------------

function  binaryArrayToNumber(arr) {
   return parseInt(arr.join(''), 2) // цифра указывает основание системы счисления
  };

// ---------------------------найти отличающееся число-------------не решил---------------------

function findUniq(arr) {
    arr.sort((a,b)=>a-b);               // сортируем по порядку
    return arr[0]==arr[1]?arr.pop():arr[0]  // если нулевой и первый элемент равны, значит отличается последний
  }                                         // иначе отличается первый(т.к. мы знаем что только один отличается)



//   -------или----------
function findUniq(arr) {
    return +arr.filter( (value) => { return arr.indexOf(value) == arr.lastIndexOf(value) } );// callback функция оставит только элемент который только в одном экземпляре
  }
//--------------------------------------------------------------------------------------------------

// ---------------------встречается нечетное количество раз--------------------не решил-------------

function findOdd(A) {
    const count = (arr, val) => arr.filter((item) => item === val).length; // эта функция дает длину массива одинаковых элементов
    let target = 0;
    A.forEach((arrNum) => {                     //обходим массив поэлементно
      if (count(A, arrNum) % 2 !== 0) {         //если в массиве если такие элементы, которых нечетное количество
        target = arrNum;                        // тогда мы их выводим
      }
    });
    return target;
  }

// --------------складывает два числа, выдает сумму в бинарном виде--------------------------

function addBinary(a,b) {
    let res = a + b;
    let arr = [];
   while(res > 1){
    arr.push(res % 2);
    res = Math.floor(res / 2);
    if(res == 1){
        arr.push('1');
        break
    }if(res == 2){
        arr.push('10')
        break
    }
}
return ''+arr.reverse().join('')
}
// -----------------------------------------------------------------------------------------
//-----------------------сложить наименьшие числа в массиве---------------------------------


function sumTwoSmallestNumbers(numbers) { 
    function compareNumeric(a,b){           // неизвестная херня как то сортирует по возрастанию
        if(a>b)return 1;
        if(a==b) return 0;
        if (a<b) return -1;
    }
    numbers.sort(compareNumeric);
      return numbers[0] + numbers[1]        // складываем два самых маленьких элемента
  }


// --------вывести только цифры из массива-----------------------
function filter_list(l) {
  return l.filter( item => typeof item != 'string');
  }


// --------------дурацкое задание буквы идут последовтельными группами--------------------
 var uniqueInOrder=function(iterable){
  let arr = [];
      for(let i =0; i <iterable.length; i++){
        if(iterable[i] != iterable[i+1]){
          arr.push(iterable[i])}
      }
   return arr
}


function deleteNth(arr,n){

  const count(arr,n)
}