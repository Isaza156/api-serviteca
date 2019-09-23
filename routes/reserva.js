const express = require('express');
const router = express.Router();

router.get('/reserva', (req,res) => {
    res.render('partials/reserva')
})

module.exports = router;