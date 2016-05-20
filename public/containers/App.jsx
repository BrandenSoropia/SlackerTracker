'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import Table from './Table'
import AccountInputForm from './AccountInputForm'

class App extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		let { leaderboard } = this.props
		return (
			<div className='app'>
			  <Table leaderboard={leaderboard} />
			  <h1>IGNORE INPUT AREA, DOESN'T WORK</h1>
			  <AccountInputForm />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		leaderboard: state.leaderboard
	}
}

export default connect(
	mapStateToProps
)(App)
