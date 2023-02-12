const { Article } = require("../models");

async function showArticles(req, res) {
  const articles = await Article.findAll();
  res.render("articles", { articles });
}

const showCreateForm = function (req, res) {
  console.log("holis");
  res.render("new");
};


/* const newArticle= async function( req,res){
  console.log("aloha");
  
  req.redirect("/articulos") 
} */
module.exports = {
  showCreateForm,
  showArticles,
};
