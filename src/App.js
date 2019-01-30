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

        let style = {width:'100%',height:'400px'}

        return(
        <div className="row">
        <div className=" col m12"><img style={style} src="https://i.pinimg.com/originals/96/9b/fc/969bfc2f7c44e1b2797c0d3bafb0c25d.jpg"/></div>
            <div className="col m2"/>
             <div className="col m8">
               
                <SearchBar search={search}/>
                <br/>
                <Players player={filteredRoster}/>
            </div>
           
         
           
        </div>
       
        )
    }
}

export default App