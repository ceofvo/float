var express = require('express');
const categories = require('../json/category')
const histories = require('../json/history')
const _deals = require('../json/deals')
var router = express.Router();

/* FETCH categories. */
router.get('/categories', function(req, res) {
  try {
    const _categories = categories.map(category => {
      let total =  0;
      const history = histories[category.id] || []
      const deals = _deals[category.id] || []
      if (history.length) {
        history.forEach(data => {
          total += data.amount
        })
      }

      return {
        ...category,
        history,
        total,
        deals
      }
    })
    res.status(200).json({
      _categories
    })
  } catch(e) {
    console.log('e', e)
  }
});


module.exports = router;
