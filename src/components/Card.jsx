import React from 'react'
import MoviePrev from './MoviePrev';
import {Link} from 'react-router-dom'
import {useParams,useSearchParams} from 'react-router-dom'

function Card({name , categ , poster , year,ID}) {
  // ID = useParams();

  return (
    <div>
        <div className='card'>
            <div className='card-img'>
                <img src={poster != 'N/A' ?poster : 'https://via.placeholder.com/400'} alt="MovieImage" />
            </div>

            <div className='bottom'>
                <p>{name}</p>
                <p>{year}</p>
                <p>{categ}</p>
                <p>{ID}</p>
                <Link to={`/moviePrev/${ID}`} className='btn' >WATCH</Link>
            </div>
            
        </div>
    </div>
  )
}

export default Card