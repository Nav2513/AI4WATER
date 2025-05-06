const express = require('express');


const router = express.Router();



//Only admin can access
router.get('/admin', (req, res) => {
    res.json({ message: "Welcome Admin"});
})




// Both user and admin can access

router.get('/user', (req, res) => {
    res.json({ message: "Welcome user"});
});


module.exports = router;