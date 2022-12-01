const data = require("../json/category.json");
var Category = require('../db/category');

exports.create = () => {
    data.forEach((cat) => {
        await Category.build(cat).save()
    })
}