const {initGame} = require("./initGame")
const {getPos} = require("./getPlayerPos")
const {toLeft,toRight,toDown,toUp} = require("./playerMovment")
const {getUserInput} = require("./userInput")
class Field {
    constructor(field){
        this._field = field
    }

    static generateField(h,w){
        return initGame(h,w)
    }

    getPlayPos(){
        return getPos(this._field)
    }

    goRight(){                
        toRight(this.getPlayPos(),this._field)
    }

    goLeft(){
        toLeft(this.getPlayPos(),this._field)
    }

    goUp(){
        toUp(this.getPlayPos(),this._field)
    }

    goDown(){
        toDown(this.getPlayPos(),this._field)
    }

    static print(arr){
        arr.forEach(y => {
            console.log(y.join(" "))
        })
    }
}

// to start the game
const randomWidth = Math.floor(Math.random() * (10 - 5)) + 4;
const randomHight = Math.floor(Math.random() * (10 - 5)) + 7;

const generatedField = Field.generateField(randomHight,randomWidth)
const myField = new Field(generatedField)
console.clear()

Field.print(generatedField)

getUserInput(generatedField,myField,Field)

module.exports.Field = Field;