$(window).on('resize', updateState);
$(window).on('scroll', updateState);
$(window).on('touchmove', updateState);

// var isScrolling;
// $(document).on("scrollstart",function(){
// 	console.log('touch scrolling started');
// 	clearInterval(isScrolling);
// 	isScrolling = setInterval(function(){
// 		updateState();
// 		console.log('touch scrolling');
// 	}, 200);
// });
// $(document).on("scrollstop",function(){
// 	console.log('touch scrolling stopped');
// });

// init controller
// var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter"}});

// $("section.project#firesauce").each(function(){

// 	var id = $(this).attr("id");
	
// 	// console.log(id);

// 	// build scenes
// 	new ScrollMagic.Scene({name: id, triggerElement: "#"+id+" .trigger"})
// 					.setClassToggle("#"+id, "past") // add class toggle
// 					//.setPin("#firesauce")
// 					.addIndicators() // add indicators (requires plugin)
// 					.on("enter leave", function (e) {
// 						// $("#state").text(e.type == "enter" ? "inside" : "outside");

// 						var id = $(this).parent().attr("id");
// 						console.log(e);
// 						if(e.type == "enter"){
// 							console.log("inside");

// 						}else{
// 							console.log("outside");

// 						}
						
// 					})
// 					.addTo(controller);

// });

for(var i=0; i<$('section, footer').length; i++){
	$($('section, footer')[i]).css('z-index', (i+10));
}

function updateState(){

	var projects = $('section.project, section.title');

	var pageScroll = $(window).scrollTop();
	var pageHeight = $(window).height();
	var pageBottom = pageScroll+pageHeight;

	var offset = 0;

	// $('section.project').css('min-height', pageHeight+'px');
	$('section.project .wrapper').css('min-height', (pageHeight-200)+'px');

	for(var i=0; i<projects.length; i++){

		var element = projects[i];
		var isTitle = $(element).hasClass('title');

		if(!$(element).hasClass('past') ){

			var elFrmTop = $(element).offset().top;
			var elHeight = $(element).outerHeight();
			var elBottom = elFrmTop+elHeight;

			if(isTitle) elBottom = elBottom + (pageHeight-elHeight);

			offset = offset + elHeight;

			// console.log( pageBottom + " ?= " + elBottom );
			if( pageBottom >= elBottom ){
				$("#offset_container").css('height', offset+'px');

				var h = elHeight - pageHeight; h=h*(-1);
				if(elHeight<pageHeight) h = 0;// else h++;

				if(isTitle)h=0;

				$(element).css('top', h+'px');
				$(element).addClass('past');
			}



		} else {

			var elFrmTop = $("#offset_container").offset().top;
			var elHeight = $(element).outerHeight();
			var elBottom = elFrmTop+elHeight+offset;

			if(isTitle) elBottom = elBottom + (pageHeight-elHeight);

			// console.log( pageBottom + " ?= " + elBottom );
			if( pageBottom < elBottom ){
				$("#offset_container").css('height', offset+'px');

				$(element).css('top', '');
				$(element).removeClass('past');
				
			} else {
				offset = offset + elHeight;

			}
			

		}

	}
	


}