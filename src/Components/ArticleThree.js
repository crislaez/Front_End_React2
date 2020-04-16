import React from 'react'
//css
import '../Css/ArticleThree.css'

class ArticleThree extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <article className='articleThree'>
                <div className='divtitulo'>
                    <h2>Article Three</h2>
                </div>
            </article>
        )
    }
}
 export default ArticleThree