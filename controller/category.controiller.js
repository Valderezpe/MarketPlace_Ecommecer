const {Category} = require('../models/index')
const slugify = require('slugify');

exports.createCategory = async (req, res, next) => {
    const {loja, categoria} = req.body
    
    const slugCategory = slugify(categoria, {lower: true})

    const newCategory = {
        loja: loja,
        categoria: categoria,
        slug: slugCategory
    }

    const categoryAdded = await Category.create(newCategory)

    return res.json(categoryAdded)
}

exports.listCategories = async (req, res, next) =>{
    const listAllCategories = await Category.findAll()

    // const categoriesListCustom = {
    //     categoria: listAllCategories.categoria,
    //     slug: listAllCategories.slug
    // }

    return res.status(201).json(listAllCategories )
}