async function showPrivateHome(req, res) {
  res.render("homeProtegido");
}

module.exports = {
  showPrivateHome,
};
