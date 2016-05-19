'use strict'

import React, { Component } from 'react'

export default class AccountSubmitButton extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		let { buttonAction } = this.props
		return (
			<button className='account-submit-button' type="submit" value="Submit">{buttonAction}</button>
		)
	}
}
