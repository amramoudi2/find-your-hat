function print(arr){
    arr.forEach(y => {
        console.log(y.join(" "))
    })
}

function toRight(currentPos,arr){
    const currentRaw = arr[currentPos.y]

    console.clear()

    if(currentRaw[currentPos.x + 1] === "^"){
        currentRaw[currentPos.x + 1] = "*"
        currentRaw[currentPos.x] = "░"    
        print(arr)
        
        process.stdout.write("you won: you found your hat")
        process.exit()
    }

    if(currentRaw[currentPos.x + 1] === "O"){
        currentRaw[currentPos.x + 1] = "0"
        currentRaw[currentPos.x] = "░"
        print(arr)
        
        process.stdout.write("you lost: you fell in a hole")
        process.exit()
    }

    if(!currentRaw[currentPos.x + 1]){
        currentRaw[currentPos.x] = "░"
        print(arr)

        process.stdout.write("you lost: out of map")
        process.exit()
    }

    currentRaw[currentPos.x] = "░"
    currentRaw[currentPos.x + 1] = "*"

    return arr
}

function toLeft(currentPos,arr){
    const currentRaw = arr[currentPos.y]

    console.clear()

    if(currentRaw[currentPos.x - 1] === "^"){
        currentRaw[currentPos.x - 1] = "*"
        currentRaw[currentPos.x] = "░" 
        print(arr)
        process.stdout.write("you won!: you found your hat")
        process.exit()
    }

    if(currentRaw[currentPos.x - 1] === "O"){
        currentRaw[currentPos.x - 1] = "0"
        currentRaw[currentPos.x] = "░"
        print(arr)
        process.stdout.write("you lost: you fell in a hole")
        process.exit()
    }

    if(!currentRaw[currentPos.x - 1]){
        currentRaw[currentPos.x] = "░"
        print(arr)
        process.stdout.write("you lost: out of map")
        process.exit()
    }

    currentRaw[currentPos.x] = "░"
    currentRaw[currentPos.x - 1] = "*"

    return arr
}

function toUp(currentPos,arr){

    console.clear()
    
    
    if(!arr[currentPos.y - 1]){
        arr[currentPos.y][currentPos.x] = "░"
        print(arr)
        process.stdout.write("you lost: out of map")
        process.exit()
    }
    
    if(arr[currentPos.y - 1][currentPos.x] === "^"){
        arr[currentPos.y - 1][currentPos.x] = "*"
        arr[currentPos.y][currentPos.x] = "░"
        print(arr)
        process.stdout.write("you won!: you found your hat")
        process.exit()
    }
    
    if(arr[currentPos.y - 1][currentPos.x] === "O"){
        arr[currentPos.y - 1][currentPos.x] = "0"
        arr[currentPos.y][currentPos.x] = "░"
        print(arr)
        process.stdout.write("you lost: you fell in a hole")
        process.exit()
    }

    arr[currentPos.y - 1][currentPos.x] = "*"
    arr[currentPos.y][currentPos.x] = "░"

    return arr
}

function toDown(currentPos,arr){
    
    console.clear()
    
    if(!arr[currentPos.y + 1]){
        arr[currentPos.y][currentPos.x] = "░"
        print(arr)
        process.stdout.write("you lost: out of map")
        process.exit()
    }
    
    if(arr[currentPos.y + 1][currentPos.x] === "^"){
        arr[currentPos.y + 1][currentPos.x] = "*"
        arr[currentPos.y][currentPos.x] = "░"
        print(arr)
        process.stdout.write("you won!: you found your hat")
        process.exit()
    }

    if(arr[currentPos.y + 1][currentPos.x] === "O"){
        arr[currentPos.y + 1][currentPos.x] = "0"
        arr[currentPos.y][currentPos.x] = "░"
        print(arr)
        process.stdout.write("you lost: you fell in a hole")
        process.exit()
    }


    arr[currentPos.y + 1][currentPos.x] = "*"
    arr[currentPos.y][currentPos.x] = "░"

    return arr
}


module.exports.toRight = toRight
module.exports.toLeft = toLeft
module.exports.toUp = toUp
module.exports.toDown = toDown
