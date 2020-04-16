import React from 'react'
//css
import '../Css/Nav.css'
//FONT AWESOME
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'

class Nav extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <nav>
                <input className='botones' style={{marginLeft:'20%'}} id='b1' type='button' value='Boton1' onClick={this.props.cambioSection}></input>
                <input className='botones' id='b2' type='button' value='Boton2' onClick={this.props.cambioSection}></input>
                <input className='botones' id='b3' type='button' value='Boton3' onClick={this.props.cambioSection}></input>
                <button className='botones' id='b4' onClick={this.props.mostrarCarrito}><FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon></button>
            </nav>
        )
    }
}

export default Nav