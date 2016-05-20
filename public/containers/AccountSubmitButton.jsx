'use strict'

import React, { Component } from 'react'

export default class AccountSubmitButton extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		let { buttonAction, buttonText } = this.props
		return (
			<button className='account-submit-button' onClick={buttonAction}>{buttonText}</button>
		)
	}
}
