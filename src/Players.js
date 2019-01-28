import React,{Component} from 'react'


class Players extends Component{
    constructor(props){
        super(props)
    }
    render(){
      let titleStyle = {opacity:'0.5'}
     console.log(this.props.player)
      let allPlayers = this.props.player.map(p=>{
        return(
          <div className="col s12 m4">
          <div className="card">
            <div className="card-image">
              <img style={imgStyle} src={p.image}/>
              <span style={titleStyle} class="card-title black">{p.name}</span>
              <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">edit</i></a>
            </div>
            <div class="card-content">
              <h5>{p.position}</h5>
              <h5>{p.jerseyNumber}</h5>
              <h5>{p.team}</h5>
            </div>
          </div>
        </div>
        )
      })
        let imgStyle = {width:'200px',height:'200px'}
        return( allPlayers)
    }
}


export default Players