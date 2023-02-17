//Editor 300

function atLeastEditor(req, res, next) {
    if (req.user.roleCode >= 300) {
      return next();
    } else {
      return res.sendStatus(401)
    }
  }
module.exports = atLeastEditor;
  