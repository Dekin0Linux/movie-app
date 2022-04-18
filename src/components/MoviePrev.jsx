import React from 'react'
import {useParams,useNavigate} from 'react-router-dom'


function MoviePrev() {
  const {id} = useParams();

  const history = useNavigate()


  return (
    <div className='prevCont'>
      <div>
        <h1>Preview Each movie {id}</h1>
      </div>
        
        <div className='view'>
            <div className='prevImg'>
                <img src={'https://via.placeholder.com/400'} alt="mov-img" />
            </div>
            <div className='prevBody'>
                <h2 className='heading'>Movie title</h2>
                <h2>Some text in here</h2>

                <div className="cast">
                 <div className='span'>
                   <div></div>
                   <p>Name</p>
                 </div>
                 <div className='span'>
                   <div></div>
                   <p>Name</p>
                 </div>
                 <div className='span'>
                   <div></div>
                   <p>Name</p>
                 </div>
                </div>


                <button className='Dbtn'>Download</button>
                <button className='Dbtn' style={{backgroundColor:"red"}}>Watch Now</button>
            </div>
        </div>
        <div className='synopsis'>
              <div>
                <h2>Synopsis</h2>
              </div>
              <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta minima ipsam neque quas tempora quibusdam, velit saepe? Repellendus ducimus cumque numquam unde quae nemo dolorem modi dicta laboriosam dolorum, officia fugit aliquam quis maxime, nulla nesciunt, quidem odit consequuntur deleniti! Deserunt aliquam consectetur fuga alias ipsam culpa eum veniam enim vero corrupti itaque voluptatum laborum magni, reiciendis velit quod nisi saepe praesentium, earum ad provident nam. Ab hic velit provident, atque accusantium animi, tempora est, saepe distinctio recusandae molestiae voluptates aliquid at assumenda. Asperiores unde, ut ullam fugit quos tempora dignissimos molestiae quam a autem ab quisquam voluptatum sed laboriosam?
              </div>

            </div>


            <button className='Dbtn' onClick={()=>history('/')}>Go Back Home</button>
    </div>
  )
}

export default MoviePrev;