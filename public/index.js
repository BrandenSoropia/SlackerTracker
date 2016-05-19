import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import tableHandler from './reducers/reducer'
import { updateLeaderboard, initializeLeaderboard } from './actions/actions'
import App from './containers/App'

// const onePlayer = { leaderboard: [{username: 'tigur01', pID: 0, highScore: 5}] }

// let store = createStore(tableHandler, onePlayer)
let store = createStore(tableHandler, applyMiddleware(thunk))

console.log(store.getState())

$.ajax({
	method: 'GET',
	url: 'http://localhost:3000/get-all-players',
	success: function(data) {
		console.log('Recieved data from server')
		console.log(data)

		store.dispatch(initializeLeaderboard(data))

		console.log(`Dispatched update leaderboard with top 2 players from DB`)
		console.log(store.getState())

		ReactDOM.render(
			<Provider store={store}>
				<App />
			</Provider>,
			document.getElementById('container')
		)
	}
})
