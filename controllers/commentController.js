const { Comment } = require("../models");

async function createComment (req,res) {

    await Comment.create({
     content: req.body.content,
     articleId:req.body.articleId
   });
 
     return res.redirect("/admin");
 
 } 

 module.exports = {createComment}