/* const roles = require("../lib/accessLevel");
const { User } = require("../models");

async function hasWriterAccess(req,res,next){
    console.log(roles)
    const user = await User.findByPk(req.session.passport.user)
    console.log(user.accessLevel)
    if(user.accessLevel >= roles.escritor){
        next();
    } else {
        res.sendStatus(401)
    }

}

module.exports = hasWriterAccess */



