const express = require('express');
const verifyToken = require('../middlewares/authMiddleware');
const authorizeRoles = require('../middlewares/roleMiddleware');

const router = express.Router();



//Only admin can access
router.get('/admin', verifyToken, authorizeRoles("admin"), (req, res) => {
    res.json({ message: "Welcome Admin"});
})




// Both user and admin can access

router.get('/user', verifyToken, authorizeRoles("user", "admin"), (req, res) => {
    res.json({ message: "Welcome user"});
});


module.exports = router;