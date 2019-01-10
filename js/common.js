$(document).ready(function () {

// Start shaiders


		$('.backCall-img').on('click', function () {
			$('.backCall').show();
		});
		$('.btn-close').on('click', function () {
			$('.backCall').hide();
		});



		$("#sendcall").click(function() {
			if ($("#backCall input[name=name]").val().length < 3  ) { alert("Введите Ваше имя"); return false; }
			if ($("#backCall input[name=phone]").val().length < 11  ) { alert("Введите Ваш телефон для обратной связи в формате +375(29)0 00 00 00 или 8(029)0 00 00 00"); return false; }
			$.ajax({
				type: "POST",
				url: "/includes/sidemenu.php?action=call",
				data: {	name: $("#backCall input[name=name]").val(), 
								phone: $("#backCall input[name=phone]").val(),
				      },
				success: function(response)	{
					var $msg = $.parseJSON(response);
					if ($msg.Error == false){
							$("#waitcall").show();
							$(".form").hide();
						}
					}
			});
			return false;
		});



// End shaiders


// Start Animate Logo Svg	

let tl = new TimelineMax();

tl

	.from( $('.pol__1'), 1.8, {
		y: -700
	})

	.from( $('.pol__2'), 1.8, {
		y: -700,
		x: -700
	},"-=1.5")

	.from( $('.pol__3'), 1.9, {
		y: 900,
		x: -900
	},"-=1.5")

	.from( $('.pol__4'), 1.8, {
		y: -2500,
		x: 1200
	},"-=1.7")

	.from( $('.pol__5'), 1.8, {
		y: 1200,
		x: 1200
	},"-=1.9")



	.from( $('.logo__m'), 1.6, {
		y: -700
	},"-=1.5")

	.from( $('.logo__o'), 1.6, {
		y: -700
	},"-=1.3")

	.from( $('.logo__l'), 1.6, {
		y: -700
	},"-=1.3")


	.from( $('.logo__second_o'), 1.6, {
		y: -1000
	},"-=1.3")

	.from( $('.logo__t'), 1.6, {
		y: -1500
	},"-=1.3")




	.from( $('.logo__bottom_m'), 1.4, {
		y: 700
	},"-=2")

	.from( $('.logo__bottom_o'), 1.4, {
		y: 700
	},"-=1.8")
	.from( $('.logo__bottom_t'), 1.4, {
		y: 700
	},"-=1.6")
	.from( $('.logo__bottom_second_o'), 1.4, {
		y: 700
	},"-=1.5")
	.from( $('.logo__bottom_r'), 1.4, {
		y: 700
	},"-=1.4")
	.from( $('.logo__bottom_s'), 1.4, {
		y: 700
	},"-=1.3")


	.from( $('.logo__bottom_g'), 1.5, {
		x: 10000
	},"-=1.25")
	.from( $('.logo__bottom_second_r'), 1.5, {
		x: 10000
	},"-=1.2")
	.from( $('.logo__fird_o'), 1.5, {
		x: 10000
	},"-=1.15")
	.from( $('.logo__bottom_u'), 1.4, {
		x: 10000
	},"-=1.1")
	.from( $('.logo__bottom_p'), 1.3, {
		x: 10000
	},"-=1.05")	;


// End Animate Logo Svg	

// Start timer discount	
	
	function getTimeRemaining(endtime) {
	  var t = Date.parse(endtime) - Date.parse(new Date());
	  var seconds = Math.floor((t / 1000) % 60);
	  var minutes = Math.floor((t / 1000 / 60) % 60);
	  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
	  return {
	    'total': t,
	    'hours': hours,
	    'minutes': minutes,
	    'seconds': seconds
	  };
	}

	function initializeClock(id, endtime) {
	  var clock = document.getElementById(id);
	  var hoursSpan = clock.querySelector('.hours');
	  var minutesSpan = clock.querySelector('.minutes');
	  var secondsSpan = clock.querySelector('.seconds');

	  function updateClock() {
	    var t = getTimeRemaining(endtime);

	    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
	    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
	    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

	    if (t.total <= 0) {
	      clearInterval(timeinterval);
	    }
	  }

	  updateClock();
	  var timeinterval = setInterval(updateClock, 1000);
	}

	var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
	initializeClock('clockdiv', deadline);


// End timer discount




});