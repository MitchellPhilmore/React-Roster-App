import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './SearchBar'
import Players from './Players'
import roster from './roster'
import Navbar from './Navbar'
class App extends Component{
    constructor(props){
        super(props)

       this.state = {
           roster: roster.players,
           searchTerm: '',
           rosterData: [],
           stats:[],
           loading:true
       }
    }
   
    isLoading(){
        this.setState({
          loading:false
        })
        // return <Players  stats={this.state.rosterData} player={filteredRoster}/>
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
       
        <Navbar/>
                    <div className="col m2"/>
                    <div className="col m8">
                 <br/>
                 <br/>
                 <br/>
                <SearchBar search={search}/>
                <br/>
                <br/>
                {/* {this.state.loading? setTimeout(this.isLoading,3000):false} */}
                <Players  stats={this.state.rosterData} player={filteredRoster}/>
            </div>
           
         
           
        </div>
       
        )
    }
}

export default App