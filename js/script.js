//Page and resources loaded.
$(".flip-container").removeClass("active");
$("#links_frames").removeClass("active");
$("#me").removeClass("active");

var linkCount = 0, timer, opacity = 0.5;

$(window).bind("load", function() {
	// setTimeout(function(){ $(".flip-container").addClass("active"); }, 1000);
	// setTimeout(function(){ $("#links_frames").addClass("active");   }, 1000);
	// setTimeout(function(){ $("#me").addClass("active");   			}, 1000);

	// $("a").mouseover(touch);
	// $("a").mouseout(touchend);

	// var el = document.getElementById("card");
	// el.addEventListener("touchstart", touch, false);
	// el.addEventListener("touchend", touchend, false);

	// // var dataObject = {timeline: {headline: "Headline", type: ... }}
 //    createStoryJS({
 //        type:   'timeline',
 //        width:  '100%',
 //        height: '100%',
 //        start_at_end: 1,
 //        // font: 'DroidSerif-DroidSans',
 //        source: 'https://docs.google.com/spreadsheet/pub?key=0ApSL-Y_P6Ru6dEVocXRXSkJpV2Q1NUVIQmhJRFJzX3c&output=html',
 //        embed_id: 'my-timeline'
 //    });
});

$(document).ready(function() {
	
});

function touch(){
	linkCount++;
	clearTimeout(timer);
	$("#card_back_r, #card_back_d, #card_back_s").css("opacity", "0");
	if(linkCount == 1) $("#card_back_r").css("opacity", opacity);
	if(linkCount == 2) $("#card_back_d").css("opacity", opacity);
	if(linkCount == 3){$("#card_back_s").css("opacity", opacity);
		linkCount = 0;
	}
}

function touchend(){
	clearTimeout(timer);
	timer = setTimeout(function(){
		$("#card_back_r, #card_back_d, #card_back_s").css("opacity", "0");
	},1000);
}