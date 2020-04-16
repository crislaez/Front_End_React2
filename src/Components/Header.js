import React from 'react'
//css
import '../Css/Header.css'

class Header extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <header>
                <h1>Web Practicas</h1>
            </header>
        )
    }
}

export default Header;