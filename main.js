/*
  project 7.18 Team 2 Hackathon
  /***********************
   notes:
   Team 2
    Steve Benedict
    Gerald Blackmon
    Jonathan Gallo
    Randy Dang
*/
$(document).ready(initializeApp);
/**  Define all global variables here.  **/
const player = {name: null, score: 0};
let totalPlayersObj = {};
let clueImg;
let guessImg;
const clarifai = new Clarifai.App({apiKey: 'f96e9dd06030485a9595af374d3e96da'});
let canvas;
let ctx;
const savedGameImages = {guessImg: null, clueImg: null};
let leaderboardFirebaseDB;
/***************************************************************************************************
* description: initializes the application, including adding click handlers and pulling in any data
* from the server
* @params: none
* @returns: none
*/
function initializeApp(){
	canvas = $('#imageCanvas');
	instructionsPage();
	leaderboardFirebaseDB = new GenericFBModel('potato1nuget2flower', leaderBoardUpdated);
}
