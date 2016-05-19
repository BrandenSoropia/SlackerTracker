'use strict'

import React from 'react'
import { expect } from 'chai'
import { shallow, mount, render } from 'enzyme'
import AccountInputField from '../components/AccountInputField'

const inputField = shallow(<AccountInputField />)

describe('Testing Account Input Field', function () {
	it('contains a <form>', function () {
		expect(inputField.find('form')).to.have.length(1)
	})

	it('contains 2 <input>\'s', function (){
		expect(inputField.find('input')).to.have.length(2)
	})
})