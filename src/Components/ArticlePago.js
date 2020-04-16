import React from 'react'
//css
import '../Css/ArticlePago.css'

class ArticlePago extends React.Component{

    render(){
        return(
            <article className='articlePago'>

                <div className='divPagar'>
                    <div className='divTituloPago'>
                        <h2>Precio: 0€</h2>
                    </div>
                    <div className='divBotonAtras'>
                        <input type='button' value='X' onClick={this.props.quitarVentanaPago}></input>
                    </div>
                </div>

            </article>
        )
    }
}

export default ArticlePago