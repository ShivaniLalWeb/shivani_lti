$(document).ready(function(){

$('.variable-width').slick({
    dots: true,
    prevArrow: '<i class="fa fa-arrow-left">',
    nextArrow: '<i class="fa fa-arrow-right">',
    infinite: true,
    speed: 300,
    slidesToShow: 3,
  })

    $('.banner_carousel').slick({
      dots: true,
      arrows: false,
      appendDots: $('.slick-slider-dots'),
    });
      
});