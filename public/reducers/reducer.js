'use strict'

import { combineReducers } from 'redux'
import { UPDATE_LEADERBOARD, updateLeaderboard } from '../actions/actions'

function tableHandler (state = { leaderboard: [] }, action) {
	switch (action.type) {
		case UPDATE_LEADERBOARD:
			return Object.assign({}, state, action.leaderboard)
		default:
			return state
	}
}

const trackerApp = combineReducers({
	tableHandler
})

export default trackerApp
