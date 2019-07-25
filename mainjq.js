$(document).ready(() => {

  $('#topim').animate({
    'marginTop' : '-=40px',
    'opacity' : '1'
  }, 1200);;
  console.log('ready');

  const $inputtext = $(".inputfield");
  const $submitbutton = $(".submitem");
  let submittedalready = false;



  $inputtext.focus( (event) => {
    $('.inputfield').addClass('input-active');
    console.log("click in field");
  })

  $inputtext.blur( () => {
    $('.inputfield').removeClass('input-active');
    console.log("click in field")
  })

  $inputtext.keydown( (event) => {
    $('.inputfield').addClass('input-active-text');
  })

  $inputtext.keyup( (event) => {
    if ($(event.currentTarget).val() === '') {
      $('.submitem').removeClass('sub-active');
      console.log("is empty")
    }
    let str = $(event.currentTarget).val()
    if (str.indexOf("@") >= 0) {
      $('.submitem').addClass('sub-active');
    } else {
      $('.submitem').removeClass('sub-active');
    }
  });

  /*$submitbutton.on('click', (event) => {
    let act = $(event.currentTarget).attr("class");
    if (act.indexOf("sub-active") >= 0) {
      $('.success-wrap').fadeIn(400);
      submittedalready = true;
    };
  });*/

  $submitbutton.on('click', (event) => {
    let act = $(event.currentTarget).attr("class");
    let id = $(event.currentTarget).attr("id");
    if (act.indexOf("sub-active") >= 0) {
      if (id === "top") {
        $('.top').fadeIn(400);
        submittedalready = true;
      } else {
        $('.bot').fadeIn(400);
        submittedalready = true;
      }
    };
  });

  console.log("here");
  let $p1pic = $('#product-image');
  let $p2pic = $('#product-image2');
  let $p3pic = $('#product-image3');

  let $p1text = $('#d-login');
  let $p2text = $('#d-purchase');
  let $p3text = $('#d-earn');



  $(".dtext").on('mouseenter', (event) => {
    if($(window).width() > 768){
      if (($(event.currentTarget).attr('id')) === "d-login") {
      $p1pic.fadeIn("fast");
      $p2pic.hide();
      $p3pic.hide();
      $p2text.removeClass('d-active');
      $p2text.find('h2').removeClass('dtexth2-act');
      $p2text.find('p').removeClass('d-arrow-act');
      $p3text.removeClass('d-active');
      $p3text.find('h2').removeClass('dtexth2-finish');
      } else if (($(event.currentTarget).attr('id')) === "d-purchase") {
        $p1pic.hide();
        $p2pic.fadeIn("fast");
        $p3pic.hide();
        $p2text.addClass('d-active');
        $p2text.find('h2').addClass('dtexth2-act');
        $p2text.find('p').addClass('d-arrow-act');
        $p3text.removeClass('d-active');
        $p3text.find('h2').removeClass('dtexth2-finish');
      } else if (($(event.currentTarget).attr('id')) === "d-earn") {
        $p1pic.hide();
        $p2pic.hide();
        $p3pic.fadeIn("fast");
        $p2text.addClass('d-active');
        $p2text.find('h2').addClass('dtexth2-act');
        $p2text.find('p').addClass('d-arrow-act');
        $p3text.addClass('d-active');
        $p3text.find('h2').addClass('dtexth2-finish');
      }
    }

  });


  /*const scrollToFunc = (where) => {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(where).offset().top
    }, 1000);
    console.log('already scrolled');
  };

  $("#accesslink").on('click', scrollToFunc("#request"));

  $("#mobileaccess").on('click', scrollToFunc("#request"));*/

  $("#productlink").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#products").offset().top
    }, 1000);
  });

  $("#mobileaccess").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#request").offset().top
    }, 1000);
  });

  $( ".lmtile" ).on('mouseenter', (event) => {
    let $arrow = $(event.currentTarget).find('#lm-arrow');
    let $progress = $(event.currentTarget).find('.tile-progress');
    $arrow.animate({
      marginLeft: "18px",
    }, 300);
    $progress.animate({
      width: "100%",
    }, 300);
  });

  $( ".lmtile" ).on('mouseleave', (event) => {
    let $arrow = $(event.currentTarget).find('#lm-arrow');
    let $progress = $(event.currentTarget).find('.tile-progress');
    $arrow.animate({
      marginLeft: "12px",
    }, 300);
    $progress.animate({
      width: "0%",
    }, 300);
  });

  $('#hamburger').click(() => {
    if($(" .mobile-menu-container ").is(":hidden")){
      $(' .hamburger ').toggleClass(' is-active ');
      $('.mobile-menu-container').slideToggle('slow');
      $('#intercom-container').hide();
    } else {
      $(' .hamburger ').toggleClass(' is-active ');
      $('.mobile-menu-container').slideToggle('slow');
      $('#intercom-container').show();
    }
  });

  $('#openchat').click(() => {
    $('#intercom-container').show();
  });

  $(window).resize(function(){
    if($(window).width() > 768) {
      $(" .mobile-menu-container").hide();
      $(' .hamburger ').removeClass(' is-active ');
      $('#intercom-container').show();
      $(' .modulecenter ').removeClass('paraline-center');
    } else {
      $(' .modulecenter ').addClass('paraline-center');
      $p2text.addClass('d-active');
      $p2text.find('h2').addClass('dtexth2-act');
      $p2text.find('p').addClass('d-arrow-act');
      $p3text.addClass('d-active');
      $p3text.find('h2').addClass('dtexth2-finish');
    }
  });

  $(' #circle1 ').on('click', () => {
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
  });

  if($(window).width() < 768){
    $(' .modulecenter ').addClass('paraline-center');
    $p2text.addClass('d-active');
    $p2text.find('h2').addClass('dtexth2-act');
    $p2text.find('p').addClass('d-arrow-act');
    $p3text.addClass('d-active');
    $p3text.find('h2').addClass('dtexth2-finish');
  };













});
