let users = [
  { username: 'budas', password: '123', role: 'admin' },
  { username: 'John Doe', password: '654321', role: 'user' }
]

module.exports = {
  index: (req, res) => {
    res.render('index')
  },

  register: (req, res) => {
    const { username, password } = req.body

    const userAlreadyExists = users.find(user => user.username === username)
    if (userAlreadyExists) return res.status(400).redirect('/')

    const newUser = { username, password, role: 'user' } // padrão: 'user'
    users.push(newUser)

    req.session.authenticated = true
    req.session.currentUser = newUser

    res.redirect('/dashboard')
  },

  login: (req, res) => {
    const { username, password } = req.body
    const user = users.find(user => user.username === username)

    if (!user || user.password !== password) return res.redirect('/')

    req.session.authenticated = true
    req.session.currentUser = user

    res.redirect('/dashboard')
  },

  logout: (req, res) => {
    req.session.destroy()
    res.redirect('/')
  },

  listUsers: (req, res) => {
    res.render('users', { users })
  },

  getUsersArray: () => users
}
