'use strict'

import React from 'react'
import { expect } from 'chai'
import { shallow, mount, render } from 'enzyme'
import TableRow from '../components/TableRow'

const testUsername = 'tigur01'

const emptyTableRow = shallow (<TableRow />)
const usernameOnlyTableRow = mount (<TableRow username={testUsername} />)

describe ('Testing TableRow', function () {
	it('contains 3 <td>', function() {
    expect(emptyTableRow.find('td')).to.have.length(3)
  })

  it('contains username \"tigur01\"', function () {
  	expect(usernameOnlyTableRow.prop('username')).to.equal(testUsername)
  })
})