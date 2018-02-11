$(function(){
	let origBoard;

	const cells = $('.cell');
	const reset = $('.reset');
	const score = $('.yourScore');
	const computerScore = $('.aiScore');

	let youWin = 0;
	let computerWins = 0;
	let counter = 0;
	const human = 'X';
	const computer = 'O';
	const winCombo = [
		[0,1,2],
		[3,4,5],
		[6,7,8],
		[0,3,6],
		[1,4,7],
		[2,5,8],
		[0,4,8],
		[2,4,6],
	];

	updateScore();
	gameStart();


	function gameStart(){
	origBoard = cells.text().split('');
	$('.finished').toggleClass('hidden');
	reset.on('click' ,function(){
		youWin = 0;
		computerWins = 0;
		resetAll();
		console.log($('.finished').hasClass('.hidden'));
		if(!($('.finished').hasClass('hidden'))){
			$('.finished').toggleClass('hidden');
			$('endText').text('');
		}
	});

	cells.on('click',function(){
		if(counter%2==0){
			$(this).text(human);
			counter++;
			weHaveAWinner();
		}else{
			$(this).text(computer);
			counter++;
			weHaveAWinner();
		}
	});
	}

	function weHaveAWinner(){
		origBoard = cells.text().split('');
		if(checkWinner('X',origBoard)){
			youWin++;
			updateScore();
			clearBoard();
			counter=0;
			$('.finished').toggleClass('hidden');
			$('.endText').append('You win');
		}else if(checkWinner('O', origBoard)){
			computerWins++;
			updateScore();
			clearBoard();
			counter=0;
			$('.finished').toggleClass('hidden');
			$('.endText').append('You lose');
		}else if(counter>8){
			console.log('Score is even');
			resetAll();
		}else{
			console.log('Nista za sada')
		} 

	}

	function clearBoard(){
		cells.text(' ');
	}

	function checkWinner(sent,arr){
		let bool;
		const str = arr.join('');
		for(var i = 0;i<winCombo.length;i++){
			let tempArr = winCombo[i];
			bool = true;
			for(var j = 0;j<tempArr.length;j++){
				if(str.charAt(tempArr[j]) !=sent){
					bool = false;
					break;
				}
			}
			if(bool) return bool;
		}
		return bool;
	}
	function updateScore(){
		score.text(youWin);
		computerScore.text(computerWins);
	}

	function resetAll(){
		counter = 0; 
		origBoard = [];
		clearBoard();
		updateScore();
	}

	$('.OKButton').on('click',function(){
		$('.finished').toggleClass('hidden');
		$('.endText').text('');
	});
}); 