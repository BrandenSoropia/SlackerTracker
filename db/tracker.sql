DROP DATABASE IF EXISTS tracker;
CREATE DATABASE tracker;

DROP SCHEMA IF EXISTS tracker CASCADE;
CREATE SCHEMA tracker;

DROP TABLE IF EXISTS player;

SET search_path TO player, public;

CREATE TABLE player (
	pID INTEGER NOT NULL,
	username VARCHAR(25) NOT NULL,
	password VARCHAR(25) NOT NULL,
	highScore INTEGER DEFAULT 0,
	lastPlayed TIMESTAMP DEFAULT NULL,
	CHECK (pID >= 0),
	PRIMARY KEY (pID, username)
);

INSERT INTO player (pID, username, password) VALUES (0, 'tigur01', 'password');