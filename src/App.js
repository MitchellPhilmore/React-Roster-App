import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './SearchBar'
import Players from './Players'
import roster from './roster'

class App extends Component{
    constructor(props){
        super(props)

       this.state = {
           roster: roster.players,
           searchTerm: ''
       }
     
    }

    componentDidMount(){
        console.log(this.state.roster)
    }


    render(){
        let search = (e)=>{
            this.setState({
                searchTerm:e.target.value
            })
            console.log(this.state.searchTerm)
          } 
        let icon = {fontSize:'80px'}

       let filteredRoster = this.state.roster.filter(player=>{
            return player.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        })

        return(
        <div className="row">
            <div className="col m2"/>
             <div className="col m8">
               
                <SearchBar search={search}/>
                <Players player={filteredRoster}/>
            </div>
           
         
           
        </div>
       
        )
    }
}

export default App