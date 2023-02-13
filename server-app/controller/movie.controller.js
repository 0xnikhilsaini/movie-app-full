const { movieService } = require('../services')
const getMovies = async (req, res) => {
    const movie = await movieService.getMovies();
    res.status(200).send({ message: "movis get succssfully!", data: movie })
};

module.exports = { getMovies }