function leaderBoardUpdated(data) {
    if(!data){return;} //if there's nothing in data, don't update board
    totalPlayersObj = data.totalPlayersObj;

}

function saveGameData() {
    leaderboardFirebaseDB.saveState({
        totalPlayersObj: totalPlayersObj
    });

}
