import MovieCard from "../MovieCard";
import './index.css';
const MovieList = ({ movies }) => {
    return (
        <div className="movie-list">
            {
                movies.map((movie, index) => {
                    return (
                        <MovieCard key={index} movie={movie} />
                    )
                })
            }

        </div>
    )
}

export default MovieList;