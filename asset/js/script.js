const next = () =>{
    console.log('click next');
    const next = document.getElementById('next')
    const prev = document.getElementById('prev')
        next.style.background="#18A7B9";
        next.style.color="#fff"
        prev.style.background="#fff";
        prev.style.color="#000"
  
    
}
const prev = () =>{
    const next = document.getElementById('next');
    const prev = document.getElementById('prev');
        prev.style.background="#18A7B9";
        prev.style.color="#fff"
        next.style.background="#fff";
        next.style.color="#000"
   
}

$(function(){
    'use strict'

  $('.slider').slick({
        slidesToShow: 1,
      slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    fade: true,
                    speed: 2000,
                    cssEase: 'linear',
                    arrows: false,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
  });
    

      var navOff = $('.navigation').offset().top;

      $(window).scroll(function () {
  
          var scrolling = $(this).scrollTop();
  
          if (scrolling > navOff) {
              $('.navigation').addClass('manu-fix');
          } else {
              $('.navigation').removeClass('manu-fix');
          }
      });
//       //skill slider
//     //   var hg=<>
//     //     <img src="../image/graph/Vector 11.png"/>
//     //   </>

      $('.logos').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
          arrows: false,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    });
    
      $('.slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
         arrows: true,
        nextArrow: '<i id="next" onclick="next()" class="fa-solid fa-arrow-right-long net-arrow"></i>',
        prevArrow: '<i id="prev" onclick="prev()" class="fa-solid fa-arrow-left-long pre-arrow"></i>',
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    });
    
//     //back to top
    $('.back-to-top').click(function () {
        $('html,body').animate({
            scrollTop: 0,
        });
    });

    $(window).scroll(function () {
        var scrolling2 = $(this).scrollTop();

        if (scrolling2 > 150) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut()
        }
    });
    
//     $(document).ready(function(){
//         $('.counter').counterUp({
//                 delay: 10,
//                 time: 1000
//             });
//     });
//     //box scroll

//     $(document).ready(function () {

//         // var nice = $("html").niceScroll(); // The document page (body)
  
        
  
//         $("#boxscroll").niceScroll({
//           cursorborder: "",
//           cursorcolor: "#00F",
//           boxzoom: true
//         }); // First scrollable DIV
  
       
//       });
});