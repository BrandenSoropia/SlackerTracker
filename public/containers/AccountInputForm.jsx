'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { asyncUpdateLeaderboard } from '../actions/actions'

export default class AccountInputForm extends Component {
	constructor(props) {
		super(props)
		this.createAccount = this.createAccount.bind(this)
	}

	createAccount() {
		$.ajax({
		  type: "POST",
		  url: 'http://localhost:3000/create-account',
		  data: {username: givenUsername, givenPassword: givenPassword},
		  success: function (data) {
		  	let givenUsername = $('input[name=username]').val()
				let givenPassword = $('input[name=password]').val()

				console.log(givenUsername)
				console.log(givenPassword)
		  	console.log('sent account info!')
		  }
		})
	};

	render() {
		return (
			<form className='account-input-form'>
				Username: <input type='text' name='username' ></input>
				Password: <input type='text' name='password' ></input>
				<button onClick={() => {this.createAccount()}}>Test</button>
				<p>{$('input[name=username]').val()}</p>
			</form>
		)
	}
}

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		createAccount: (username, password) => {
// 			store.dispatch(asyncUpdateLeaderboard(username, password))
// 		}
// 	}
// }

// export default connect(mapDispatchToProps)(AccountInputForm)

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
