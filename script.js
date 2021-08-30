$(document).ready(function() {
  $('.header_burger').click(function(event) {
    $('.header_burger, .header_menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});

$(document).ready(function(){ 
  $('a.back').click(function() { 
    parent.history.back(); 
    return false;
  }); 
}); 

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});

$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});

$(function() {
  var basicPrice = 105;
  $('#prescription').on('change', function () {   
    var val = $(this).find('option:selected').val();
    if (val == 1) {
      basicPrice = 105;
      $('#cost').html('&#36; ' + basicPrice);
      $('#lenses option:first').prop('selected', true);}
    if (val == 2) {
      $('#cost').html('&#36; ' + (basicPrice + 50));
      basicPrice = 155;
      $('#lenses option:first').prop('selected', true);}
  });
  $('#lenses').on('change', function () {   
    var val2 = $(this).find('option:selected').val();
    if (val2 == 1) {
      basicPrice;
      $('#cost').html('&#36; ' + basicPrice);}
    if (val2 == 2) {
      basicPrice;
      $('#cost').html('&#36; ' + (basicPrice + 30));}
    if (val2 == 3) {
      basicPrice;
      $('#cost').html('&#36; ' + (basicPrice + 50));}
  });
});

$('#first_faq_section').on('click', function () {
  $('#first_faq_section + label + .faq_text').slideToggle();
});

$('#second_faq_section').on('click', function () {
  $('#second_faq_section + label + .faq_text').slideToggle();
});

$('#third_faq_section').on('click', function () {
  $('#third_faq_section + label + .faq_text').slideToggle();
});