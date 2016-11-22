$(document).foundation()

$(document).ready(function() {
  $('.portrait').hover(function() {
      $(this).toggleClass("border");
  });
  $('img.logo-img').mouseenter(function() {
    $(this).animate({height: '+=10px'});
  });
  $('img.logo-img').mouseleave(function() {
      $(this).animate({height: '-=10px'});
  });
  $('.project-logo').mouseenter(function() {
    $(this).animate({height: '+=10px'});
  });
  $('.project-logo').mouseleave(function() {
      $(this).animate({height: '-=10px'});
  });
  $('.sticky').mouseenter(function() {
    $(this).animate({height: '+=20px'});
  });
  $('.sticky').mouseleave(function() {
      $(this).animate({height: '-=20px'});
  });
});
