const {Router} = require('express');
const {heroController} = require('../controllers');

const heroRouter = Router();

//   /api/heroes
heroRouter
.route('/')
.get(heroController.getALLHeroes);

// /api/heroes/:heroId
heroRouter
.route('/:heroId')
.get(heroController.getHeroById)
.delete(heroController.deleteHeroById)
.patch(heroController.updateHeroById)

module.exports = heroRouter;