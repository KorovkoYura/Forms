$(document).ready(function(){

	$('#myForm input:text').addClass('styler');

	$('#myForm select').styler({
		selectSmartPositioning:'false',
	});

	$(":checkbox").change(function(){

		if(this.checked) $(".text").hide();
		else $(".text").show();

	});


	 var el, newPoint, newPlace, offset, days;

	 $("input[type='range']").change(function() {

	   el = $(this);

	   width = el.width();

	   newPoint = (el.val() - el.attr("min")) / (el.attr("max") - el.attr("min"));

	   offset = 35;

	   if (newPoint < 0) { newPlace = 0; }
	   else if (newPoint > 1) { newPlace = width; }
	   else { newPlace = width * newPoint + offset; offset -= newPoint; }

	  	switch(el.val()){

	   		case '1': newPlace += 40; break;
	   		case '2': newPlace += 36; break;
	   		case '3': newPlace += 33; break;
	   		case '4': newPlace += 30; break;
	   		case '5': newPlace += 26; break;
	   		case '6': newPlace += 23; break;
	   		case '7': newPlace += 20; break;
	   		case '8': newPlace += 16; break;
	   		case '9': newPlace += 14; break;
	   		case '10': newPlace += 11; break;
	   		case '11': newPlace += 7; break;
	   		case '12': newPlace += 4; break;
	   		case '13': newPlace += 1; break;
	   		case '14': newPlace -= 3; break;
	   		case '15': newPlace -= 7; break;
	   		case '16': newPlace -= 10; break;
	   		case '17': newPlace -= 13; break;
	   		case '18': newPlace -= 16; break;
	   		case '19': newPlace -= 19; break;
	   		case '20': newPlace -= 23; break;
	   		case '21': newPlace -= 26; break;
	   		case '22': newPlace -= 30; break;
	   		case '23': newPlace -= 33; break;
	   		case '24': newPlace -= 36; break;
	   		case '25': newPlace -= 40; break;
	   		case '26': newPlace -= 43; break;
	   		case '27': newPlace -= 47; break;
	   		case '28': newPlace -= 50; break;
	   		case '29': newPlace -= 53; break;
	   		case '30': newPlace -= 57; break;
	   	}

	   	var string;

	   	if (el.val() == 1) string = ' день';
	   	else if (el.val() <= 4 ) string = ' дня';
	   	else string = ' дней';

	   el
	     .next("output")
	     .css({
	       left: newPlace,
	       marginLeft: offset + "%",
	     })
   
	     .text(el.val() + string );
	 })

	 .trigger('change');



});