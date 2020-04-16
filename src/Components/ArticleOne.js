import React from 'react'
//css
import '../Css/ArticleOne.css'

class ArticleOne extends React.Component{
    
    _isMounted = false;

    constructor(props){
        super(props);

        this.state = 
            {
                array:[],
                cantidad:'',
            }
    }

    componentDidMount(){
        this._isMounted = true;

        fetch('http://localhost:3001/api/allProduct',{method:'GET'})
        .then(data => data.json())
        .then(response => {
            console.log(response.data)
            this.setState({array:response.data})
        })
    }

    componentWillUnmount(){
        this._isMounted = false;
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if(!this.state.cantidad){
            alert('Escoja la cantiad')
        }
        else{

            let product = 
                {
                    id:event.target.dataset.id,
                    nombre:event.target.dataset.name,
                    cantidad:parseFloat(this.state.cantidad),
                    precioTotal:(parseFloat(this.state.cantidad) * parseFloat(event.target.dataset.price))
                }

                const pasarAlCarrito = this.props.pasarAlCarrito

                pasarAlCarrito(product);

            // localStorage.setItem(event.target.dataset.name, JSON.stringify(product))
            // console.log(JSON.parse(localStorage.getItem(event.target.dataset.name)))
            let input = event.target.getElementsByTagName('input');
            //lo igualamos a 0 una vez que tengamos el valor
            console.log(input[0].value = '')
            //vaciamos los vales una vez los hallamos conseguido
            this.setState({cantidad:'', quantity:''});
        }        
    }

    render(){
        return(
            <article className='articleOne'>
                <div className='divtitulo'>
                    <h2>Article One</h2>
                </div>

                <div className='divContenedorArticleOne'>
                {
                    this._isMounted && this.state.array
                    ?
                    this.state.array.map((data, key) => {
                        return(
                            <div key={key} className='divProducto'>
                                <img src={data.picture}></img>
                                <h3><strong>{data.name}</strong></h3>
                                <p><strong>Precio:</strong>{data.price}€</p>
                                <p>{data.description}</p>
                                <form className='divForm' onSubmit={this.handleSubmit} data-quantity={data.quantity} data-price={data.price} data-id={data._id} data-name={data.name}>
                                    <input type='number' min="0" max={data.quantity} onChange={(params) => {this.setState({cantidad:params.target.value})}}></input>
                                    <input type='submit' value='Añadir'></input>
                                </form>                                
                            </div>
                        )
                    })
                    :
                    <div></div>
                }
                </div>
            </article>
        )
    }
}

export default ArticleOne