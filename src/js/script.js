$(document).ready(function () {

  //Popup
  $('.application__btn').click(function (event) {
    event.preventDefault();
    $('.popup').removeClass('hidden');
    $('.overlay').removeClass('hidden');
  });
  $('.popup__close').click(function (event) {
    event.preventDefault();
    $('.popup').addClass('hidden');
    $('.overlay').addClass('hidden');
  });

});