//Admin es 400

function atLeastAdmin(req, res, next) {
  if (req.user.roleCode >= 400) {
    return next();
  } else {
    return res.sendStatus(401)
  }
}
module.exports = atLeastAdmin;
