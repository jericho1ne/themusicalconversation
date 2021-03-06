// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  $('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
    }, 1400, 'easeInOutExpo');
    event.preventDefault();
  });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});


document.addEventListener("DOMContentLoaded", function(event) {
  // Insert video clip after page load

    //   var clipHtml = 
    //     '<iframe width="100%" height="auto" ' +
    //     'src="https://www.youtube.com/embed/videoseries?list=PLKLZzVqyarZut67VWZEbf5Sh4ss0gnvV0&version=3&vq=hd1080&rel=0&amp;showinfo=0" ' +
    //     'frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>' +
    //     '</iframe>';

    var vimeoClipHtml = 
        '<iframe src="https://player.vimeo.com/video/305559748" width="100%" height="auto" ' + 
        'frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';

     $('#video-clip-wrapper').append(vimeoClipHtml);

  // var videoLoop = document.getElementById("video-loop");
  // console.warn("Video playing.");
  // videoLoop.play();

  // $(window).scroll(function() {
  //   var windowTop = $(this).scrollTop();
  //   var windowBottom = windowTop + $(this).innerHeight();
  //   var browserHeight = $(window).height();
  //   var opacity = 1.1 - (windowTop / browserHeight);

  //   if (opacity > 1) {
  //     opacity = 1;
  //   }

  //   if (windowTop > browserHeight) {
  //     $('.video-wrapper').css('display', 'none');
  //   } else {
  //     $('.video-wrapper').css('display', 'block');
  //   }
  //   $('.video-wrapper').css('opacity', opacity);
  // }).scroll();
});
