

function parseCount(n){
       let parseResult = Number.parseFloat(n);        //создаем переменную равную переводу строки в число
        if(Number.isNaN(parseResult)) throw new Error ('Невалидное значение')     //если она не число, прерываем программу и выводим
        return parseResult                                // возвращаем переменную
    }


    function validateCount(n){                  // в эту функцию передаем нашу функцию из выше
        try{
           return parseCount(n)                 // если все ок, возвращаем значение
        } catch(error){                         // если нет, возвращаем перехваченую ошибку 
            return error
        }
    }                                           // вот так будет
                                                // Error: Невалидное значение
                                                    // at parseCount (<anonymous>:4:45)
                                                    // at validateCount (<anonymous>:11:19)
                                                    // at <anonymous>:1:1





    class Triangle{
        constructor (a,b,c){
            this.a = a;
            this.b = b;
            this.c = c;
        if (c > a + b || b > a + c || a > b + c) {                          //УСЛОВИЕ  должно быть внутри коструктора
            throw new Error("Треугольник с такими сторонами не существует")
            }
        }
        get Perimeter(){                                                    //метод класса
            return (this.a + this.b + this.c).toFixed(3)
        }
        get Area(){                                                         // метод класса
            const p = (this.a + this.b + this.c) / 2;
            return ((p * (p - this.a) * (p - this.b) * (p - this.c)) ** 0.5).toFixed(3)
        }
    }

    function getTriangle (a, b, c)
 {
     try
     {
         return new Triangle(a, b, c);
     } catch (e)
     {
         return {
             getArea: function () { return "Ошибка! Треугольник не существует" },
             getPerimeter: function () { return "Ошибка! Треугольник не существует" }
         }
     }
 }


 