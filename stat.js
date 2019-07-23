$(document).ready(() => {

  console.log('readystat');

  const $unidec = $("#unidec");
  const $abar = $("#abar");
  const $dup = $("#dup");
  const $off = $("#off");
  const $slo = $("#slo");

  let whatswrong = [$unidec, $abar, $dup, $off, $slo];

  $('.b1').on('click', (event) => {
    $.each([$unidec, $abar, $dup, $off, $slo], function(i,l) {
      if (l.hasClass("badlistactive")) {
        l.removeClass("badlistactive");
        l.addClass("badlistidol");
      }
    })

    let tdog = $(event.currentTarget);
    console.log(event.currentTarget);
    tdog.removeClass( "badlistidol" )
    tdog.addClass( "badlistactive" );
  });

  $('#solutions').on('click', ()=> {
    $('.nav-dropdown').fadeIn();
  })

  $('#solutions').on('mouseover', ()=> {
    $('.nav-dropdown').fadeIn();
  })

  $('.nav-dropdown').on('mouseover', ()=> {
    $('.nav-dropdown').fadeIn();
  })

  $('.mousenav').on('mouseover', ()=> {
    $('.nav-dropdown').fadeIn();
  })

  $('#solutions').on('mouseleave', ()=> {
    $('.nav-dropdown').fadeOut();
  })


});
