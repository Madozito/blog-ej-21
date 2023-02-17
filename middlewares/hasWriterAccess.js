/* const {Article, User}= require("../models")


async function hasWriterAccess(req,res,next){        //author is not defined
  const article = await Article.findOne({where: User.name = author})
    const user = await User.findByPk(req.user.roleCode)
    
    if (req.user.roleCode === 200 && req.article.author === user.name){
        next();
    }else{
        res.sendStatus(401)
    }
}
module.exports = hasWriterAccess */