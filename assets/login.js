$(document).ready(function() {


  var animating = false,
      submitPhase1 = 1100,
      submitPhase2 = 400,
      submitPhase3 = 2500,
      logoutPhase1 = 800,
      $login = $(".login"),
      $app = $(".app");

  function ripple(elem, e) {
    $(".ripple").remove();
    var elTop = elem.offset().top,
        elLeft = elem.offset().left,
        x = e.pageX - elLeft,
        y = e.pageY - elTop;
    var $ripple = $("<div class='ripple'></div>");
    $ripple.css({top: y, left: x});
    elem.append($ripple);
  };

  $(document).on("click", ".login__submit", function(e) {
    if ($("#user-name").val() == "admin" && $("#user-pass").val() == "afw2017") {
      if (animating) return;
      animating = true;
      var that = this;
      ripple($(that), e);
      $(that).addClass("processing");
      setTimeout(function() {
        $(that).addClass("success");
        setTimeout(function() {
          $app.show();
          $app.css("top");
          $app.addClass("active");
        }, submitPhase2 - 70);
        setTimeout(function() {
          $login.hide();
          $login.addClass("inactive");
          animating = false;
          $(that).removeClass("success processing");
        }, submitPhase2);
      }, submitPhase1);
      setTimeout(function(){
        window.location.href='main.html'
      }, submitPhase3);
    }
    else {
      $("#user-name").val('');
      $("#user-pass").val('');
    }


  });

  $(document).on("click", ".app__logout", function(e) {
    if (animating) return;
    $(".ripple").remove();
    animating = true;
    var that = this;
    $(that).addClass("clicked");
    setTimeout(function() {
      $app.removeClass("active");
      $login.show();
      $login.css("top");
      $login.removeClass("inactive");
    }, logoutPhase1 - 120);
    setTimeout(function() {
      $app.hide();
      animating = false;
      $(that).removeClass("clicked");
    }, logoutPhase1);
  });

  $('.clickeable').click(function(){
    $('.material-design-hamburger__icon').trigger("click");
  });


  $('#linktoprod').click( function() {
     $('html, body').animate({
          scrollTop: $('#section-produccion').offset().top
     }, 400);
   });
   $('#linktoadm').click( function() {
      $('html, body').animate({
           scrollTop: $('#section-administracion').offset().top
      }, 400);
    });
    $('#linktocrea').click( function() {
       $('html, body').animate({
            scrollTop: $('#section-creativa').offset().top
       }, 400);
     });
     $('#linktoprensa').click( function() {
        $('html, body').animate({
             scrollTop: $('#section-prensa').offset().top
        }, 400);
      });
      $('#linktocomer').click( function() {
         $('html, body').animate({
              scrollTop: $('#section-comercial').offset().top
         }, 400);
       });
       $('#linktodise').click( function() {
          $('html, body').animate({
               scrollTop: $('#section-diseño').offset().top
          }, 400);
        });

        $('.back-to-top').click(function(){
          $('html,body').animate({ scrollTop: 0 }, 400);
     });

     $(window).scroll(function() {
       if ($(window).scrollTop() > 700) {
            $('.back-to-top').addClass('back-to-top-is-visible');
        } else {
            $('.back-to-top').removeClass('back-to-top-is-visible');
        }
    });

    $('#inner-main-opt-1').click(function(){
        $('#inner-main-opt').hide(200);
        $('#inner-1-opt').show(200);
    });
    $('#inner-main-opt-2').click(function(){
        $('#inner-main-opt').hide(200);
        $('#inner-2-opt').show(200);
    });
    $('#inner-main-opt-3').click(function(){
        $('#inner-main-opt').hide(200);
        $('#inner-3-opt').show(200);
    });
    $('#inner-main-opt-4').click(function(){
        $('#inner-main-opt').hide(200);
        $('#inner-4-opt').show(200);
    });
    $('#inner-main-opt-5').click(function(){
        $('#inner-main-opt').hide(200);
        $('#inner-5-opt').show(200);
    });
    $('#inner-main-opt-6').click(function(){
        $('#inner-main-opt').hide(200);
        $('#inner-6-opt').show(200);
    });
    $('#inner-main-opt-7').click(function(){
        $('#inner-main-opt').hide(200);
        $('#inner-7-opt').show(200);
    });
    $('#inner-main-opt-8').click(function(){
        $('#inner-main-opt').hide(200);
        $('#inner-8-opt').show(200);
    });
    $('#inner-main-opt-9').click(function(){
        $('#inner-main-opt').hide(200);
        $('#inner-9-opt').show(200);
    });
    $('#inner-main-opt-10').click(function(){
        $('#inner-main-opt').hide(200);
        $('#inner-10-opt').show(200);
    });
    $('.preview-menu').click(function(){
        $('#inner-main-opt').show(200);
        $('#inner-1-opt').hide(200);
        $('#inner-2-opt').hide(200);
        $('#inner-3-opt').hide(200);
        $('#inner-4-opt').hide(200);
        $('#inner-5-opt').hide(200);
        $('#inner-6-opt').hide(200);
        $('#inner-7-opt').hide(200);
        $('#inner-8-opt').hide(200);
        $('#inner-9-opt').hide(200);
        $('#inner-10-opt').hide(200);
    });


});
