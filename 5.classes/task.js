class PrintEditionItem{
    constructor(name, releaseDate, pagesCount){
       this.name = name;
       this.releaseDate = releaseDate;
       this.pagesCount = pagesCount;
       this.state = 100;
       this.type = null;
    }
    fix() {                         // метод меняет значения ремонтной книги
     this.state *= 1.5;
    }

    set state(number){              // сеттер принимает новое значение state
        if (number<0){
            this._state = 0
        }if(number >100){
            this._state = 100
        }else{
            this._state = number
        }
    }

    get state(){                    // геттер выводит значения state
        return this._state;
    }

}


 class Magazine extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount){
        super(name,releaseDate,pagesCount)
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem{
    constructor(author, name, releaseDate, pagesCount){
        super(name,releaseDate, pagesCount)
        this.type = "book";
        this.author = author;
    }
}


class NovelBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount)  
        this.type = "novel";  
    }
}

class FantasticBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount)  
        this.type = "fantastic";  
    }
}

class DetectiveBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount)  
        this.type = "detective";  
    }
}



class Library {
    constructor(name,books){
    this.name = name;
    this.books = [];
    }

    addBook(book){
        if(book.state > 30){            // условие если у книги свойство state > 30
            this.books.push(book)       // тогда добавляем эту книгу в массив
        }
    }

    findBookBy(type, value){
        return this.books.find(book => book[type] == value) || null;    // возвращает первое найденое в массиве значение ,
                                                                        // выполняющее условие функции. в массиве Books ищем book, такое,
                                                                        // свойство его передано в аргументе, и его значение равно второму(value) аргументу
    }

    giveBookByName(bookName) {
        const book = this.findBookBy('name', bookName);
        
        if (book) {
          this.books.splice(this.books.indexOf(book), 1);
        }
        return book;
      }
} 