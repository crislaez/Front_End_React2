import React from 'react'
//css
import '../Css/Carrito.css'

class Carrito extends React.Component{
    
    _isMountd = false;
    //el array auxiliar donde se guardaran los productos que nos llegan
    _aux = [];
    //la varaible auxiliar del pago que hara el cliente
    _precioProducto = 0;

    constructor(props){
        super(props);
        this.state= 
            {
                array:[],
                aPagar:0
            };
    }

    componentDidMount(){
        this._isMountd = true;
    }

    componentDidUpdate(prevProps){
        //si las props que recibimos son diferentes a las props anterioes entra al if
        //y se añadira al carrito
        if(this.props.objeto != prevProps.objeto){
            //metemos el objeto recivido el array auxiliar
            this._aux.push(this.props.objeto)
            //añadimos el precio del producto añadido a la variable pago auxiliar
            this._precioProducto = parseFloat(this._precioProducto) + parseFloat(this.props.objeto.precioTotal);
            //igualamos las variables auxiliares a las variables de estado
            this.setState({array:this._aux, aPagar:this._precioProducto})
        }        
    }

    componentWillUnmount(){
        this._isMountd = false;
    }
    
    //este evento se activa cuando borramos un producto
    handelClick = (event) => {
        //cogemos la variable pago auxiliar y le restamos el valor del producto seleccionado para borar
        this._precioProducto = parseFloat(this._precioProducto) - parseFloat(this._aux[event.target.dataset.posicion].precioTotal)
        //limitamos los decimales a 2
        this._precioProducto = this._precioProducto.toFixed(2);
        //borramos el producto que hemos seleccionado del array auxiliar
        this._aux.splice(event.target.dataset.posicion,1);
        //igualamos las variables auxiliares a la variables de estado
        this.setState({array:this._aux, aPagar:this._precioProducto})
    }

    //evento que se activara cuado el usuario quiera pagar
    handleSubmitPago = (event) => {
        event.preventDefault();
        console.log(event.target)
        let confirmacion = window.confirm('Estas seguro que deseas pasar a Pago?')

        if(confirmacion){
            if(this.state.aPagar > 0){
                const ventanaPago = this.props.ventanaPago;
                ventanaPago();
            }else{
                alert('Tienes que escoger productos');
            }            
        }
    }

    render(){
        return(
            <div className='divCarrito' style={{height:`${this.props.color}`}}>
                <div className='divPago'>
                    <p>Pago total: {this.state.aPagar}€</p>
                    <form onSubmit={this.handleSubmitPago}>
                        <input type='submit' value='Pagar' ></input>
                    </form>
                </div>
            {
                this.state.array
                ?
                this.state.array.map((data, key) => {
                    return(
                        <div key={key} className='prodCarrito'>
                            <p className='parrafo1'>Producto: {data.nombre}</p>
                            <p className='parrafo2'>Cantidad: {data.cantidad}</p>
                            <p className='parrafo2'>Precio: {data.precioTotal}€</p>
                            <input data-posicion={key} type='button' value='Borrar' onClick={this.handelClick}></input>
                        </div>
                    )
                })
                :
                <div>No hay nada en el carrito</div>
            }
                
            </div>
        )
    }
}

export default Carrito