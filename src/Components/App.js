import React from 'react'
//CSS
import '../Css/App.css'
//componentes
import Header from './Header'
import Nav from './Nav'
import Section from './Section'
import Footer from './Footer'

class App extends React.Component{

    _auxVentanaCarrito = false;

    constructor(props){
        super(props)
        this.state = 
            {
                ventana:'ventana1',
                ventanaCarrito:'0px'
            }
    }

    cambioSection = (event) => {
        console.log(event.target.id)
        if(event.target.id == 'b1'){
            this.setState({ventana:'ventana1'})
        }
        else if(event.target.id == 'b2'){
            this.setState({ventana:'ventana2'})
        }
        else if(event.target.id == 'b3'){
            this.setState({ventana:'ventana3'})
        }
    }

    mostrarCarrito = (event) => {
        console.log(event.target.id)

        // if(!this._auxVentanaCarrito){
        //     this.setState({ventanaCarrito:true});
        //     this._auxVentanaCarrito = true;
        // }else{
        //     this.setState({ventanaCarrito: false})
        //     this._auxVentanaCarrito = false;
        // }

        if(!this._auxVentanaCarrito){
            this.setState({ventanaCarrito:'400px'});
            this._auxVentanaCarrito = true;
        }else{
            this.setState({ventanaCarrito: '0px'})
            this._auxVentanaCarrito = false;
        }        
    }
    
    render(){
        return(
            <div>
                <Header></Header>
                <Nav cambioSection={this.cambioSection} mostrarCarrito={this.mostrarCarrito}></Nav>
                <Section ventana={this.state.ventana} ventanaCarrito={this.state.ventanaCarrito}></Section>
                <Footer></Footer>
            </div>
        )
    }
}

export default App