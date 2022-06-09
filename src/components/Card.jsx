import React from 'react'
// import MoviePrev from './MoviePrev';
import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'

function Card({name , categ , poster , year, ID }) {
  // ID = useParams();
  

  return (
    <div >
        <div className='card'>
          <Link to={`/moviePrev/${ID}`} className='btn' >
            <div className='card-img'>
                <img src={poster !== 'N/A' ?poster : 'https://via.placeholder.com/400'} alt="MovieImage" />
            </div>
            <div className='bottom'>
                <p>{name}</p>
                <p>{year}</p>
                <p>{categ}</p>
            </div>
          </Link>   
        </div>
    </div>
  )
}

export default Card