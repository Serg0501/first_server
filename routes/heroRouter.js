const {Router} = require('express');
const {heroController} = require('../controllers');
const heroRouter = Router();
const {uploadFile} = require('../middleware');

//   /api/heroes
heroRouter
.route('/')
.post(uploadFile.uploadHeroPhoto, heroController.createNewHero)
.get(heroController.getAllHeroes);

// /api/heroes/:heroId
heroRouter
.route('/:heroId')
.get(heroController.getHeroById)
.delete(heroController.deleteHeroById)
.patch(heroController.updateHeroById)

module.exports = heroRouter;