const data = require("../json/category.json");
var Category = require('../db/category');

exports.createCategories = () => {
    data.forEach(async (cat) => {
        const category = Category.build({
            ...cat
        })
        await category.save()
    })
}