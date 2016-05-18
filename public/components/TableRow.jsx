'use strict'

import React, { Component, PropTypes } from 'react'

export default class TableRow extends Component {
	constructor(props) {
		super(props)
	}

	render () {
		let { username, pID, highScore } = this.props
		return (
			<tr className='table-row'>
				<td>{username}</td>
				<td>{pID}</td>
				<td>{highScore}</td>
			</tr>
		)
	}
}

TableRow.propTypes = {
	username: React.PropTypes.string.isRequired,
	pID: React.PropTypes.number.isRequired,
	highScore: React.PropTypes.number.isRequired
}