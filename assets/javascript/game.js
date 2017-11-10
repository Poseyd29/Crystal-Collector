var wins = 0;

var losses = 0;

var userScore = 0;





// Generate random target number (19-120)
var targetNum = Math.floor((Math.random() * 120) +19);
console.log(targetNum);

// Display target number


	var one = Math.floor(Math.random() * 12)
  var two = Math.floor(Math.random() * 12)
  var three = Math.floor(Math.random() * 12)
  var four = Math.floor(Math.random() * 12)

  $('#target').html(targetNum);
  

  function reset(){
  		
  		var one = Math.floor(Math.random() * 12)
  		var two = Math.floor(Math.random() * 12)
  		var three = Math.floor(Math.random() * 12)
  		var four = Math.floor(Math.random() * 12)
  		userScore = 0;
  		targetNum = Math.floor((Math.random() * 120) +19);
  		$('#target').html(targetNum);
  		$('#userScore').text(userPoints);


  }

  	function win (){
  			alert("You won!");
  			wins++;
  			$('#win').text("Wins:" + wins);
  			reset();

  	}

  	function lose(){
			alert ("You lose!");
  		losses++;
  		$('#lose').text("Losses:" + losses);
  			reset();
		}

		$('#one').on('click', function(){
    userScore = userScore + one;
    console.log("New userScore= " + userScore);
    $('#userScore').html(userScore); 
        if (userScore == targetNum){
          win();
        }
        else if ( userScore > targetNum){
          lose();
        }
        });


        $('#two').on('click', function(){
    		userScore = userScore + two;
    		console.log("New userScore= " + userScore);
    		$('#userScore').html(userScore); 
        if (userScore == targetNum){
          win();
        }
        else if ( userScore > targetNum){
          lose();
        }
        });


        $('#three').on('click', function(){
    	userScore = userScore + three;
    	console.log("New userScore= " + userScore);
    	$('#userScore').html(userScore); 
        if (userScore == targetNum){
          win();
        }
        else if ( userScore > targetNum){
          lose();
        }
        });


        $('#four').on('click', function(){
    	userScore = userScore + four;
    	console.log("New userScore= " + userScore);
    	$('#userScore').html(userScore); 
          //sets win/lose conditions
        if (userScore == targetNum){
          win();
        }
        else if ( userScore > targetNum){
          lose();
        }

        });


