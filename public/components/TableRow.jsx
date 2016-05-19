'use strict'

import React, { Component, PropTypes } from 'react'

export default class TableRow extends Component {
	constructor(props) {
		super(props)
	}

	render () {
		let { username, pid, highscore } = this.props
		return (
			<tr className='table-row'>
				<td>{username}</td>
				<td>{pid}</td>
				<td>{highscore}</td>
			</tr>
		)
	}
}

TableRow.propTypes = {
	username: React.PropTypes.string.isRequired,
	pid: React.PropTypes.number.isRequired,
	highscore: React.PropTypes.number.isRequired
}