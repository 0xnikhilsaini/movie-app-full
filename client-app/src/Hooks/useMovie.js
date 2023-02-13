import { useEffect, useState } from "react";
import axios from "axios";

const getMovies = async () => {
    try {
        let reqOptions = {
            url: "http://localhost:3000/api/movies",
            method: "GET",
        }

        let response = await axios.request(reqOptions);
        return response.data

    } catch (error) {
        console.log(error);
        alert("some error occured in fetching data")
    }
}

const useMovie = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        getMovies().then((data) => {
            setMovies(data.data)
        });
    }, [])
    return movies;
}


export default useMovie;