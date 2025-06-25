const express = require('express')
const router = express.Router()

const authController = require('./controles/auth-controller')
const dashboardController = require('./controles/dashboard-controller')
const { isAuthenticated, isAdmin } = require('./middlewares/auth-middleware')

// Página inicial (login e registro)
router.get('/', authController.index)

// Registro (aberto)
router.post('/auth/register', authController.register)

// Login (aberto)
router.post('/auth/login', authController.login)

// Logout (protegido)
router.get('/auth/logout', isAuthenticated, authController.logout)

// Dashboard (protegido)
router.get('/dashboard', isAuthenticated, dashboardController.dashboard)

// Rota de admin para listar usuários
router.get('/admin/users', isAuthenticated, isAdmin, authController.listUsers)

module.exports = router
