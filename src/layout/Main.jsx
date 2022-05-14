import React, {useState} from 'react';
import {Movies} from '../components/movies';
import {Preloader} from '../components/preloader';
import {Search} from '../components/search';
import { useEffect } from 'react';

const API_KEY = process.env.REACT_APP_API_KEY;

function Main() {

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const searchMovies = (str, type = 'all') => {
        setIsLoading(true);
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&S=${str}${type !== 'all' ? `&type=${type}` : ''}`)
            .then(response => response.json())
            .then((data) => (setMovies(data.Search), setIsLoading(false)));
    };


    useEffect(
        () => {fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&S=matrix`)
            .then(response => response.json())
            .then((data) => (setMovies(data.Search), setIsLoading(false)));}, []
    );


        return <main className="container content">
                    <Search searchMovies={searchMovies}/>
                    {
                        isLoading ? (<Preloader />)
                            :(<Movies movies={movies} />) 
                    }
        </main>
};

export {Main}