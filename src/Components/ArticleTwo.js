import React from 'react'
//css
import '../Css/ArticleTwo.css'

class ArticleTwo extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <article className='articleTwo'>
                <div className='divtitulo'>
                    <h2>Article Two</h2>
                </div>
            </article>
        )
    }
}

export default ArticleTwo