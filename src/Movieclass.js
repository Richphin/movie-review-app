import React, { Component } from 'react'


export default class Movieclass extends Component {
    constructor(props){
        super(props)
        this.state={movies:[]}
        
    }
    

    componentDidMount(){
        fetch(" https://api.nytimes.com/svc/movies/v2/reviews/picks.json?api-key=7iGouJdajO631S5zAMP6ew6bJXoGGBr5 ")
        
        .then((respond)=>{
            return respond.json()
        })
        .then((jsonData)=>{
            console.log(jsonData)
            this.setState({movies:jsonData.results})
        })
        .catch(err => console.log(err))
    }
    render() {
        return (
            <div>
                {this.state.movies.map((movies)=>{
                    return(
                        <div className="container">
                            <p><strong>Display title :</strong>{movies.display_title}</p>
                            <p><strong>Headline :</strong>{movies.headline}</p>
                            <p><strong>Critics pick :</strong>{movies.critics_pick}</p>
                            <p><strong>Byline :</strong>{movies.byline}</p>
                            <hr/>
                        </div>
                    )
                })}
            </div>
        )
    }
}

