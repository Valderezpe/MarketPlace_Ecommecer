module.exports = app =>{
    const router = require('express').Router();
    const userController = require('../controller/user.controller')
    const categoryController = require('../controller/category.controller')

    router.get('/user', userController.hello)
    router.post('/category', categoryController.createCategory)
    router.get('/categories', categoryController.listCategories) 

    app.use('/api', router)
}
