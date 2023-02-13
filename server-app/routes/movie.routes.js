const express = require('express');
const movieController = require('../controller/movie.controller')
const router = express.Router();


router.route('/').get(movieController.getMovies);

module.exports = router;