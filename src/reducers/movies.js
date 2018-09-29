import { movies } from '../data.json'

const ADD = 'MOVIE_ADD'
const UPDATE_FIELD = 'MOVIE_UPDATE_FIELD'
const REMOVE = 'MOVIE_REMOVE'

const initialState = {
    data: movies
}

const emptyItem = {
    title: 'New movie'
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            let flatIds = state.data.reduce((accumulator, movie) => accumulator.concat(movie.id), []),
                maxId = Math.max.apply(null, flatIds)

            maxId = maxId < 0 ? 0 : maxId
            emptyItem.id = maxId + 1

            return {
                ...state,
                data: [emptyItem, ...state.data]
            }

        case REMOVE:
            return {
                ...state,
                data: state.data.filter(item =>
                    (item.id !== action.payload.id))
            }

        case UPDATE_FIELD:
            let { id, value, key } = action.payload

            value = value.trim()
            if (key === "genres") {
                value = value.split(',')
            }

            return {
                ...state,
                data: state.data.map(movie => movie.id === id ? { ...movie, [key]: value } : movie)
            }

        default:
            return state
    }
}