$(function(){
	let origBoard;

	const cells = $('.cell');
	const reset = $('.reset');

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

	gameStart();


	function gameStart(){
	origBoard = cells.text().split('');

	reset.on('click' ,function(){
		counter = 0; 
		origBoard = [];
		clearBoard();
	});

	cells.on('click',function(){
		if(counter%2==0) {
			$(this).text(human);
			counter++;
		}else{ 
			$(this).text(computer);
			counter++;
		}

		origBoard = cells.text().split('');

		if(checkWinner('X',origBoard)){
			console.log('Player 1 je pobjedio');
		}else if(checkWinner('O', origBoard)){
			console.log('Player 2 je pobjedio')
		}else{
			console.log('Nista za sada')
		} 

	});
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
}); 