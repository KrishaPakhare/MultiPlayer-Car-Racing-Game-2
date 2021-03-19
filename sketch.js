var ball;
var database , position;
var form , game , player ;
var gameState=0;
var playerCount ;
var allPlayers;

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
    
}

function draw(){
    if(playerCount===4){
        gameState=1;
        game.update(1)
    }
    if(gameState===1){
        game.play();
    }
   
}

