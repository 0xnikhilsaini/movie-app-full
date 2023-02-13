import './index.css';

const MovieCard = ({ movie }) => {
    return (
        <div className='movie-card'>
            <div>Name : {movie.movieName}</div>
            <div>Rating : {movie.rating}</div>
            <div>Released Date : {movie.releasedDate}</div>
        </div>
    )
}

export default MovieCard;