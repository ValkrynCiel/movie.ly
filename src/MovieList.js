import React, { Component } from 'react';
import Api from './Api';
import Movie from './Movie';
import {Row, Container} from 'reactstrap'

class MovieList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            movies: []
        }
    }

    async componentDidMount() {
        this.setState({
            movies: await Api.getMovies(),
            loading: false
        })
    }
    render() {
        return (
            <Container>
                {this.state.loading ? "loading..." :
                    <Row>
                    {this.state.movies.map(({ id, title, poster_path, overview, release_date }) =>
                        
                        <Movie key={id}
                               title={title}
                               overview={overview}
                               posterPath={poster_path}
                               releaseDate={release_date} />)}
                    </Row>
                }
            </Container>
        )
    }
}

export default MovieList;