'use strict'

import React, { Component, PropTypes } from 'react'
import TableHeader from '../components/TableHeader'
import TableRow from '../components/TableRow'

 export default class Table extends Component {

	constructor (props) {
		super(props)
	}

	render () {
		let tableRowsContainingPlayerInfo = []
		
		if (tableRowsContainingPlayerInfo.length != 0) {
			for (let i = 1; i <= this.props.players.length; i++) {
				let { username, pID, highScore } = this.props.players[i - 1]
				tableRowsContainingPlayerInfo.push(<TableRow key={i} username={username} pID={pID} highScore={highScore} />)
			}	
		}
		
		return (
			<table className='table'>
				<TableHeader key={0} usernameColumn='username' pIDColumn='pID' highScoreColumn='High Score' />
				<tbody>
					{
						tableRowsContainingPlayerInfo
					}
				</tbody>
			</table>
		)
	}
}

Table.propTypes = {
	players: React.PropTypes.arrayOf(React.PropTypes.object)
} 

// export default Table