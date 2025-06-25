// Middleware para verificar se está autenticado
const isAuthenticated = (req, res, next) => {
  if (req.session.authenticated) {
    return next()
  }
  res.redirect('/')
}

// Middleware para verificar se é admin
const isAdmin = (req, res, next) => {
  if (req.session.authenticated && req.session.currentUser.role === 'admin') {
    return next()
  }
  res.status(403).send('Acesso negado: apenas administradores.')
}

module.exports = {
  isAuthenticated,
  isAdmin
}
