'use strict'

export const CREATE_ACCOUNT = 'CREATE_ACCOUNT'

export const GET_LEADERBOARD = 'GET_LEADERBOARD'
export const RECIEVE_LEADERBOARD = 'RECIEVE_LEADERBOARD'

export const INITIALIZE_LEADERBOARD = 'INITIALIZE_LEADERBOARD'
export const UPDATE_LEADERBOARD = 'UPDATE_LEADERBOARD'

export const DELETE_ACCOUNT = 'DELETE_ACCOUNT'


export function getLeaderboard() {
	return {
		type: GET_LEADERBOARD,
		isFetching: true
	}
}

export function recieveLeaderboard() {
	return {
		type: RECIEVE_LEADERBOARD,
		isFetching: false
	}
}

export function initializeLeaderboard ({ leaderboard = []}) {
	return {
		type: INITIALIZE_LEADERBOARD,
		leaderboard: leaderboard
	}
}

export function asyncDeleteAccount ({username, password}) {
	console.log(username)
	console.log(password)

	return (dispatch) => {
		let result = $.ajax ({
			method: 'POST',
			url: 'http://localhost:3000/find-user',
			data: {username, password},
			success: function (data) {
				if (data != null) {
					console.log('After searching for user here is the result')
					console.log(data)
					return dispatch(updateLeaderboard(data))
				} else {
						console.log('That account doesn\'t exist or wrong password!')
				}
			}
		})

		result.then (console.log('promise complete!'))
	}
}

// Original
export function updateLeaderboard ({ leaderboard }) {
	return {
		type: UPDATE_LEADERBOARD,
		leaderboard: leaderboard
	}
}

export function asyncUpdateLeaderboard () {
	return (dispatch) => {
		$.ajax({
			method: 'GET',
			url: 'http://localhost:3000/get-all-players',
			success: function(data) {
				console.log('Recieved all players from server')
				console.log(data)
				return dispatch(updateLeaderboard(data))
			}
		})
	}
}
