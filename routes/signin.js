const express = require('express');
const router = express.Router();

router.get('/signin', (req,res) => {
    res.render('partials/signin')
})

module.exports = router;