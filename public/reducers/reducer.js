'use strict'

import { combineReducers } from 'redux'
import { UPDATE_LEADERBOARD, INITIALIZE_LEADERBOARD, GET_LEADERBOARD, RECIEVE_LEADERBOARD } from '../actions/actions'

export default function tableHandler (state = [], action) {
	switch (action.type) {
		case INITIALIZE_LEADERBOARD:
			return Object.assign({}, state, { leaderboard: action.leaderboard })
		case UPDATE_LEADERBOARD:
			return Object.assign({}, state, { leaderboard: state.leaderboard.concat(action.leaderboard) })
		case GET_LEADERBOARD:
		case RECIEVE_LEADERBOARD:
			return Object.assign({}, state, {isFetching: action.isFetching})
		default:
			return state
	}
}

// const trackerApp = combineReducers({
// 	tableHandler
// })

// export default trackerApp
