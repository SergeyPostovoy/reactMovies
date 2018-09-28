
export const addMovie = (movie) => {
    return {
        type: "MOVIE_ADD",
        payload: { movie }
    }
}

export const updateMovieField = (e, movie) => {
    return {
        type: "MOVIE_UPDATE_FIELD",
        payload: {
            id: movie.id,
            key: e.target.dataset.key,
            value: e.target.value
        }
    }
}

export const removeMovie = (movie) => {
    return {
        type: "MOVIE_REMOVE",
        payload: { id: movie.id }
    }
}
