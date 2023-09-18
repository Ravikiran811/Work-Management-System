const express = require('express');

const router = express.Router();

//it will have functionalities fron another file

const home_controller = require('../controller/home_controller');

router.get('/',home_controller.create);
//it will redirect to another page
router.get('/delete-list',home_controller.delete)

module.exports = router;