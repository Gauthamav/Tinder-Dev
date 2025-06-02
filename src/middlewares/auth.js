

const userAuth = ((req,res,next) => {
    const token = "xyz"
    const authorized = token === "xyz"
    if(!authorized){
        res.send("404 Error")
    }
    next()
    

})
module.exports = {userAuth};