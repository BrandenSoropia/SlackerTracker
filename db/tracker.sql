DROP DATABASE IF EXISTS tracker;
CREATE DATABASE tracker;

DROP SCHEMA IF EXISTS tracker CASCADE;
CREATE SCHEMA tracker;

DROP TABLE IF EXISTS player;

SET search_path TO player, public;

CREATE TABLE player (
	pid INTEGER NOT NULL,
	username VARCHAR(25) NOT NULL,
	password VARCHAR(25) NOT NULL,
	highscore INTEGER DEFAULT 0,
	lastplayed TIMESTAMP DEFAULT NULL,
	CHECK (pid >= 0),
	PRIMARY KEY (pid, username)
);

-- INSERT INTO player (pid, username, password) VALUES (0, 'tigur01', 'password');