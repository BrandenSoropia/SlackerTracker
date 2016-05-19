'use strict'

export const INITIALIZE_LEADERBOARD = 'INITIALIZE_LEADERBOARD'
export const UPDATE_LEADERBOARD = 'UPDATE_LEADERBOARD'

export function updateLeaderboard ({ leaderboard }) {
	return {
		type: UPDATE_LEADERBOARD,
		leaderboard: leaderboard
	}
}

export function initializeLeaderboard ({ leaderboard = []}) {
	return {
		type: INITIALIZE_LEADERBOARD,
		leaderboard: leaderboard
	}
}