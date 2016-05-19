'use strict'

import React, { Component, PropTypes } from 'react'
import TableHeader from '../components/TableHeader'
import TableRow from '../components/TableRow'

 export default class Table extends Component {

	constructor (props) {
		super(props)
	}

	render () {
		console.log('Rendering Table with props:')
		console.log(this.props)

		let tableRowsContainingPlayerInfo = []
		
		// if (tableRowsContainingPlayerInfo.length != 0) {
			for (let i = 1; i <= this.props.leaderboard.length; i++) {
				let { username, pid, highscore } = this.props.leaderboard[i - 1]
				tableRowsContainingPlayerInfo.push(<TableRow key={i} username={username} pid={pid} highscore={highscore} />)
			}	
		// }
		
		console.log('Rows to render')
		console.log(tableRowsContainingPlayerInfo)

		return (
			<table className='table'>
				<TableHeader key={0} usernameColumn='username' pIDColumn='pid' highScoreColumn='highscore' />
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
	leaderboard: React.PropTypes.arrayOf(React.PropTypes.object)
} 

// export default Table