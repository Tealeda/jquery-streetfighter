$(document).ready(function() {
	playTheme();
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
	    $('.ryu-still').hide();
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
	    	playCool();
	    	$('.ryu-still').hide();
	    	$('.ryu-ready').hide();
	    	$('.ryu-cool').show();
	    }
	}) 
	$(document).keyup(function(e){
		if (e.keyCode == 88) {
	     	$('#ryu-cool-sound')[0].pause();
			$('#ryu-cool-sound')[0].load();
			//$('#theme-sound')[0].play();
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


function playCool() {
	if ('#ryu-cool-sound'){
		$('#theme-sound')[0].pause();
		$('#ryu-cool-sound')[0].volume = 0.5;
		//$('#ryu-cool-sound')[0].load();
		$('#ryu-cool-sound')[0].play();
	}
}

function playTheme(){
	$('#theme-sound')[0].volume =0.5;
	//$('#theme-sound')[0].load();
	$('#theme-sound')[0].play();
}

// var audioElement = $("#ryu-cool-sound")[0];
// audioElement.addEventListener("paused", function() 
// { document.getElementsById("#ryu-cool-sound")[0].play(); }, false);
// var audioElement = !audioElement.paused;
// function playCool () {
//   if (isPlaying) {
//     //$('#theme-song')[0].pause();
//      $('#ryu-cool-sound')[0].load()
//     $('#ryu-cool-sound')[0].play();
//   }
// }
