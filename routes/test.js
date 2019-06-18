const express = require('express');
const router = express.Router();

router.get('/itWorks', function (req, res) {
    res.send("Yes, It Works!")
});

module.exports = router;