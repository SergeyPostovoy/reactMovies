import React, { Component } from 'react'
import { connect } from 'react-redux'
import MovieForm from '../components/MovieForm'

class Edit extends Component {
  render() {
    let props = this.props,
      id = Number(props.match.params.id),
      item = props.movies.find(item => (item.id === id))

    return <MovieForm item={item} />
  }
}

const mapStateToProps = state => ({
  movies: state.movies.data
})

export default connect(mapStateToProps)(Edit)