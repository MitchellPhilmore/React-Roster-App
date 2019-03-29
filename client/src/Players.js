import React,{Component} from 'react'


class Players extends Component{
    constructor(props){
        super(props)
      
        this.state = {
          stats:[],
          loading:true
        }
       
        this.retrieveStats()

    }

 

     retrieveStats = player=>{
       fetch('api/roster').then(data=>data.json()).then(data=>{
         this.setState({stats:data})
       }).then(data=>console.log('Done'))
     }
     
    render(){
    
   
      let revealStyle = {overflowY:'hidden'}
      let titleStyle = {opacity:'0.5',width:'100%',textAlign:'center',      fontFamily: "'Open Sans Condensed', sans-serif'",}
      let fontStyles = {
              fontFamily: "'Open Sans Condensed', sans-serif'",
              fontSize:'70%'
      }

      let allPlayers = this.props.player.map((p,i)=>{
        // console.log(p.name)
        // console.log(this.state.stats[i].playerName)
        // console.log('----------------')
        
        return(
          <div className="col s12 m4">
         
          <div className="card  hoverable">
            <div className="card-image">
              <img className="activator" style={imgStyle} src={p.image}/>
              <span style={titleStyle} class="card-title black">{p.name}</span>
              <a class="btn-floating halfway-fab waves-effect waves-light red activator"><i class="material-icons">more_vert</i></a>
            </div>
            <div style={revealStyle} class="card-reveal">
      <span class="card-title center-text ">Quick Stats<i class="material-icons right red-text">close</i></span>
      <h5 style={fontStyles}>{p.position}</h5>
                <h5 style={fontStyles}>{p.jerseyNumber}</h5>
                <h5 style={fontStyles}>{p.team}</h5>
                <h5 style={fontStyles}>{p.season}</h5>
                <h5 style={fontStyles}>{p.pointsPerGame}</h5>
                <h5 style={fontStyles}>{p.fieldGoalPercentage}</h5>
                <h5 style={fontStyles}>{p.threePointPercentage}</h5>
                <h5 style={fontStyles}>{p.totalReboundsPerGame}</h5>
                <h5 style={fontStyles}>{p.assistPerGame}</h5>
                <h5 style={fontStyles}>Twitter: @{p.twitter}</h5>
                <h5 style={fontStyles}>Twitter: @{p.twitter}</h5>
                <h5 style={fontStyles}>Twitter: @{p.twitter}</h5>


                <h5 style={fontStyles}>{p.gamesPlayed}</h5>
    </div>
            {/* `1` */}
          </div>
        </div>
        )
      })
        let imgStyle = {width:'200px',height:'200px'}
        return( allPlayers)
    }
}


export default Players