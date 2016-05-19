'use strict'

export const GET_LEADERBOARD = 'GET_LEADERBOARD'
export const RECIEVE_LEADERBOARD = 'RECIEVE_LEADERBOARD'

export const INITIALIZE_LEADERBOARD = 'INITIALIZE_LEADERBOARD'
export const UPDATE_LEADERBOARD = 'UPDATE_LEADERBOARD'

export function getLeaderboard() {
	return {
		isFetching: true
	}
}

export function recieveLeaderboard() {
	return {
		isFetching: false
	}
}

export function initializeLeaderboard ({ leaderboard = []}) {
	return {
		type: INITIALIZE_LEADERBOARD,
		leaderboard: leaderboard
	}
}

export function updateLeaderboard ({ leaderboard }) {
	return dispatch => {
		console.log('Getting Leaderboard from server')
		dispatch(getLeaderboard())
		return 
	}
}
