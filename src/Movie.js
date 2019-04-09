import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Col
} from 'reactstrap';

const IMAGE_URL = "https://image.tmdb.org/t/p/w300";

class Movie extends Component {

    render() {
        return (
            <Col sm="4">
                <Card>
                    <CardImg top width="100%"
                        src={`${IMAGE_URL}${this.props.posterPath}`}
                        alt={this.props.title} />
                    <CardBody>
                        <CardTitle>{this.props.title}</CardTitle>
                        <CardSubtitle>Released: {this.props.releaseDate}</CardSubtitle>
                        <CardText>{this.props.overview}</CardText>
                    </CardBody>
                </Card>
            </Col>
        )
    }
}

export default Movie;
