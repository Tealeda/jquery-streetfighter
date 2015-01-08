$(document).ready(function() {
	playGame();
})

function playGame(){
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
  	})
	.mouseleave(function() {
	    $('.ryu-ready').hide();
	    $('.ryu-still').show();
	})
	.mousedown(function() {
	    playHadouken();    
	    $('.ryu-ready').hide();
	    $('.ryu-throwing').show();
	    $('.hadouken').show()
		    .animate(
		    	{'left': '300px'},
		      	500,
		    	function() {
		        	$(this).hide();
		        	$(this).css('left', '-212px');
		      	}
		    );
	})
	.mouseup(function() {
    	$('.ryu-throwing').hide();
    	$('.ryu-ready').show();
  	})
  	$(document).keydown(function(e){
		if (e.keyCode == 88) {
	    	//playCool();
	    	$('.ryu-still').hide();
	    	$('.ryu-cool').show();
	    }
	}) 
	$(document).keyup(function(e){
		if (e.keyCode == 88) {
	  //   	$('#cool')[0].pause();
			// $('#cool')[0].load();
	    	$('.ryu-still').show();
	    	$('.ryu-cool').hide();
    	}
  	})	
}

function playHadouken() {
	$('#hadouken-sound')[0].volume = 0.5;
  	$('#hadouken-sound')[0].load();
  	$('#hadouken-sound')[0].play();
}

// function playCool() {
// 	$('#ryu-cool-sound')[0].volume = 0.5;
// 	$('#ryu-cool-sound')[0].load();
// 	$('#ryu-cool-sound')[0].play();
// }
