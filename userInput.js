const prompt = require('prompt-sync')({sigint: true});

function getUserInput(arr,field,mainField){

    let explan = false 
    
    while(true){
        const newPromt = prompt(`${explan ? 
            "were do you want to go? (up,donw,left,right) " : 
            "were do you want to go? "}`)

        const promtValue = newPromt.toLowerCase()

        if(promtValue === ""){
            console.log("please enter a value (up,donw,left,right)")
        }

        if(promtValue === "u" || promtValue === "up"){
            field.goUp()
            mainField.print(arr)
        }

        if(promtValue === "d" || promtValue === "down"){
            field.goDown()
            mainField.print(arr)
        }

        if(promtValue === "l" || promtValue === "left"){
            field.goLeft()
            mainField.print(arr)
        }

        if(promtValue === "r" || promtValue === "right"){
            field.goRight()
            mainField.print(arr)
        }

        if(promtValue){
            explan = true
        }
    }
}

module.exports.getUserInput = getUserInput