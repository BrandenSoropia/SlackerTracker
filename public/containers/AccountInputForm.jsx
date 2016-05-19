'use strict'

import React, { Component } from 'react'
import AccountSubmitButton from './AccountSubmitButton'

export default class AccountInputForm extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<form className='account-input-form' action='/create-account'>
				Username: <input type='text' name='username'></input>
				Password: <input type='text' name='password'></input>
				<AccountSubmitButton buttonAction='Create Account' />
			</form>
		)
	}
}

// $('form').submit(function (event) {
// 	// Stop form from submitting normally
//   event.preventDefault()
//   console.log('Caught button press event!')
//   // Get some values from elements on the page:
//   var $form = $( this ),
//     givenUsername = $form.find( "input[name='username']" ).val(),
//     givenPassword = $form.find( "input[name='password']" ).val(),
//     url = $form.attr( "action" );


//     // var posting = $.post( url, { s: term } );
 
// })
