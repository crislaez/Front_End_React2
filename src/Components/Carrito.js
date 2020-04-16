import React from 'react'
//css
import '../Css/Carrito.css'

class Carrito extends React.Component{
    
    _isMountd = false;
    _aux = [];

    constructor(props){
        super(props);
        this.state= 
            {
                array:[]
            };
    }

    componentDidMount(){
        this._isMountd = true;
    }

    componentDidUpdate(prevProps){
        // console.log(this.props.objeto)
        if(this.props.objeto != prevProps.objeto){
            this._aux.push(this.props.objeto)
            console.log(this._aux)
            this.setState({array:this._aux})
        }        
    }

    componentWillUnmount(){
        this._isMountd = false;
    }

    render(){
        return(
            <div className='divCarrito' style={{height:`${this.props.color}`}}>
            {
                this.state.array
                ?
                this.state.array.map((data, key) => {
                    return(
                        <div key={key} className='prodCarrito'>
                            <p>Producto: {data.nombre}</p>
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