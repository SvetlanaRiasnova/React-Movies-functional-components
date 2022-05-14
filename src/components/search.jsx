import React, {useState} from 'react';

const Search = (props) => {

    const {searchMovies = Function.prototype,
    } = props;
    const [search, setSearch] =useState('');
    const [type, setType] =useState('all');


    const  handleKey = (event) => {
        if (event.key === 'Enter') {
            searchMovies(search, type);
        }
    };
    const handleFilter = (event) => {
        setType(event.target.dataset.type);
        searchMovies(search, event.target.dataset.type);
        };
        
    


    return <div className="row">
                <div className="col s12">
                    <div className="input-field ">
                        <input
                            className="validate"
                            placeholder='search'
                            type="search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onKeyDown={handleKey}
                        />
                        <button
                            className='btn search-btn purple lighten-3'
                            onClick={() => searchMovies(search, type)}>Search
                        </button>
                    </div>
                <div>
                    <label>
                        <input
                            className="with-gap purple"
                            name="group3" type="radio"
                            data-type="all"
                            onChange={handleFilter}
                            checked={type === 'all'}
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input
                            className="with-gap purple"
                            name="group3"
                            type="radio"
                            data-type="movie"
                            onChange={handleFilter}
                            checked={type === 'movie'}
                        />
                        <span>Movie</span>
                    </label>
                    <label>
                        <input
                            className="with-gap purple"
                            name="group3"
                            type="radio"
                            data-type="series"
                            onChange={handleFilter}
                            checked={type === 'series'}
                        />
                        <span>Series</span>
                    </label>
                </div>
            </div>
        </div>
    };


export { Search }