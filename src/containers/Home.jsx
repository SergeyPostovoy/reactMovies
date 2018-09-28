import React, { Component } from 'react'
import { connect } from 'react-redux'
import MovieGrid from '../components/MovieGrid'
import Footer from '../components/Footer'

class Home extends Component {
    render() {
        return <div><MovieGrid />
            <Footer /></div>
    }
}

const mapStateToProps = state => ({
    movies: state.movies
})

export default connect(mapStateToProps)(Home)