class PrintEditionItem{
    constructor(name, releaseDate, pagesCount,){
       this.name = name;
       this.releaseDate = releaseDate;
       this.pagesCount = pagesCount;
       this.state = 100;
       this.type = null;
    }
    fix() {
     this.state *= 1.5;
    }
    
    set state(number){
        if (number<0){
            this._state = 0
        }if(number >100){
            this._state = 100
        }else{
            this._state = number
        }
    }

}

