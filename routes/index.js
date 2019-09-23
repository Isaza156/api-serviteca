const express = require('express');
const router = express.Router();

router.get('/', async (req,res) => {
    res.render('partials/index')
})

module.exports = router;