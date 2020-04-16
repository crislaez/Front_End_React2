import React from 'react'
//css
import '../Css/Section.css'
//COMPONENTES
import ArticleOne from './ArticleOne'
import ArticleTwo from './ArticleTwo'
import ArticleThree from './ArticleThree'
import Carrito from './Carrito'

class Section extends React.Component{

    constructor(props){
        super(props);

        this.state = 
            {
                objeto:''
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
        // console.log(obj);
        this.setState({objeto:obj})
        // console.log('desde Section')
    }

    render(){
        return(
            <section>

                <Carrito color={ this.props.ventanaCarrito} objeto={this.state.objeto}></Carrito>
            {
                this.props.ventana == 'ventana1'
                ?
                <ArticleOne pasarAlCarrito={this.pasarAlCarrito}></ArticleOne>
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
