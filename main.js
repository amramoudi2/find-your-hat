const prompt = require('prompt-sync')({sigint: true});
const {initGame} = require("./initGame")
const {getPos} = require("./getPlayerPos")
const {toLeft,toRight} = require("./playerMovment")

class Field {
    constructor(){
        this._filed = []
    }

    generateField(h,w){
        this._filed = initGame(h,w)
    }

    getPlayPos(){
        console.log(getPos(this._filed))
    }

    print(){
        this._filed.forEach(x => {
            console.log(x.join(" "))
        })
    }
}


const myFiled = new Field()

myFiled.generateField(4,4)
myFiled.print()
myFiled.getPlayPos()
