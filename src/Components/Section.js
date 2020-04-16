import React from 'react'
//css
import '../Css/Section.css'
//COMPONENTES
import ArticleOne from './ArticleOne'
import ArticleTwo from './ArticleTwo'
import ArticleThree from './ArticleThree'
import Carrito from './Carrito'
import ArticlePago from './ArticlePago'

class Section extends React.Component{

    _aparecerVentana = false;

    constructor(props){
        super(props);

        this.state = 
            {
                objeto:'',
                ventanaPago:false
            }        
    }

    componentDidMount(){
        if(this.props.ventanaCarrito){
            console.log('visto')
        }else{
            console.log('No visto')
        }
    }

    pasarAlCarrito = (obj) => {
        this.setState({objeto:obj});       
    }

    //evento que hara aparecer y desaparecer el la ventana pago
    ventanaPago = () => {

        if(!this._aparecerVentana){    
            this.setState({ventanaPago:true})        
            this._aparecerVentana = true;
        }
        else{
            this.setState({ventanaPago:false})  
            this._aparecerVentana = false;
        }
    }

    //evento para cerrar la ventana pago cuando demos a la x
    quitarVentanaPago = () => {
        this.setState({ventanaPago:false})  
        this._aparecerVentana = false;
    }

    render(){
        return(
            <section>

                <Carrito color={this.props.ventanaCarrito} objeto={this.state.objeto} ventanaPago={this.ventanaPago}></Carrito>
            
                {
                    this.state.ventanaPago
                    ?
                    <ArticlePago quitarVentanaPago={this.quitarVentanaPago}></ArticlePago>
                    :
                    <div></div>
                }
            
                {
                this.props.ventana == 'ventana1'
                ?
                <ArticleOne pasarAlCarrito={this.pasarAlCarrito} ></ArticleOne>
                :
                this.props.ventana == 'ventana2'
                ?
                <ArticleTwo></ArticleTwo>
                :
                this.props.ventana == 'ventana3'
                ?
                <ArticleThree></ArticleThree>
                :
                <div>Cargando...</div>
            }
            </section>
        )
    }
}

export default Section;
