'use strict'

export const UPDATE_LEADERBOARD = 'UPDATE_LEADERBOARD'

export function updateLeaderboard ({ leaderboard }) {
	return {
		type: UPDATE_LEADERBOARD,
		leaderboard: leaderboard
	}
}
