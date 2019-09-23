const express = require('express');
const router = express.Router();

router.get('/servicios', (req,res) => {
    res.render('partials/servicios')
})

module.exports = router;