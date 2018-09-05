/*
Hackathon project involving the combination of different data sources into an application or game

Requirements
Combine at least 4 external resources via AJAX requests and present their information in an application
Must be documented loosely on JSDOC standards
Must be issue-managed via meistertask
share the meistertask with daniel.paschal@learningfuze.com
name your project 7.18 Team [your team number] Hackathon

Judging Criteria
Appeal : is it visually appealing / well put together
Code Quality : is the code properly formatted, are variables and functions well defined and documented
Presentation : How well is it presented during the unveiling session
Task / Issue Management : How well was the development process documented / controlled. Were there well-defined issues, milestones, and project management
Innovative / Transformative : Did the project do something new and exciting? Was it bold and tried to do things that haven't been done much. Did it combine the data sources together in a way that was more useful than either source by itself
Ease of Use / Understanding : Was it easy to use the application / game, or if it was more complex, was the application or game able to provide you with tutorials or instructions that made understanding it a breeze.

*****     7:00pm Thursday, September 6th, 2018    ******
*/

$(document).ready(initializeApp);

/**  Define all global variables here.  **/
const player = {};
let clueImg = {};
let guessImg;
const clarifai = new Clarifai.App({apiKey: '51996ceba79e4ddb90fe027b1cc20be4'});

let canvas;
let ctx;






/***********************
notes:
Team 2
Steve Benedict
Gerald Blackmon
Jonathan Gallo
Randy Dang

/***************************************************************************************************
* description: initializes the application, including adding click handlers and pulling in any data from the server, in later versions will...
* @params: none
* @returns: none

*/
function initializeApp(){
	
	canvas = $('#imageCanvas');
	ctx = canvas[0].getContext('2d');
	addEventHandlers();




}

/***************************************************************************************************
* description: addClickHandlers for start button on plater star page, button for submit guess img, button to open leaderboard, button to go back to main page
* @params: none
* @returns: none
*
*/
function addEventHandlers(){
  submitButtonHandler();




}
/****************************************************************************************************
* description: dom create get player start page, calls instructions Modal
 * @param: none
 * @return: none
 */
function getPlayerModal(){





}
/****************************************************************************************************
* description:
 * @param:
 * @return:
 */
function playerModalButtonResponse(){
  instructionsModal();




}
/****************************************************************************************************
* description:
 * @param: img
 * @return: dataObj
 */
function getImageDataFromWatson(img){





}
/****************************************************************************************************
* description:
 * @param: clueObj
 * @return: none
 */
function createCluesOnDom(clueObj){  
	let newCluesContainer = $('<div>', {
		class: 'cluesPage form-group'
	});
	let newInstructions = $('<h3>', {
		'class': 'instructions form-group',
		'text': 'Use the clues below to find an item. Once you have located it, take a photo of it for upload.',
	});
	let newClues = $('<div>', {
		'class': 'clues form-group'
	});
	let newUl = $('<ul>');
	let newLi1 = $('<li>', {
		'text': 'This is currently filler text FIXME'
	});
	let newFileForm = $('<div>', {
		'class': 'form-group'
	});
	let newLabel = $('<label>', {
		'class': 'control-label',
		'for': 'uploadFile',
		'text': 'Select your file here: '
	});
	let newInput = $('<input>', {
		'class': 'form-control',
		'type': 'file',
		'id': 'uploadFile',
		'name': 'uploadFile'
	});
	let newButtonForm = $('<div>', {
		'class': 'form-group'
	});
	let newUploadButton = $('<button>', {
		'type': 'button',
		'class': 'upload btn btn-default',
		'text': 'Upload'
	});
	let newLeaderBoardButton = $('<button>', {
		'type': 'button',
		'class': 'leaderBoard btn btn-info',
		'text': 'Leader Board'
	});




	newUl.append(newLi1);
	newFileForm.append(newLabel, newInput);
	newButtonForm.append(newUploadButton, newLeaderBoardButton);
	newClues.append(newUl);
	newCluesContainer.append(newInstructions, newClues, newFileForm, newButtonForm);
	$('.container').append(newCluesContainer);
	let imageLoader = $('#uploadFile');
	imageLoader.change(handleImage);

}
/****************************************************************************************************
* description: dom create instructions for game and allows time to send and receive data from servers, click to close, calls getImageDataFromWatson
 * @param:
 * @return:
 */

function instructionsPage(){  
	let newLandingPageContainer = $('<div>', {
		'class': 'landingPage form-group'
	});
	let newInstructions = $('<h4>', {
		text: `This is a image based scavenger hunt game. IBM's AI, Watson, will pick an random image from Flickr's database, and evaluate the image. 
				You will see the evaluation from Watson, and then you must send Watson a picture that you believe best represents his initial evaluation.
				You will receive points, depending on how similar your image evaluation is to the original image evaluation. Good luck on the hunt!`,
		class: 'instructions form-group'
	});
	let newPlayerForm = $('<div>', {
		'class': 'player form-group'
	});
	let newLabel = $('<label>', {
		'class': 'control-label',
		'for': 'playerName',
		'text': 'Enter your name: '
	});
	let newInput = $('<input>', {
		'class': 'form-control',
		'type': 'text',
		'name': 'playerName'
	});
	let newButtonForm = $('<div>', {
		'class': 'form-group'
	});
	let newGoBtn = $('<button>', {
		'type': 'button',
		'class': 'goBtn btn btn-default',
		'text': 'Go!'
	});
	let newLeaderBoardButton = $('<button>', {
		'type': 'button',
		'class': 'leaderBoard btn btn-info',
		'text': 'Leader Board'
	});
	newPlayerForm.append(newLabel, newInput);
	newButtonForm.append(newGoBtn, newLeaderBoardButton);
	newLandingPageContainer.append(newInstructions, newPlayerForm, newButtonForm);
	$('.container').append(newLandingPageContainer);

  getImageDataFromWatson();    

}
/****************************************************************************************************
* description:
 * @param: none
 * @return: none
 */
function instructionsModalButtonResponse(){
  getImageDataFromWatson();




}
/****************************************************************************************************
* description:
 * @param: event
 * @return: none
 */
function submitButtonHandler(event){
  getImageDataFromWatson();




}
/****************************************************************************************************
* description: for in loop, compare keys and values gives points
 * @param: clueImgObj and guessImgObj
 * @return:
 */
function compareClueImgToGuessImg(clueImgObj, guessImgObj){





}
/****************************************************************************************************
* description:
 * @param: none
 * @return: none
 */
function getResultsPage(){
	let newResultsPage = $('<div>', {
		'class': 'resultsPage'
	});
	let firstRow = $('<div>', {
		'class': 'row'
	});
	let clueCol = $('<div>', {
		'class': 'col-sm-6'
	});
	let clueThumbnail = $('<div>', {
		'class':'thumbnail'
	});
	let clueImg = $('<img>', {
		'src': 'clue.jpgFIXME',
		'alt': 'your clue'
	});
	let clueCaption = $('<div>', {
		'class': 'caption'
	});
	let cluePara = $('<p>', {
		'text': 'This was your clue...'
	});
	let userCol = $('<div>', {
		'class': 'col-sm-6'
	});
	let userThumbnail = $('<div>', {
		'class':'thumbnail'
	});
	let userImg = $('<img>', {
		'src': 'found.jpgFIXME',
		'alt': 'you found'
	});
	let userCaption = $('<div>', {
		'class': 'caption'
	});
	let userPara = $('<p>', {
		'text': 'This is what you found...'
	});
	let secondRow = $('<div>', {
		'class': 'row'
	});
	let buttonCol = $('<div>', {
		'class': 'col-sm-12'
	});
	let getClueButton = $('<button>', {
		'type': 'button',
		'class': 'getClue btn btn-default',
		'text': 'Get New Clue'
	});
	let newLeaderBoardButton = $('<button>', {
		'type': 'button',
		'class': 'leaderBoard btn btn-info',
		'text': 'Leader Board'
	});

	clueCaption.append(cluePara)
	clueThumbnail.append(clueImg, clueCaption);
	clueCol.append(clueThumbnail);
	userCaption.append(userPara)
	userThumbnail.append(userImg, userCaption);
	userCol.append(userThumbnail);
	firstRow.append(clueCol, userCol);
	buttonCol.append(getClueButton, newLeaderBoardButton);
	secondRow.append(buttonCol);
	newResultsPage.append(firstRow, secondRow);
	$('.container').append(newResultsPage);


}
/****************************************************************************************************
* description:
 * @param: none
 * @return: none
 */
function resultsModalButtonHandler(){
  getImageDataFromWatson();




}
/****************************************************************************************************
* description:
 * @param: none
 * @return: Clue Image
 */
function getRandomImageFromFlickr(){
  const apiKey = "2bcd2e195e7ea98f459f7bd6bdde6a29";
  let searchKeyWordList = ["dog", "cat", "platypus", "micky_mouse", "disneyland"];
  let randomKeyWord = searchKeyWordList[Math.floor(Math.random() * searchKeyWordList.length + 1)]

  const flickrConfig = {
    url: `https://api.flickr.com/services/rest?method=flickr.photos.search&api_key=${apiKey}&format=json&nojsoncallback=1&text=${randomKeyWord}&per_page=5`,
    success: result => {
      let searchResults = result.photos.photo;
      let randomPhoto = searchResults[Math.floor(Math.random() * searchResults.length + 1)]
      console.log(randomPhoto);

      let flickrImgURL = `https://farm${randomPhoto.farm}.staticflickr.com/${randomPhoto.server}/${randomPhoto.id}_${randomPhoto.secret}.jpg`

      console.log(flickrImgURL);
    }
  }
  $.ajax(flickrConfig);
}
/****************************************************************************************************
* description:
 * @param:
 * @return:
 */
function getLeaderBoardPage(){
	let newLeaderBoardPage = $('<div>', {
		'class': 'leaderBoard'
	});
	let firstRow = $('<div>', {
		'class': 'row'
	});
	let nameH3 = $('<h3>', {
		'class': 'col-xs-6',
		'text': 'Name'
	});
	let statsH3 = $('<h3>', {
		'class': 'col-xs-6',
		'text': 'Stats'
	});
	let buttonRow = $('<div>', {
		'class': 'row'
	});
	let buttonCol = $('<div>', {
		'class': 'col-xs-12'
	})
	let getClueButton = $('<button>', {
		'type': 'button',
		'class': 'getClue btn btn-default',
		'text': 'Get New Clue'
	});

	buttonCol.append(getClueButton);
	buttonRow.append(buttonCol);
	firstRow.append(nameH3, statsH3);
	newLeaderBoardPage.append(firstRow);
	newLeaderBoardPage.append(addPlayerToLeaderBoard({name: 'John Doe', score: '78%'}));
	newLeaderBoardPage.append(addPlayerToLeaderBoard({name: 'Saul Goodman', score: '88%'}));
	newLeaderBoardPage.append(addPlayerToLeaderBoard({name: 'Sally Dogood', score: '99%'}));
	newLeaderBoardPage.append(buttonRow);
	$('.container').append(newLeaderBoardPage)
}
/****************************************************************************************************
* description:
 * @param:
 * @return:
 */
function updatePlayerScore(){





}
/****************************************************************************************************
* description:
 * @param: none
 * @return: none
 */
function waitingModal(){
  getTrumpQuote();




}
/****************************************************************************************************
* description:
 * @param: none
 * @return: trumpQuote
 */
function getTrumpQuote(){





}
/****************************************************************************************************
* description:
 * @param:
 * @return:
 */
function sendDataToFirebase(){





}
/****************************************************************************************************
* description:
 * @param:
 * @return:
 */
function receiveDataFromFirebase(){





}
/****************************************************************************************************
* description:
 * @param: none
 * @return: img base64
 */
function handleImage(){

	let img;
	let reader = new FileReader();
	reader.onload = function(event){
		img = new Image();
		img.src = event.target.result;
		let clarifaiBase64Obj = {'base64': img.src.substr( ( img.src.indexOf('4')+2 ) )}
		guessImg = sendToClarifai(clarifaiBase64Obj);
	}
	reader.readAsDataURL(event.target.files[0]);
}
/****************************************************************************************************
* description:
 * @param: compressed Image
 * @return: image
 */
function decompressImageOnCanvas(){



}
/****************************************************************************************************
* description:
 * @param:
 * @return:
 */
function addPlayerToLeaderBoard(playerObj){  
	let newRow = $('<div>', {
		'class': 'row'
	});
	let newPlayerName = $('<div>', {
		'class': 'col-xs-6',
		'text': playerObj.name  
	});
	let newPlayerScore = $('<div>', {
		'class': 'col-xs-6',
		'text': playerObj.score
	});
	newRow.append(newPlayerName, newPlayerScore);
	return newRow
}
/****************************************************************************************************
* description:
 * @param:
 * @return:
 */
// function (){  
   
  




// }
/****************************************************************************************************/
