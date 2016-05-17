'use strict'

import React, { Component, PropTypes } from 'react'
import TableRow from '../components/TableRow'

 export default class Table extends Component {

 // 	static propTypes = {
	// 	players: React.PropTypes.arrayOf(React.PropTypes.object)
	// }

	constructor (props) {
		super(props)
	}

	// static defaultProps = {
	// 		players: [],
	// }



	render () {
		let tableRowsContainingPlayerInfo = []
		for (let i = 0; i < this.props.players.length; i++) {
			let { username, pID, highScore } = this.props.players[i]
			tableRowsContainingPlayerInfo.push(<TableRow key={i} username={username} pID={pID} highScore={highScore} />)
		}

		return (
			<table className='table'>
			{
				tableRowsContainingPlayerInfo
			}
			</table>
		)
	}
}

// export default Table