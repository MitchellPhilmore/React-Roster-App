import React from 'react'

let SearchBar = (props)=>{
    let inputStyle = {
        textAlign:'center',
        fontSize:'2em',
        fontFamily: "'Open Sans Condensed', sans-serif'",
        }
  
    return(
        <div>
            <input onChange={props.search} style={inputStyle} placeholder="Search Roster" />
        </div>
        
    )
}


export default SearchBar


