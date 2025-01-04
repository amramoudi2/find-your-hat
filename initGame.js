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
        currentArr[Math.floor(Math.random() * w)] = "*"
    }

    return currentArr
}
    
function initGame(h,w){
    const fullGame = []

    for(let i = 0; i < h; i++){
        const isPlayer = fullGame.length > 0 ? true : false
        fullGame.push(addRow(w,isPlayer, i + 1 === h ? true : false))
    }

    return fullGame
}

module.exports.initGame = initGame;
