module.exports = {
  configureWebpack: {
    devServer: {
      before (app) {
        const user = { username: '123', password: '123' }
        app.get('/api/login', (req, res) => {
          const username = req.query.username
          const password = req.query.password
          console.log(username === user.username, password === user.password, req.query)
          if (username === user.username && password === user.password) {
            res.json({
              code: 1,
              message: '登录成功',
              token: 'token' + '-' + username + '-' + (new Date().getTime() + 1000 * 60 * 10)
            })
          } else {
            res.json({
              code: -1,
              message: '账号或密码错误'
            })
          }
        })
      }
    }
  }
}