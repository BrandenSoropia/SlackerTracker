'use strict'

import { combineReducers } from 'redux'
import { UPDATE_LEADERBOARD, updateLeaderboard, INITIALIZE_LEADERBOARD, initializeLeaderboard } from '../actions/actions'

export default function tableHandler (state = [], action) {
	switch (action.type) {
		case INITIALIZE_LEADERBOARD:
			return Object.assign({}, state, { leaderboard: action.leaderboard })
		case UPDATE_LEADERBOARD:
			return Object.assign({}, state, { leaderboard: state.leaderboard.concat(action.leaderboard) })
		default:
			return state
	}
}

// const trackerApp = combineReducers({
// 	tableHandler
// })

// export default trackerApp
