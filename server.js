'use strict'

const express = require('express')
const app = express() 
const pgp = require('pg-promise')()

const PORT = 3000 
const databaseConnection = 'postgres://localhost:5432/'

const db = pgp(databaseConnection)
const serverTimeRecorder = new Date()

app.use(express.static('public'))

function displayAllPlayers (res) {
	db.any('SELECT username, highScore FROM player')
		.then (function (allPlayersandHighscores) {
			res.json(allPlayersandHighscores)
		})
		.catch (function (error) {
			console.log(`Error: ${error}`)
		})
}

app.get('/', (req, res, err) => {
	displayAllPlayers(res)
})

app.post('/', (req, res, err) => {
	db.none('INSERT INTO player (pID, username, password) VALUES ((SELECT COUNT(username) FROM player), $1, $2)',
		[req.query.username, req.query.password])
	.then (function () {
		console.log(`Created account for ${req.query.username}`)
		displayAllPlayers(res)
	})
	.catch (function (error) {
		console.log(error)
	})
})

app.post('/find-user', (req, res, err) => {
	db.one('SELECT username, highScore FROM player WHERE username=$1', [req.query.username])
	.then (function (foundUserInfo) {
		res.json(foundUserInfo)
	})
	.catch (function (error) {
		console.log(error)
	})
})

app.post('/delete-user', (req, res, err) => {
	db.none('DELETE FROM player WHERE username=$1 AND password=$2', [req.query.username, req.query.password])
	.then (function () {
		console.log(`Deleted user ${req.query.username}`)
		displayAllPlayers(res)
	})
	.catch (function (error) {
		console.log(error)
	})
})

app.listen(PORT, () => {
	console.log(`Connected to port ${PORT}`)
})