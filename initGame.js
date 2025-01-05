function addRow(w,isPlayer,isLastPositon){
    const currentArr = []
    let maxNumOfHols = w / 2
    let hatAdded = false

    for(let i = 0; i < w; i++){
        currentArr.push("░")
    }

    currentArr.forEach(x => {
        if(isLastPositon && !hatAdded){
            currentArr[Math.floor(Math.random() * w)] = "^"     

            hatAdded = true
            maxNumOfHols--
        }else{
            if(maxNumOfHols > 0 && isPlayer){
                const randomNum = Math.floor(Math.random() * w)
                if(currentArr[randomNum] !== "^"){  
                    currentArr[randomNum] = "O"
                    maxNumOfHols--
                }
            }
        }
    })

    if(!isPlayer){
        const getRandomPlayerSpawn = Math.floor(Math.random() * w)

        if(currentArr[getRandomPlayerSpawn] === "^"){
            if(currentArr[getRandomPlayerSpawn + 1]){
                currentArr[getRandomPlayerSpawn + 1] = "*"
            }else{
                currentArr[getRandomPlayerSpawn - 1] = "*"
            }
        }else{
            currentArr[getRandomPlayerSpawn] = "*"
        }
    }

    return currentArr
}
    
function initGame(h,w){
    const fullGame = []

    const getRandomHight = Math.floor(Math.random() * h + 1)

    for(let i = 0; i < h; i++){
        const isPlayer = fullGame.length > 0 ? true : false
        fullGame.push(addRow(w,isPlayer, i + 1 === getRandomHight ? true : false))
    }

    return fullGame
}

module.exports.initGame = initGame;
