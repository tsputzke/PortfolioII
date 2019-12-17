  $('#logo').on('click or keypress', function(event) {
    $('html, body').animate({
      scrollTop: $(".hero").offset().top 
    }, 300);
  })

  $('.arrow').on('click or keypress', function(event) {
    $('html, body').animate({
      scrollTop: $("#about-me").offset().top - 20
    }, 300);
  })

  $('#about-button').on('click or keypress', function(event) {
    $('html, body').animate({
      scrollTop: $("[name='aboutme-anchor']").offset().top 
    }, 300);
  })

  $('#portfolio-button').on('click or keypress', function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $("[name='portfolio-anchor']").offset().top 
    }, 300);
  })

  $('#skills-button').on('click or keypress', function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $("[name='skills-anchor']").offset().top 
    }, 300);
  })

  $('#contact-button').on('click or keypress', function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $("[name='contactme-anchor']").offset().top 
    }, 300);
  })
  
  $('.email').on('click or keypress', event => {
    window.open('mailto:tsputzke@gmail.com', '_blank');
  })
  
  $('.linkedin').on('click or keypress', event => {
    window.open('https://www.linkedin.com/in/timothy-putzke-0534b4a8/', '_blank');
  })
  
  $('.github').on('click or keypress', event => {
    window.open('https://github.com/tsputzke', '_blank');
  })
  
  // Portfolio
  
  $('.cultivate-img, #cultivate-demo').on('click or keypress', event => {
    window.open('https://tsputzke-cultivate-app.now.sh/', '_blank');
  })

  $('#cultivate-repo').on('click or keypress', event => {
    window.open('https://github.com/tsputzke/cultivate-app', '_blank');
  })
  
  $('.booksplorer-img, #booksplorer-demo').on('click or keypress', event => {
    window.open('https://tsputzke.github.io/Booksplorer/', '_blank');
  })

  $('#booksplorer-repo').on('click or keypress', event => {
    window.open('https://github.com/tsputzke/Booksplorer', '_blank');
  })

  // Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('nav').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > navbarHeight){
        // Scroll Down
        $('nav').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('nav').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}