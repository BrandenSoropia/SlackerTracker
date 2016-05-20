import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import tableHandler from './reducers/reducer'
import { updateLeaderboard, initializeLeaderboard, asyncUpdateLeaderboard, asyncDeleteAccount } from './actions/actions'
import App from './containers/App'

// const onePlayer = { leaderboard: [{username: 'tigur01', pID: 0, highScore: 5}] }

// let store = createStore(tableHandler, onePlayer)
let store = createStore(tableHandler, applyMiddleware(thunk))

console.log(store.getState())

$.ajax({
	method: 'GET',
	url: 'http://localhost:3000/get-all-players',
	success: function(data) {
		// console.log('Recieved data from server')
		// console.log(data)

		store.dispatch(initializeLeaderboard(data))
		//
		// console.log(`Dispatched update leaderboard with all players from DB`)
		// console.log(store.getState())

		// console.log(`Testing Async`)
		// store.dispatch(asyncUpdateLeaderboard())
		// console.log(`Async state`)
		// console.log(store.getState())

		ReactDOM.render(
			<Provider store={store}>
				<App />
			</Provider>,
			document.getElementById('container')
		)
	}
})

// works
// console.log(`Testing Async update leaderboard`)
// 		store.dispatch(asyncUpdateLeaderboard())
// 		console.log(`Async state`)
// 		console.log(store.getState())


const TEST_USERNAME = 'testUser'
const TEST_PASSWORD = 'testPassword'
const TEST_USER_CREDENTIALS = {username: TEST_USERNAME, password: TEST_PASSWORD}
console.log(`Testing Async delete account`)
store.dispatch(asyncDeleteAccount(TEST_USER_CREDENTIALS))
