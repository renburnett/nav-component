$(function() {
  $(".topnav a").on("click", function(){
      $("html", "body").animate({
          scrollTop: ($($.attr(this, "href")).offset).top 
        }, 500)
  });

  $(".slider").slick({
    dots: true,
    autoplay: true,
    arrows: false,
    infinite: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

});

