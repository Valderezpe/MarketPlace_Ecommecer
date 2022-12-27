   const {User} = require ('../models/index');
   const bcrypt = require ('bcrypt');
   const salt = bcrypt.genSaltSync(10);

   exports.hello =(req, res) => {
        res.json({
            api_user: true
        })
    }

    exports.createUser = async (req, res, next) => {
        const newUser = req.body

        return res.json(newUser)
    }