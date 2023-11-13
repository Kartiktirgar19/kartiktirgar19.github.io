const computerChoices = ['bat', 'ball', 'stump'];
const resultMsgs = [ ` tie`, `user won .`, `computer won`];

function getRandomNumber(){
  let rendomnumber = Math.random() * 3;
  if( rendomnumber >0 && rendomnumber <= 1 ){
    return 0;
  } 
  else if ( rendomnumber > 1 && rendomnumber <= 2 ){
    return 1;
  }
  else{
    return 2;
  }
}

function playGame( userChoice ){M
  const computerChoiceIndex = getRandomNumber();
  let computerchoice = computerChoices[computerChoiceIndex];
  let resultmeg = resultMsgs[computerChoiceIndex];
  document.getElementById('result').innerHTML = 
`you have chosen ${userChoice}. computer choice is ${computerchoice} ${resultmeg}`;
}

let currentPlayer = "X";

function onClickCell( event, row, col ){
    
    event.innerHTML= currentPlayer;
    currentPlayer =  currentPlayer === "X" ? "0": "X" ; 
}