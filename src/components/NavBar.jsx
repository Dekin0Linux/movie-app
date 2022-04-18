import React from 'react'
import { useState } from 'react'
import '../App.css'

function NavBar({movtitle}) {
    const [search, setSearch] = useState('')

  return (
    <div>
        <div className='search'>
            <input type="text" value={search} onChange={(e)=>{setSearch(e.target.value)}} placeholder='Search movies'/>
            <button onClick={()=>movtitle(search)}>Search</button>
        </div>
    </div>
  )
}


export default NavBar
