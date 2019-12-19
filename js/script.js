



var User1 = "X";
var turnsTaken = 0;
var gameEnd = false;

function playerturn(buttonId){
if(User1 === "X"){
 User1 = "O" 
}else{
  User1 = "X"
}
};

function takenTurns(x){
  turnsTaken + x
}

function performLogic(buttonId, tileId){
    $(buttonId).hide();
    $(tileId).html(User1);
}

$('#button1').click(function() {
    performLogic("#button1","#tile1");
  console.log();
    playerturn("#button1");
});

$("#button2").click(function() {
    performLogic("#button2","#tile2");
  playerturn("#button2");
});

$("#button3").click(function() {
    performLogic("#button3","#tile3");
  playerturn("#button3");
});

$("#button4").click(function() {
    performLogic("#button4","#tile4");
  playerturn("#button4");
});

$("#button5").click(function() {
    performLogic("#button5","#tile5");
  playerturn("#button5");
});

$("#button6").click(function() {
    performLogic("#button6","#tile6");
  playerturn("#button6");
});

$("#button7").click(function() {
    performLogic("#button7","#tile7");
  playerturn("#button7");
});

$("#button8").click(function() {
    performLogic("#button8","#tile8");
  playerturn("#button8");
});

$("#button9").click(function() {
    performLogic("#button9","#tile9");
  playerturn("#button9");
});

