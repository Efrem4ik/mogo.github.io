$(".service__accordeon .service__accordeon-text").hide().prev().click(function() {
    $(this).parents(".service__accordeon-item").find(".service__accordeon-text").not(this).slideUp().prev().removeClass("active");
    $(this).next().not(":visible").slideDown().prev().addClass("active");
    $('.service__accordeon .service__accordeon-text').not($(this).next()).slideUp(500).prev().removeClass('active');
});

$('.slider').slick({
    dots: false,
    arrows: true,
    variableWidth: true,
    responsive: [
        {
          breakpoint: 1150,
          settings: {
            arrows: false,
            centerMode: true,
          }
        },
        {
          breakpoint: 980,
          settings: {
            centerMode: true,
            arrows: false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            centerMode: true,
            arrows: false,
          }
        }
      ]
  });

 $(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});

$('.header__menu-btn').on("click", function () {
    $('.header__menu > ul').slideToggle();
  });