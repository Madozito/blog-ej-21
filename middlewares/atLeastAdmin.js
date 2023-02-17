//Admin es 400

function atLeastAdmin(req, res, next) {
  if (req.user.roleCode >= 400) {
    return next();
  } else {
    return res.sendStatus(401).send("No tiene permisos para crear un usuario.");
  }
}
module.exports = atLeastAdmin;
