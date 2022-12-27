module.exports = app =>{
    const router = require('express').Router();
    const userController = require('../controller/user.controller')

    router.get('/user', userController.hello)

    app.use('/api', router)
}
