let turn = 'O';
$(document).ready(function() {
  addListeners();
});
function addListeners(){
  $('.row > label').click(playSpot);
  $('#clear').click(clearAll);
}
function playSpot(event) {
  console.log(event.currentTarget.id);
  let id = '#'+event.currentTarget.id;
  $(id).removeClass('btn');
  $(id).off('click');
  if (turn.toUpperCase() === 'O') {
    $(id).addClass('text-center glyphicon glyphicon-record');
    turn = 'X';
  }
  else{
    $(id).addClass('text-center glyphicon glyphicon-remove');
    turn='O';
  }
  if (circleHasWon()) {
    alert("O won!")
  }
  if(xHasWon()){
    alert("X won")
  }
}
function circleHasWon(){
  let pos1 = $('#1'), pos2 = $('#2'), pos3 = $('#3'), pos4 = $('#4'),
    pos5 = $('#5'), pos6 = $('#6'), pos7 = $('#7'), pos8 = $('#8'), pos9 = $('#9'),
    circle = 'glyphicon-record';
  if(pos1.hasClass(circle) && pos2.hasClass(circle) && pos3.hasClass(circle)||
    pos4.hasClass(circle) && pos5.hasClass(circle) && pos6.hasClass(circle)||
    pos7.hasClass(circle) && pos8.hasClass(circle) && pos9.hasClass(circle)||
    pos1.hasClass(circle) && pos4.hasClass(circle) && pos7.hasClass(circle)||
    pos2.hasClass(circle) && pos5.hasClass(circle) && pos8.hasClass(circle)||
    pos3.hasClass(circle) && pos6.hasClass(circle) && pos9.hasClass(circle)||
    pos1.hasClass(circle) && pos5.hasClass(circle) && pos9.hasClass(circle)||
    pos3.hasClass(circle) && pos5.hasClass(circle) && pos7.hasClass(circle)
  ){
    return true;
  }
  return false;
}

function xHasWon(){
  let pos1 = $('#1'), pos2 = $('#2'), pos3 = $('#3'), pos4 = $('#4'),
    pos5 = $('#5'), pos6 = $('#6'), pos7 = $('#7'), pos8 = $('#8'), pos9 = $('#9'),
    x = 'glyphicon-remove';
  if(pos1.hasClass(x) && pos2.hasClass(x) && pos3.hasClass(x)||
    pos4.hasClass(x) && pos5.hasClass(x) && pos6.hasClass(x)||
    pos7.hasClass(x) && pos8.hasClass(x) && pos9.hasClass(x)||
    pos1.hasClass(x) && pos4.hasClass(x) && pos7.hasClass(x)||
    pos2.hasClass(x) && pos5.hasClass(x) && pos8.hasClass(x)||
    pos3.hasClass(x) && pos6.hasClass(x) && pos9.hasClass(x)||
    pos1.hasClass(x) && pos5.hasClass(x) && pos9.hasClass(x)||
    pos3.hasClass(x) && pos5.hasClass(x) && pos7.hasClass(x)
  ){
    return true;
  }
  return false;
}

function clearAll() {
  turn = 'O';
  $('.row > label').removeClass('glyphicon glyphicon-record glyphicon-remove');
  addListeners();
}
