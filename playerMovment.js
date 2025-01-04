const {getPos} = require("./getPlayerPos")

const testArr = [
    ["*","░","░","O"],
    ["O","░","O","░"],
    ["O","░","░","░"],
    ["░","O","^","░"]
]


function toRight(currentPos,arr){
    const currentRaw = arr[currentPos.x]

    if(currentRaw[currentPos.y + 1] === "^"){
        currentRaw[currentPos.y + 1] = "*"
        currentRaw[currentPos.y] = "░"    
        console.log(arr);
        
        
        process.stdout.write("you won")
        process.exit()
    }

    if(currentRaw[currentPos.y + 1] === "O"){
        currentRaw[currentPos.y + 1] = "0"
        currentRaw[currentPos.y] = "░"
        console.log(arr);
        
        process.stdout.write("you fell in a hole")
        process.exit()
    }

    if(!currentRaw[currentPos.y + 1]){
        currentRaw[currentPos.y] = "░"
        console.log(arr);

        process.stdout.write("out of map")
        process.exit()
    }

    currentRaw[currentPos.y] = "░"
    currentRaw[currentPos.y + 1] = "*"

    return arr
}

function toLeft(currentPos,arr){
    const currentRaw = arr[currentPos.x]

    if(currentRaw[currentPos.y - 1] === "^"){
        currentRaw[currentPos.y - 1] = "*"
        currentRaw[currentPos.y] = "░" 
        console.log(arr);
        process.stdout.write("you won")
        process.exit()
    }

    if(currentRaw[currentPos.y - 1] === "O"){
        currentRaw[currentPos.y - 1] = "0"
        currentRaw[currentPos.y] = "░"
        console.log(arr);
        process.stdout.write("you fell in a hole")
        process.exit()
    }

    if(!currentRaw[currentPos.y - 1]){
        currentRaw[currentPos.y] = "░"
        console.log(arr);
        process.stdout.write("out of map")
        process.exit()
    }

    currentRaw[currentPos.y] = "░"
    currentRaw[currentPos.y - 1] = "*"

    return arr
}


module.exports.toRight = toRight
module.exports.toLeft = toLeft