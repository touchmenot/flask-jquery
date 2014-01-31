$(document).ready(function () {

	$(" .container ").hover(function(){
		$(this).addClass("hover_emp");	
		//$(this).append("<p class='prompt'>Just a paragraph.</p>");
	}, function() {
		$(this).removeClass("hover_emp");
		//$('p').remove(".prompt");
	});

	$('p').click(function() {
		//$(this).append( $("#comment") ).css('visibility: visible');
		$(this).append("<div id='tooltip'><input type='text' name='comment' />");
		var toAdd = $('input[name=comment]').val();
		$('p').append('<div class="item">' + toAdd + '</div>');
		//<input type='button' value='Insert' />
		//$('#tooltip').css({'position': 'absolute', 'top': $('p').position().top + 'px', 'left': $('p').position().left + 'px'});
	});


	$(".calculator").hide().fadeIn(1000);

	$(".calculator").resizable({ animate: true });;

	$(".calculator").dblclick(function(){
        $(this).html("<h1>42</h1>").fadeOut( 1000 );
    });


    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
			case 65:
				$(".calculator").animate({left: "-=10px"}, 'fast');
				break;
			case 83:
				$(".calculator").animate({up: "-=10px"}, 'fast');
				break;
			case 87:
				$(".calculator").animate({up: "+=10px"}, 'fast');
				break;
			case 68:
				$(".calculator").animate({left: "+=10px"}, 'fast');
				break;
			default:
				break;
		}
	});
});