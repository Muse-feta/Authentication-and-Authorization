
const router = require('express').Router()
const { loginController, registerController, dashController } = require('../controller/userController');
const adminMiddleware = require('../middleware/adminMiddleware');


router.post('/login', loginController);
router.post("/register", registerController);
router.get("/dashbored", adminMiddleware, dashController);

module.exports = router;