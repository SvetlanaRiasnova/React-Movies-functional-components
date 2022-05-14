import React from 'react';

function Movie (props) {
    const {Title, Year, imdbID, Type, Poster} = props;
    return (

        <div id={imdbID} className="card movie">
            <div className="card-image">
                {
                    Poster === "N/A" ? <img src={`https://via.placeholder.com/300x450?text=${Title}`}/> :
                    <img src={Poster}/>
                }
                
                
            </div>
            <div className="card-content">
                <span className="card-title ">{Title}</span>
                <p>{Year} <span className='right'>{Type}</span></p>
            </div>
        </div>

    )
}

export {Movie}