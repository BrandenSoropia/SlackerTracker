'use strict'

import React, { Component, PropTypes } from 'react'

export default class TableHeader extends Component {
	constructor (props) {
		super(props)
	}
	render () {
		let { usernameColumn, pIDColumn, highScoreColumn } = this.props
		return (
			<thead className='table-header'>
				<tr>
					<th>{usernameColumn}</th>
					<th>{pIDColumn}</th>
					<th>{highScoreColumn}</th>
				</tr>
			</thead>
		)
	}
}

TableHeader.propTypes = {
	usernameColumn: React.PropTypes.string.isRequired,
	pIDColumn: React.PropTypes.string.isRequired,
	highScoreColumn: React.PropTypes.string.isRequired
}