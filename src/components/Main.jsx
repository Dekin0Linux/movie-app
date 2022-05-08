import { useEffect , useState } from 'react';
import '../App.css';
import NavBar from './NavBar';
import Card from './Card';
import { v4 as uuidv4 } from 'uuid';



const API_URL = 'https://www.omdbapi.com/?apikey=ef1dc9dd&s=';

function Main() {
    const [users, setUsers] = useState([{}])
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
  
        // console.log(data.Search[0].imdbID)
      })
    },[title])
  
    
    
  
    return (
      <div className="App">
        <h2 className='head'>MOVIES APP</h2>
        <NavBar movtitle = {movTitle}/>
  
        {loading && <h3 style={{color:'white',textAlign:'center'}}>Loading ... </h3>}
        <div className='card-cont'>
          {!users ? <h1 style={{color:'white',textAlign:'center'}}>No Movie Found</h1> : users.map((user)=> 
          <Card 
            name={user.Title} 
            key={uuidv4()} 
            ID={user.imdbID} 
            year={user.Year} 
            // categ={user.Type} 
            poster={user.Poster}
          />)}

        </div>
        
      </div>
    );
}

export default Main;