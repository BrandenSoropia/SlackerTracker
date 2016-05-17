import React from 'react'
import ReactDOM from 'react-dom'
import Table from './containers/Table'

const onePlayer = [{username: 'tigur01', pID: 1, highScore: 5}]

ReactDOM.render(
	<Table players={onePlayer} />,
	document.getElementById('container')
)

// ReactDOM.render(
// 	<h1>Hello world!</h1>,
// 	document.getElementById('container')
// )