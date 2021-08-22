$(document).ready(function(){
    $("header .wrap .menu >  ul > li").hover(function(){
        $(this).find("ul").stop().slideDown();
        return false;
    }, function(){
        $(this).find("ul").stop().slideUp();

        return false;
    });

    $("#main .cont .slick").slick({
        draggable: true,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        dots: false,
        fade: true,
        speed: 2000,
        infinite: true,
        cssEase: 'ease-in-out',
        touchThreshold: 100,
        pauseOnHover : false,

        // prevArrow: true,
        // nextArrow: true
    });

    var speed=300

    $("header .menu_bar").click(function(){
      if($("header .gnb_mobile").hasClass("on")){
      $("header .gnb_mobile").removeClass("on");
      $("header .gnb_mobile").stop().fadeOut(speed);
      $("header .bg").removeClass("on");
      }else{
      $("header .gnb_mobile").addClass("on");
      $("header .gnb_mobile").stop().fadeIn(speed).css("opacity",1);
      $("header .bg").addClass("on");
      }
    });
    
    
    $("header .menu_mobile > ul > li").click(function(){
        $(this).find("ul").stop().finish().slideToggle(300);
        if($(this).hasClass("on")){
        $(this).removeClass("on");
        
        }else{
        $(this).addClass("on");
        
        }
        
    //   $(this).css("background-color", "#000");
    });

    $("header .gnb_mobile .close, header .bg").click(function(){
        $("header .gnb_mobile").removeClass("on");
        $("header .gnb_mobile").stop().fadeOut(speed);
        $("header .bg").removeClass("on");
    });


})