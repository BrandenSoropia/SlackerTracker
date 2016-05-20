'use strict'

const MAX_LEADERBOARD_PLAYERS_TO_DISPLAY = 2

const express = require('express')
const app = express()
const pgp = require('pg-promise')()

var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

const PORT = 3000
const databaseConnection = 'postgres://localhost:5432/'

const db = pgp(databaseConnection)
const serverTimeRecorder = new Date()

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static('public'))

function countTotalPlayers () {
	db.one('SELECT COUNT(username) FROM player')
	.then (function (totalPlayers) {
		console.log(`Currently ${totalPlayers.count} users signed up`)
		return totalPlayers
	})
	.catch (function (error) {
		console.log(error)
	})
}

function displayNumPlayers (res, numPlayers) {
	db.any('SELECT username, pid, highscore FROM player ORDER BY highscore ASC LIMIT $1', [numPlayers])
		.then (function (allPlayersandHighscores) {
			// console.log('test')
			// console.log(allPlayersandHighscores)
			res.json({ leaderboard: allPlayersandHighscores})
		})
		.catch (function (error) {
			console.log(`Error: ${error}`)
		})
}

app.post('/test-body-parser', (req, res, err) => {
	console.log(req.body)
  res.json(req.body)
})

app.get('/get-all-players', (req, res, err) => {
	console.log('Get All Players')
	displayNumPlayers(res, countTotalPlayers())
})

app.get('/get-leaderboard', (req, res, err) => {
	console.log('Get Leaderboard')
	displayNumPlayers(res, MAX_LEADERBOARD_PLAYERS_TO_DISPLAY)
	// res.sendFile('/public/index.html')
})

app.post('/create-account', (req, res, err) => {
	console.log(req)
	// console.log('Create Account')
	// db.none('INSERT INTO player (pid, username, password) VALUES ((SELECT COUNT(username) FROM player), $1, $2)',
	// 	[req.query.username, req.query.password])
	// .then (function () {
	// 	console.log(`Created account for ${req.query.username}`)
	// 	displayNumPlayers(res, MAX_LEADERBOARD_PLAYERS_TO_DISPLAY)
	// })
	// .catch (function (error) {
	// 	console.log(error)
	// })
})

app.post('/find-user', (req, res, err) => {
	console.log('Find User')
	console.log(req.body)
	db.one('SELECT username, highscore FROM player WHERE username=$1', [req.body.username])
	.then (function (foundUserInfo) {
		res.json(foundUserInfo)
	})
	.catch (function (error) {
		res.json(null)
		console.log(error)
	})
})

app.post('/delete-user', (req, res, err) => {
	console.log('Delete User')
	db.none('DELETE FROM player WHERE username=$1 AND password=$2', [req.query.username, req.query.password])
	.then (function () {
		console.log(`Deleted user ${req.query.username}`)
		displayNumPlayers(res, MAX_LEADERBOARD_PLAYERS_TO_DISPLAY)
	})
	.catch (function (error) {
		console.log(error)
	})
})

app.post('/update-highscore', (req, res, err) => {
	console.log('Update Highscore')
	db.none('UPDATE player SET highscore=$1 WHERE username=$2', [req.query.newScore, req.query.username])
	.then (function () {
		console.log(`Updated ${req.query.username}\'s score to ${req.query.newScore}`)
		displayNumPlayers(res, MAX_LEADERBOARD_PLAYERS_TO_DISPLAY)
	})
	.catch (function (error) {
		console.log(error)
	})
})

app.listen(PORT, () => {
	console.log(`Connected to port ${PORT}`)
})
