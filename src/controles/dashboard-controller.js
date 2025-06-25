module.exports = {
  dashboard: (req, res) => {
    if (!req.session.authenticated) return res.redirect('/')

    res.render('dashboard', { user: req.session.currentUser })
  }
}
