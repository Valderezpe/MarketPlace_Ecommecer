const {category} = require('../models/index')
const slugify = require('slugify');

exports.createCategory= async (req, res, next) => {
    const slugCategory = req.body.category
};