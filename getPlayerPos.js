
function getPos(arr){
    for(let i = 0; i < arr.length; i++){
        const getY = arr[i].indexOf("*")
        if(getY !== -1){
            return f = {
                y : i,
                x : getY
            }
        }
    }
}


module.exports.getPos = getPos

