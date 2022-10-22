const {Router} = require('express');
const {powerController} = require('../controllers');

const powerRouter = Router();

powerRouter.route('/').get()

module.exports = powerRouter;