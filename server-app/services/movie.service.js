const movies = require('../models/movies.json');

const getMovies = async () => {
    return movies;
}



module.exports = { getMovies };