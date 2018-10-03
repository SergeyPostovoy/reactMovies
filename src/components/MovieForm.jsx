import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { updateMovieField } from '../actions/index'
import {
    Container, Row, Col, Form, FormGroup,
    Label, Button
} from 'reactstrap'

class MovieForm extends Component {
    getTitle() {
        let item = this.props.item
        let title = item.id ? [item.title, item.director, item.year].join(", ") : "New movie item",
            mode = item.id ? 'edit' : 'adding'

        return <span>{title} <span className="mode">{mode}</span></span>
    }

    render() {
        const item = this.props.item
        return <Container className="layout" cols={12} width={1200}>
            <Row className="updateDialog">
                <Col sm="12" md="6">
                    <Form >
                        <h3>{this.getTitle()}</h3>
                        <FormGroup className="cinemaRedactGroup"><Label for="inputTitle">title</Label> <input onChange={e => this.props.updateMovieField(e, item)} data-key="title" name="title" id="inputTitle" defaultValue={item.title} /></FormGroup>
                        <FormGroup className="cinemaRedactGroup"><Label for="inputActors">actors</Label> <input onChange={e => this.props.updateMovieField(e, item)} data-key="actors" name="actors" id="inputActors" defaultValue={item.actors} /></FormGroup>
                        <FormGroup className="cinemaRedactGroup"><Label for="inputDirector">director</Label> <input onChange={e => this.props.updateMovieField(e, item)} data-key="director" name="director" id="inputDirector" defaultValue={item.director} /></FormGroup>
                        <FormGroup className="cinemaRedactGroup"><Label for="inputGenres">genres</Label> <input onChange={e => this.props.updateMovieField(e, item)} data-key="genres" name="genres" id="inputGenres" defaultValue={item.genres} /></FormGroup>
                        <FormGroup className="cinemaRedactGroup"><Label for="inputYear">year</Label> <input onChange={e => this.props.updateMovieField(e, item)} data-key="year" name="year" id="inputYear" defaultValue={item.year} /> </FormGroup>
                        <FormGroup className="cinemaRedactGroup"><Label for="inputRuntime">runtime</Label> <input onChange={e => this.props.updateMovieField(e, item)} data-key="runtime" name="runtime" id="inputRuntime" defaultValue={item.runtime} /></FormGroup>
                        <FormGroup className="cinemaRedactGroup"><Label for="inputPlot">plot</Label> <textarea onChange={e => this.props.updateMovieField(e, item)} data-key="plot" name="plot" id="inputPlot" defaultValue={item.plot} /></FormGroup>
                        <FormGroup className="cinemaRedactGroup"><Label for="inputPosterUrl">posterUrl</Label> <textarea onChange={e => this.props.updateMovieField(e, item)} data-key="posterUrl" name="posterUrl" id="inputPosterUrl" defaultValue={item.posterUrl} /></FormGroup>
                        <FormGroup className="cinemaRedactGroup">
                            <Link to={'/'}>
                                <Button className="cancel">Back</Button>
                            </Link>
                        </FormGroup>
                    </Form>
                </Col>
                <Col sm="12" md="6" className="logo" style={{ backgroundImage: `url(${item.posterUrl}` }}></Col>
            </Row>
        </Container>
    }
}

const mapStateToProps = state => ({
    movies: state.movies.data
})

const mapDispatchToProps = dispatch => bindActionCreators({
    updateMovieField
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MovieForm)