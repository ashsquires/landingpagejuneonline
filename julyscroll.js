$(document).ready(() => {

  function visfunc() {
    $(" .vislist ").children().each(function(index) {
      $( this ).delay(80*index).animate({
        opacity: 1,
        marginTop: "0px" })
    });
  }

  var controller = new ScrollMagic.Controller();

  var licasc = new ScrollMagic.Scene({
    triggerElement: '#vistit',
    triggerHook: 0.5
  })
  .on('start', function () {
    $(" .vislist ").children().each(function(index) {
      $( this ).delay(80*index).animate({
        opacity: 1,
        marginTop: "0px" })
    });
  })
  .addTo(controller);

  var mobcirc = new ScrollMagic.Scene({
    triggerElement: '#circle1',
    triggerHook: 0.8
  })
  .on('start', function () {
    $(' #circle2 ').animate({
      height: "150px",
      width: "150px",
    }, 450, 'linear');
    $(' #circle3 ').animate({
      height: "200px",
      width: "200px",
    }, 800);
    $(' #circle1 ').animate({
      height: "90px",
      width: "90px",
    }, 400);
  })
  .addTo(controller);
});
