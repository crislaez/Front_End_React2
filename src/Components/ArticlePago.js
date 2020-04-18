import React from 'react'
//css
import '../Css/ArticlePago.css'

class ArticlePago extends React.Component{
    
    _isMounted = false;
    
    constructor(props){
        super(props);
        this.state = 
            {
                nombre:'',
                nTargeta:''
            }
    }

    componentDidMount(){
        this._isMounted = true;
    }

    componentWillUnmount(){
        this._isMounted = false;
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if(!this.state.nombre || !/[A-Za-z]+$/.test(this.state.nombre)){
            alert('Rellene el usuario de la targeta correctamente');
        }
        else if(!this.state.nTargeta || !/^\d{8}$/.test(this.state.nTargeta)){
            alert('Rellene el numero de la targeta correctamente');
        }
        else{
            alert('Pagado correctamente');
            //llamamos a la funcion que esta en el componente Section para cerrar la ventana de pago una vez hallamos pagado
            const quitarVentanaPago = this.props.quitarVentanaPago;
            quitarVentanaPago();
            //gurdamos la variable vaciar en el localStorage para vaciar el array productos del carrito
            localStorage.setItem('vaciar','vaciar');
            //y una vez se borre los productos del carrito, vaciamos la variable del localStorage
            localStorage.removeItem('vaciar');
            // console.log(localStorage.getItem('arrayObjetos'));
            let aux = JSON.parse(localStorage.getItem('arrayObjetos'));
            for(let valor in aux){
                let total = 0;
                total = aux[valor].quantity - aux[valor].cantidad;
                let datos = new URLSearchParams(`quantity=${total}`);
                //aqui hacemos el fetch a la base de datos para actualizarla
                fetch('http://localhost:3001/api/update/'+aux[valor].id,{method:'put',body:datos})
                .then(data => data.json())
                .then(response => {
                    console.log(response);
                })
                .catch(err => {
                    console.log(err.message);
                })
            }  
            
            //recargamos la pagina
            window.location.reload(true);
            //barramos al array de objetos del localStorage
            localStorage.removeItem('arrayObjetos');
            this.setState({nombre:'', nTargeta:''});
        }     
    }


    render(){
        return(
            <article className='articlePago'>

                <div className='divPagar'>
                    <div className='divTituloPago'>
                        <h2>Precio: {this.props.pagoTotal}€</h2>
                    </div>
                    <div className='divBotonAtras'>
                        <input type='button' value='X' onClick={this.props.quitarVentanaPago}></input>
                    </div>
                    
                    <form onSubmit={this.handleSubmit} action='' method='' encType="multipart/form-data">
                        <input type='text' value={this.state.nombre} onChange={(params) => {this.setState({nombre: params.target.value})}} placeholder='usuario de la targeta...'></input>
                        <br></br>
                        <input type='text' value={this.state.nTargeta} onChange={(params) => {this.setState({nTargeta: params.target.value})}} placeholder='numero de la targeta...'></input>
                        <br></br>
                        <input type='submit' value='Pagar'></input>
                    </form>
                </div>

            </article>
        )
    }
}

export default ArticlePago