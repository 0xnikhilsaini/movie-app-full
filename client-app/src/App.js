import useMovie from './Hooks/useMovie';
import MovieList from './components/MovieList';
import './App.css';


function App() {
  const movies = useMovie();
  return (
    <div className="App">
      <MovieList movies={movies} />
    </div>
  );
}


export default App;
