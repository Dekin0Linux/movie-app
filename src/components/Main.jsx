import { useEffect , useState } from 'react';
import '../App.css';
import NavBar from './NavBar';
import Card from './Card';
import { v4 as uuidv4 } from 'uuid';
import {Splide,SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';




const API_URL = 'https://www.omdbapi.com/?apikey=ef1dc9dd&s=';

function Main() {
    const [users, setUsers] = useState()
    const [title,setTitle] = useState('avengers')
    const [loading,setLoading] = useState(true)
  
  
    // Movie title
    const movTitle = (val) =>{
      if(val===""){
        alert("Enter a Movie");
      }else{
        setTitle(val)
        setLoading(true)
      }
    }
  
    useEffect(()=>{
      fetch(`${API_URL}${title}`)
      .then((res)=>{
        return res.json()
      })
      .then((data)=>{
        setUsers(data.Search)
        setLoading(false)
  
        // console.log(data.Search)
      })
    },[title])
  
    
    
  
    return (
      <div className="App">

        <div className='hero'>

        
        <h2 className='App-name'>Movie Land</h2>
        <NavBar movtitle = {movTitle}/>
  
        {loading && <h3 style={{color:'white',textAlign:'center'}}>Loading ... </h3>}
        
        </div>
        {/* end of hero */}
        <h2 className='genre'>New Release</h2>
        <Splide className='main-card'
          options={{
            gap:'1rem',
            arrows: false,
            perPage: 5,
            autoWidth: true,
            start:3
          }}
        
        >

        {!users ? <h1 style={{color:'white',textAlign:'center'}}>No Movie Found</h1> : users.map(user=> (
          <SplideSlide >
            <Card
             Key={uuidv4}
             poster={user.Poster}
             ID={user.imdbID}
            
            />
          </SplideSlide>

      )
            
          )}

        </Splide>


        {/* second slide */}
        <h2 className='genre'>Action</h2>
        <Splide className='main-card'
          options={{
            gap:'1rem',
            arrows: false,
            perPage: 8,
            autoWidth: true,
            start: 6,
            arrows: true
          }}
        
        >
        

        {!users ? <h1 style={{color:'white',textAlign:'center'}}></h1> : users.map(user=> (
          <SplideSlide >
            <Card
             Key={uuidv4}
             poster={user.Poster}
             ID={user.imdbID}
            
            />
          </SplideSlide>

      )
            
          )}

        </Splide>


        

        
          
              




      </div>
      
      
    )}
export default Main;
