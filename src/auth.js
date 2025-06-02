

const userAuth = ((req,res,next) => {
    const token = "xyz"
    const authorized = token === "xyz"
    if(authorized){
        next()
    }
    res.send("404 Error")

})
module.exports = {userAuth};