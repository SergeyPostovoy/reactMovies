import React, { Component } from 'react'
import { connect } from 'react-redux'
import MovieCard from './MovieCard'

import {
    Container, Row, Col
} from 'reactstrap'

class MovieGrid extends Component {
    render() {
        return <div className="grid layout">
            <Container className="layout" cols={12} width={1200}>
                <Row>
                    {
                        this.props.movies.map((item, i) => {
                            return (
                                <Col xs="12" sm="6" md="4" lg="3" key={item.id}>
                                    <MovieCard item={item} />
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    }
}

const mapStateToProps = state => {
    return { movies: state.movies.data }
}

export default connect(mapStateToProps)(MovieGrid)