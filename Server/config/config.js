const jwt = require("jsonwebtoken");

const SECRET = "SeCrEtJwtTodo";

const configLogin = async (req,res, next)=> {
    const token = req.headers.authorization.split(' ')[1];
    if(token){
        const user = jwt.verify(token,SECRET);
        if(user){
            req.user = user;
            next();
            }
        else{
            res.status(404).json({message: "Configuration Failed!"});}
        }
    else{
        res.status(200).json({message: "Token not found!"});
    }
        
};

module.exports = { configLogin, SECRET }