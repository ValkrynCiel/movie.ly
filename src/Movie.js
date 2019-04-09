import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Col, Container, Button, Row
} from 'reactstrap';

const IMAGE_URL = "https://image.tmdb.org/t/p/w300";

class Movie extends Component {

    render() {
        return (
            <Col sm="4">
                <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                    <CardImg top width="100%"
                        src={`${IMAGE_URL}${this.props.posterPath}`}
                        alt={this.props.title} />
                    <CardBody>
                        <CardTitle>{this.props.title}</CardTitle>
                        <CardSubtitle>Released: {this.props.releaseDate}</CardSubtitle>
                        <CardText>{this.props.overview}</CardText>

                        <Button block color="success">Watched</Button>
                        <Button block>Want to Watch</Button>
                        <Button block>Review</Button>
                    </CardBody>
                </Card>
            </Col>
        )
    }
}

export default Movie;
