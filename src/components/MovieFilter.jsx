import React, { Component } from 'react'
import {
    InputGroup, Button
} from 'reactstrap'
// import {
//     Input, InputGroupAddon,
// } from 'reactstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addMovie } from '../actions/index'

class MovieFilter extends Component {
    render() {
        return <div className="movies-filter"> <InputGroup >
            {/* 
        Планировал сделать фильтр, но и так уже затянул со сроками, поэтому пока закоментируем это здесь %)
        <InputGroupAddon addonType="prepend">Movies Filter:</InputGroupAddon>
        <Input placeholder="" /> */}
            <Button onClick={() => this.props.addMovie()} color="primary">New item</Button>
        </InputGroup></div>
    }
}

const mapStateToProps = state => ({
    movies: state.movies.data
})

const mapDispatchToProps = dispatch => bindActionCreators({
    addMovie
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MovieFilter)