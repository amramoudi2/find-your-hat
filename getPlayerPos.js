
function getPos(arr){
    for(let i = 0; i < arr.length; i++){
        const getY = arr[i].indexOf("*")
        if(getY !== -1){
            return f = {
                x : i,
                y : getY
            }
        }
    }
}


module.exports.getPos = getPos

