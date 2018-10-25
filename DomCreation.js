
/****************************************************************************************************
 * description: dom create instructions for game and allows time to send and receive data from servers,
 * click to close
 * @param:none
 * @return:none
 */

function createLandingPage(){
	let newLandingPageContainer = $('<div>', {
		'class': 'landingPage form-group'
	});
	let newInstructions = $('<h4>', {
		text: `Eye Spy is an image-based scavenger hunt game. A random image is chosen and evaluated.
				Clues are given to you based on this information. You must find something that matches those clues,
				take a picture and upload it for evaluation. You receive points, depending on how similar your image
				is to the original. Good luck on your hunt!`,
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
		        'class': 'goBtn btn btn-default col-xs-4 col-xs-push-1 col-sm-3 col-sm-push-2 col-md-3 col-md-push-2',
		        'text': 'Go!',
		        'on': {
					'click': () => {
						let $nameInput = $('.landingPage input');
						let playerName = $nameInput.val();
						let playerNameRegEx = /^[a-zA-Z\-'0-9]{2,15}$/;
						if(!playerNameRegEx.test(playerName)){
							let errorTitle = 'Error: Name Input';
							let errorMsgs = [`"${playerName}" is not a valid user name. Use up to 15 letters and/or numbers only.`];
							$nameInput.val('');
							showErrorModal(errorTitle, errorMsgs);
							return;
						}
		            	addPlayerToGame(playerName);
						emptyContainer();
		        	}
				}
	});
	let newLeaderBoardButton = $('<button>', {
		'type': 'button',
		'class': 'leaderBoard btn btn-info col-xs-4 col-xs-push-3 col-sm-3 col-sm-push-4 col-md-3 col-md-push-4',
		'text': 'Leader Board',
		'on': {
			'click': leaderboardButtonHandler
		}
	});
	newPlayerForm.append(newLabel, newInput);
	newButtonForm.append(newGoBtn, newLeaderBoardButton);
	newLandingPageContainer.append(newInstructions, newPlayerForm, newButtonForm);
	$('.container').append(newLandingPageContainer);
}
/****************************************************************************************************
* description: creates the clue page
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
	//let newUl = $('<ul>');
	let newH4 = $('<h4>', {
		'text': 'Here are your clues:'
	});
    let newOl = $('<ol>');
	let newFileForm = $('<div>', {
		'class': 'form-group col-xs-12 col-md-6 col-md-push-3'
	});
	let newLabel = $('<label>', {
		'class': 'control-label col-xs-12',
		'for': 'uploadFile',
		'text': 'Select your file here: '
	});
	let newInput = $('<input>', {
		'class': 'form-control col-xs-4 col-md-1 col-lg-3',
		'type': 'file',
		'id': 'uploadFile',
		'name': 'uploadFile',
		'accept': 'image/x-png,image/gif,image/jpeg'
	});
	let newButtonForm = $('<div>', {
		'class': 'form-group col-md-12'
	});
	let newSkipButton = $('<button>', {
		'type': 'button',
		'class': 'skip btn btn-default col-xs-12 col-sm-5 col-md-4 col-md-push-2',
		'text': 'Skip Clue',
		'on': {
			'click': skipButtonHandler
		}
	});
	let newLeaderBoardButton = $('<button>', {
		'type': 'button',
		'class': 'leaderBoard btn btn-info col-xs-12 col-sm-5 col-sm-push-1 col-md-4 col-md-push-2',
		'text': 'Leader Board',
		'on': {
			'click': leaderboardButtonHandler
		}
	});
	for(var i = 0; i < 5; i++) {
		newOl.append($('<li>', {
		text: clueObj[i].name
		}))
	};
	newFileForm.append(newLabel, newInput);
	newButtonForm.append(newSkipButton, newLeaderBoardButton);
	newClues.append(newH4, newOl);
	newCluesContainer.append(newInstructions, newClues, newFileForm, newButtonForm);
	$('.container').append(newCluesContainer);
	let imageLoader = $('#uploadFile');
	imageLoader.change(handleImage);
}
/****************************************************************************************************
* description: sets up the results page
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
	let clueImgElement = $('<img>', {
		'class': 'clueImage',
		'src': savedGameImages.clueImg,
		'alt': 'your clue'
	});
	let clueCaption = $('<div>', {
		'class': 'caption'
	});
	let cluePara = $('<p>', {
		'text': 'This was your clue image...'
	});
	let uploaderCredit = $('<p>', {
		'text': `Flickr image provided by: ${savedGameImages.uploader}`
	});
	let userCol = $('<div>', {
		'class': 'col-sm-6'
	});
	let userThumbnail = $('<div>', {
		'class':'thumbnail'
	});
	let userImg = $('<img>', {
		src: savedGameImages.guessImg.src,
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
	let updateUser = $('<h1>', {
		'text': `Clarifai rates the two images ${compareClueImgToGuessImg(clueImg, guessImg)}% similar!`
	});
	let buttonCol = $('<div>', {
		'class': 'col-sm-12'
	});
	let getClueButton = $('<button>', {
		'type': 'button',
		'class': 'getClue btn btn-default col-xs-4 col-xs-push-1 col-sm-3 col-sm-push-2 col-md-3 col-md-push-2',
		'text': 'Get New Clue',
		'click': () => {
			emptyContainer();
			getRandomWordsFromNYT();
		}
	});
	let newLeaderBoardButton = $('<button>', {
		'type': 'button',
		'class': 'leaderBoard btn btn-info col-xs-4 col-xs-push-3 col-sm-3 col-sm-push-4 col-md-3 col-md-push-4',
		'text': 'Leader Board',
		'on': {
			'click': leaderboardButtonHandler
		}
	});

	clueCaption.append(cluePara, uploaderCredit);
	clueThumbnail.append(clueImgElement, clueCaption);
	clueCol.append(clueThumbnail);
	userCaption.append(userPara)
	userThumbnail.append(userImg, userCaption);
	userCol.append(userThumbnail);
	firstRow.append(clueCol, userCol);
	buttonCol.append(getClueButton, newLeaderBoardButton);
	secondRow.append(buttonCol);
	newResultsPage.append(firstRow, updateUser, secondRow);
	$('.container').append(newResultsPage);
}
/****************************************************************************************************
* description: sets up leader board page with dom creation
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
		'text': 'Get New Clue',
		'on': {
			'click': () => {
				emptyContainer();
				if(player.name === null){
					createLandingPage();
					return;
				}
				getRandomWordsFromNYT();
			}
		}
	});

	buttonCol.append(getClueButton);
	buttonRow.append(buttonCol);
	firstRow.append(nameH3, statsH3);
	newLeaderBoardPage.append(firstRow);
	addPlayersToLeaderBoard(totalPlayersObj, newLeaderBoardPage);
	newLeaderBoardPage.append(buttonRow);
	$('.container').append(newLeaderBoardPage)
}
/****************************************************************************************************
 * description: this adds players to the leader board, calls saveGameData().
 *  	due to firebase not having base functionality for arrays, the data must be manipulated around in order to display in
 * 		decending order, as well as keep names attached.
 * @param: playerObjFromFirebase, htmlElement
 * @returns: none
 */
function addPlayersToLeaderBoard(playerObjFromFirebase, htmlElement){
	saveGameData();
		//deconstructs the object received from firebase into an array of just score values
	let descendingScoreArray = [];
	for( let searchKey in playerObjFromFirebase){
		descendingScoreArray.push( playerObjFromFirebase[searchKey].score / playerObjFromFirebase[searchKey].attempts );	}
		//sorts the array into descending order
	descendingScoreArray.sort( (a, b) => b - a );
		//loops through the array of scores and removed duplicate scores and scores of 0 from the array
	for( let scoreArrayIndex = 0; scoreArrayIndex < descendingScoreArray.length; scoreArrayIndex++ ){
		let lastIndexOfCurrentScore = descendingScoreArray.lastIndexOf(descendingScoreArray[scoreArrayIndex])
		if( scoreArrayIndex !== lastIndexOfCurrentScore || descendingScoreArray[scoreArrayIndex] === 0){
			descendingScoreArray.splice(lastIndexOfCurrentScore, 1);
			scoreArrayIndex--;
		}
	}
		//with the descending array of unique scores, loops through it and matches the player with that score in the firebase object, and then
		//DOM creates them in order. Also limits the number of highscores to a max of 25.
	for( let searchIndex = 0; searchIndex < descendingScoreArray.length || searchIndex > 25; searchIndex++ ){
		for( let searchKey in playerObjFromFirebase ){
			let theCurrentKey = searchKey;
			if( playerObjFromFirebase[theCurrentKey].score / playerObjFromFirebase[searchKey].attempts === descendingScoreArray[searchIndex] ){
					let newRow = $('<div>', {
					'class': 'row'
				});
				let newPlayerName = $('<div>', {
					'class': 'col-xs-6',
					'text': theCurrentKey
				});
				let newPlayerScore = $('<div>', {
					'class': 'col-xs-6',
					'text': `${parseInt(playerObjFromFirebase[theCurrentKey].score / playerObjFromFirebase[searchKey].attempts)}%`
				});
				newRow.append(newPlayerName, newPlayerScore);
				htmlElement.append(newRow);
			}
		}
	}
}
/****************************************************************************************************
* description: dom creates the waiting modal
 * @param: none
 * @return: none
 */
function waitingModal(quote){
	$('.modal-body').empty();
	$('.modal-title').text(`Hello ${player.name}, some entertainment while you're waiting`);
	let quoteOfTheDay = $('<div>', {
		class: 'quoteDiv',
		text: quote,
	})

	$('.modal-body').append(quoteOfTheDay);
	$('#waitingModal').modal('show');
}

/*****************************************************************************************************/

/****************************************************************************************************
* description: dom creates the error modal
 * @param: none
 * @return: none
 */
function errorModal(message){
	$('.modal-body').empty();
	$('.modal-title').text(`Error`);
	let errorMessage = $('<div>', {
		class: 'quoteDiv',
		text: message,
	})

	$('.modal-body').append(errorMessage);
	$('#waitingModal').modal('show');
}
/*****************************************************************************************************/
