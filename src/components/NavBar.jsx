import React from 'react'
import { useState } from 'react'
import '../App.css'
import { FaSistrix  } from 'react-icons/fa';



function NavBar({movtitle}) {
    const [search, setSearch] = useState('')

  return (
    <div>
        <div className='search'>
            <input type="text" value={search} onChange={(e)=>{setSearch(e.target.value)}} placeholder='Search movies'/>
            <button onClick={()=>movtitle(search)}><FaSistrix/></button>
        </div>
    </div>
  )
}


export default NavBar
