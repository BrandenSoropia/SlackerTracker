'use strict'

import React from 'react'
import { expect } from 'chai'
import { shallow, mount, render } from 'enzyme'
import TableRow from '../components/TableRow'
import Table from '../containers/Table'

const onePlayer = [{username: 'tigur01', pID: 1, highScore: 5}]
const manyPlayer = [{username: 'tigur01', pID: 1, highScore: 5}, {username: 'xX_Blazin_Xx', pID: 69, highScore: 420}, {username: 'Fuck', pID: 0, highScore: 90000}]

const emptyTable = shallow (<Table />)
const onePlayerTable = mount (<Table players={onePlayer} />)
const manyPlayerTable = mount (<Table players={manyPlayer} />)

describe('Testing Table', function () {
	it('contains no TableRows when empty', function () {
		expect(emptyTable.find(TableRow)).to.have.length(0)
	})

	it('contains 1 row', function () {
		expect(onePlayerTable.find(TableRow)).to.have.length(1)
	})

	it('contains 3 rows', function () {
		expect(manyPlayerTable.find(TableRow)).to.have.length(3)
	})
})