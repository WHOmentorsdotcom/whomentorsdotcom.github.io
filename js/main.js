/*=============================
 Loader                     
===============================*/
// makes sure the whole site is loaded
$(window).load(function(){
	jQuery(".status").fadeOut();
	jQuery(".preloader").delay(1000).fadeOut("slow");
})


/*=============================
 Contact Form                   
===============================*/
$(document).ready(function(){
	var form = $('#form');
	var submit = $('#submit');	
	var alert = $('.alert');

	form.on('submit', function(e){
		e.preventDefault();

		$.ajax({
			url: 'contact-form.php',
			type: 'POST',
			dataType: 'html',
			data: form.serialize(),
			beforeSend: function(){
				alert.fadeOut();
				submit.html('Sending....');
			},
			success: function(e) {
				alert.html(e).fadeIn();
				form.trigger('reset'); // reset form
				submit.html('Submit');
			},
			error: function(e) {
				console.log(e)
			}
		});
	});
});



/*=============================
 Navigation Bar                    
===============================*/

//jQuery to collapse the navbar on scroll

$(window).scroll(function() {
	var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    if (top > 40) $(".navbar-fixed-top").addClass("top-nav-collapse");
	else $(".navbar-fixed-top").removeClass("top-nav-collapse");
})


$('.navbar').onePageNav({
    currentClass: 'active',
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: ':not(.external)'
});


/*=============================
 Slider                 
===============================*/
$('.carousel').carousel();


/*=============================
 Portfolio
===============================*/
$( document ).ready(function() {
    $("[rel='tooltip']").tooltip();    
 
    $('.portfolio-item').hover(
        function(){
            $(this).find('.portfolio-item-info').fadeIn(250);
        },
        function(){
            $(this).find('.portfolio-item-info').fadeOut(250);
        }
    ); 
});


/*=============================
 Mailchimp email form
===============================*/
$(function () {
  var $form = $('#mc-embedded-subscribe-form');

  $('#mc-embedded-subscribe').on('click', function(event) {
    if(event) event.preventDefault();
    register($form);
  });
});

function register($form) {
  $.ajax({
    type: $form.attr('method'),
    url: $form.attr('action'),
    data: $form.serialize(),
    cache       : false,
    dataType    : 'json',
    contentType: "application/json; charset=utf-8",
    error       : function(err) { $('#notification_container').html('<span class="alert">Could not connect to server. Please try again later.</span>'); },
    success     : function(data) {
     
      if (data.result != "success") {
        var message = data.msg.substring(4);
        $('#notification_container').html('<span class="alert">'+message+'</span>');
      } 

      else {
        var message = data.msg;
        $('#notification_container').html('<span class="success">'+message+'</span>');
      }
    }
  });
}


/*=============================
 WOW for Animate.css                     
===============================*/
new WOW().init(
{
	mobile: false
});