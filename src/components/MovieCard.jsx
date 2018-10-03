import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
    Card, CardBody, CardTitle, Button, CardHeader,
    CardSubtitle, CardText, CardFooter, ButtonGroup
} from 'reactstrap'

import { removeMovie } from '../actions/index'

class MovieCard extends Component {
    edit(id) {
        window.location.replace('/edit/' + id)
    }
    remove(id) {
        window.location.replace('/remove/' + id)
    }
    render() {
        const item = this.props.item

        if (Array.isArray(item.genres)) {
            item.genres = item.genres.join(' / ')
        }

        return <Card className="movie">
            <CardHeader>
                <CardTitle>{item.title}
                    <div className="year">{item.year}</div>
                </CardTitle>
                <CardSubtitle>
                    <div className="genres">{item.genres}</div>
                </CardSubtitle>
            </CardHeader>
            <div className="noimage">
                <div className="logo" style={{ backgroundImage: `url(${item.posterUrl}` }} />
            </div>
            <CardBody className="about">
                <CardText className="actors">{item.actors}</CardText>
                <CardText className="plot">{item.plot}</CardText>
            </CardBody>
            <CardFooter>
                <div className="runtime">{item.runtime}</div>
                <div className="director">{item.director}</div>
                <center><ButtonGroup size="sm">
                    <Link className="remove btn btn-primary" to={`/edit/${item.id}`}>Open</Link>
                    <Button className="remove" color="danger" onClick={() => this.props.removeMovie(item)}>Remove</Button>
                </ButtonGroup>
                </center>
            </CardFooter>
        </Card>
    }
}

const mapStateToProps = state => ({
    movies: state.movies.data
})

const mapDispatchToProps = dispatch => bindActionCreators({
    removeMovie
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard)