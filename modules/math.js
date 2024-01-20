function add (b){
    return 5 +b
}
function sub (b){
    return 5 -b
}
// This way cannot export becouse its overwrite the intial value
// module.exports = add
// module.exports = sub

// for multiple export we can use Object like this 
module.exports = {add, sub}