import React from 'react'

let SearchBar = (props)=>{
    let inputStyle = {textAlign:'center'}
  
    return(
        <div>
            <input onChange={props.search} style={inputStyle} placeholder="Search Contacts" />
        </div>
        
    )
}


export default SearchBar