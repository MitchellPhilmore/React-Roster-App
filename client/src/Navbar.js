import React,{Component} from 'react'

export default class Navbar extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <nav>
            <div class="nav-wrapper blue darken-4 text-white">
              <a href="#" class="brand-logo center">Sixers Stat Scraper</a>
              
            </div>
          </nav>
        )
    }
}