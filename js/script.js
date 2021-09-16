$(document).ready(function(){
  $("#menuicon").click(function(){
    $(this).toggleClass('fa-times');
    $('.bar').toggleClass('nav-toggle');
})    
    $("#btn-right").click(function(){
        $(".about .content span").slideDown();
        $("#btn-right").slideUp();
    });
    $("#btn-up").click(function(){
        $(".about .content span").slideUp();
        $("#btn-right").slideDown();
    });
    
   
$("#showphotos").click(function(){
    $(".photos .content2").fadeIn(1200).css({"display":"flex"})
    $("#showphotos").hide();
});


$("#seemore").click(function(){
  $("html,body").animate({
      scrollTop:$("#info").offset().top
  },1000);    })

$("#play").click(function(){
  $("#pause").show();
  $("#play").hide();
  $(".video").show();
})
$("#pause").click(function(){
  $("#play").show();
  $("#pause").hide();
  $("video").pause()
})
$("#closevideo").click(function(){
  $(".video").hide();
  $("#play").show();
  $("#pause").hide();
  
})
    $(window).on('load scroll',function(){
    if(scrollY >= 100){
        $("header").css({"background-color":"#00000085","box-shadow": "1px 2px 3px 3px #00000085"})
    } 
    else{
        $("header").css({"background-color":"transparent","box-shadow":"none"})
    }
    
    
    $('section').each(function(){
    
        let top = $(window).scrollTop();
        let   height = $(this).height();
        let   id = $(this).attr('id');
        let    offset = $(this).offset().top - 200;

        if(top > offset && top < offset + height){
            $('.bar ul li a').removeClass('active');
            $('.bar').find(`[href="#${id}"]`).addClass('active');
        }
       
    });
    
    
});


    $('.gallery').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1,
        autoplay:true,
        autoplaySpeed: 3000,
        nextArrow: $("#next"),
        prevArrow: $("#prev"),
        responsive: [
          {
            breakpoint: 768,
            settings: {
                nextArrow: $("#next"),
                prevArrow: $("#prev"),
              centerMode: true,
              centerPadding: '60px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
                nextArrow: $("#next"),
                prevArrow: $("#prev"),
              centerMode: true,
              centerPadding: '60px',
              slidesToShow: 1
            }
          }
        ]
      });
      $(".num").counterUp({delay: 20,time: 2000})      
      })
