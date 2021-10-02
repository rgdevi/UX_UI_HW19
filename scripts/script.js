
  //  scroll to top

$(window).scroll(function () {
  if ($(this).scrollTop() > 300) {
    $('#toTop').fadeIn();
    $("#topSticky").html("Scroll to top should appear! Scroll value: " + $(this).scrollTop())

  } else {
    $('#toTop').fadeOut();
    $("#topSticky").html("Scroll should disappear! " + "<br>" + "Scroll value: " + $(this).scrollTop() + "<br>" + "Scroll reveal version: " + ScrollReveal().version);

  }
});

$("#toTopButton").click(function () {
  $("html, body").animate({ scrollTop: 0 });
});


  //  dark theme 

  $("#icon").click(function () {
    $("body").toggleClass("dark-theme");
    $("#icon").toggleClass("fa-sun fa-moon");
  });

  sal({
    threshold: 0.1,
    once: false,
  });


 // ScrollReveal

  // var slideUp = {
  //   distance: '150%',
  //   origin: 'bottom',
  //   opacity: null,
  //   delay: 0,
  //   interval: 80
  // };

  // var nodeList = document.querySelectorAll('.cs-container');
  // ScrollReveal().reveal(nodeList, slideUp);
