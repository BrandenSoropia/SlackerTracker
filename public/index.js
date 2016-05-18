import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { connect } from 'react-redux'
import { updateLeaderboard } from './actions/actions'
import trackerApp from './reducers/reducer'
import Table from './containers/Table'

const onePlayer = [{username: 'tigur01', pID: 1, highScore: 5}]

// ReactDOM.render(
// 	<Table players={onePlayer} />,
// 	document.getElementById('container')
// )

// (dispatch) => {

// }

$.ajax({
	method: 'GET',
	url: 'http://localhost:3000/get-leaderboard',
	success: function(data) {
		console.log('Recieved form server')
		console.log(data)

		let initialState = []
		initialState.push(data.leaderboard)

		let store = createStore(trackerApp)

		console.log(store.getState())

		// const mapStateToProps = (state) => {
		// 	players: state.leaderboard
		// }
		store.dispatch(updateLeaderboard(data))

		// const table = connect(
		// 	mapStateToProps
		// )(Table)

		console.log(store.getState())

		ReactDOM.render(
			<Provider store={store}>
				<Table />
			</Provider>,
			document.getElementById('container')
		)

		// dispatch({type: 'UPDAYE_LEADERBPARD', data: data})
	}
})


// ReactDOM.render(
// 	<h1>Hello world!</h1>,
// 	document.getElementById('container')
// )