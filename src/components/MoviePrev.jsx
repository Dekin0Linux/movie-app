import React,{useState,useEffect} from 'react'
import {useParams,useNavigate,Link} from 'react-router-dom'

import { FaAngleLeft ,FaSave} from 'react-icons/fa';


const API_URL = 'https://www.omdbapi.com/?apikey=ef1dc9dd&i=';

function MoviePrev() {
  const {id} = useParams();
  const [single,setSingle] = useState({})

  const history = useNavigate()

  useEffect(()=>{
    fetch(`${API_URL}${id}`)
    .then((res)=>{
      return res.json()
    })
    .then((data)=>{
      setSingle(data)

      console.log(data)
    })
  },[id])

  return (
    <div className='prevCont'>
        
        <div className='view'>
            <div className='prevImg'>
                <img src={single.Poster} alt="mov-img" />
            </div>

            <div className='prevBody'>
                <h1 className='heading'>{single.Title}</h1>
                <h3>Author: {single.Writer}</h3>
                <hr />
                <h3>Duartion : {single.Runtime}</h3>
                <hr />
                <h3>Actors: {single.Actors}</h3>
                <hr />
                <h3>Genre : {single.Genre}</h3>
                <hr />
                <h3>Languages : {single.Language}</h3>

                <button className='Dbtn'><FaSave/>Save</button>
                <button className='Dbtn' style={{backgroundColor:"red"}} onClick={()=>window.location.assign('https://www.youtube.com/watch?v=u31qwQUeGuM')}><Link to={{ }}>Watch Now</Link></button>
            </div>
        </div>
        
        <div className='synopsis'>
              <div>
                <h2>Synopsis</h2>
              </div>
              <div>
                {single.Plot}
              </div>
            </div>

            <button className='Dbtn' onClick={()=>history('/')}><FaAngleLeft/></button>
    </div>
  )
}

export default MoviePrev;