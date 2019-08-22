function RunGame(player1, player2){
	let player1Points = 0;
	let player2Points = 0;
	WhoGoesFirst();

}


function WhoGoesFirst(player1, player2){
   let player1TurnValue = rollDie(4);
   let player2TurnValue = rollDie(4);

   if(player1TurnValue > player2TurnValue){
   		return 1;
   }
   else if(player2TurnValue > player1TurnValue){
        return 2;
   }
}

function rollDie(numberOfSides){
	let result;
	result = Math.floor(Math.random() * numberOfSides) + 1;
	return result;
}

function Round1(player1,player2){
	let player1 = rollDice1[12, 6, 8]
	let player1 = rollDice2[10, 4, 20]
	if(rollDice1 > rollDice2){
		return 1;
    else if(rollDice1<rollDice2)
    	return 0
	}
    let player2 = rollDice1[12, 6, 8]
    let player2 = rollDice2[10, 4, 20]
    if (rollDice1 > rollDice){
    	return 1;
    else if(rollDice1<rollDice2){
         return 0;
    }
    
}


function rollDiceAndGetSum(array){

let rollDice1 = [12, 6, 8];
let rollDice2 = [10,4,20];
let rollDice3 = [6, 8]
let rollDice4 = [10,4]	
}


function Round(){

}
