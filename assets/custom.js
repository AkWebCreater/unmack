
$(document).ready(function() {
// product page sliders
setTimeout(()=>{  $('.product-recommendations .grid').slick({
  dots: false,
  arrows: true,
  nextArrow: '<span  class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></span>',
  prevArrow: '<span  class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
      },
    }
  ]
})},3000)
// product page slider end

// Umanac Journey year section js
  $('.journey-products').slick(
    {
      slidesToShow: 1,
      arrows:false,
      adaptiveHeight: true,
      slidesToScroll: 1
   }
   )
  //  year slide Click 
  $('.year-slide').click(function() {
    var index = $(this).find('.year-img').attr('data-index');
    $('.journey-products').slick('slickGoTo', index - 1);
    $(this).find('.year').addClass('accent')
    $(this).siblings().find('.year').removeClass('accent')
    $(this).addClass('active')
    $(this).siblings().removeClass('active')
})
// end here

// custome js for gift wrap button -- check form input on chekout click if outer cechekbox checked
$('.cart__ctas').click(function() {
      if ($('.gift-wrap-outer input.regular-checkbox').is(":checked")) {
          $(".gift-wrap-form input.regular-checkbox").prop("checked", true);
      }
  })
})

// empty cart other items hide
var empt = $('.cart--wrapper.is-empty').length;
if (empt) {
  $('.cart__footer-wrapper').hide();
}

// custom add t cart
function addToCart(qnt, id) {
  $.ajax({
      type: 'POST',
      url: '/cart/add.js',
      async: false,
      data: {
          quantity: qnt,
          id: id
      },
      dataType: 'json',
      success: function(data) {
          //           $('#CartCount span:first').text(data.quantity);
          console.log(data.quantity);

      }
  });
}
// add cart
$(document).on('click', '.add-cart', function() {
  var product = $(this).parent();
  var id = product.find('.var-id').data("var-id")
  addToCart(1, id)
})
// bulk add
$(document).on('click', '#bulk-add-button', function() {
  $('.ingredients-inner .grid__item').each(function() {
      var id = $(this).find('.var-id').data("var-id")
      addToCart(1, id)
  })

})

// faq page pop up layer

$(document).ready(function() {

  $('.card-btn').click(function(e) {
      e.preventDefault();
      $('.popup-layer').addClass('open');
      $('body').addClass('scroll-block')
  })
  $(document).on('click', '.overlay', function(e) {

      $('.popup-layer').removeClass('open');
      $('body').removeClass('scroll-block');
  })
  // question answer toggle js on FAQ Page
  $(".answer").hide();
  $('.question').click(function() {
      $(this).next().slideToggle()
      $(this).toggleClass('open')
  })

  // account page popup 

  if ($(window).width() < 750) {
      $('.account-sidebar [data-popup-name]').click(function() {
          $('.account-sidebar [data-popup-name]').removeClass('active')
          $(this).addClass('active');
          $(this).siblings().removeClass('active');
          $('.account-sidebar .popup').slideUp();
          // var popup = $(this).find('.popup');
          //  var  popup = $("[data-popup="+p+"]");
          $(this).next().stop().slideDown();
      })
  } else {
      $('.account-sidebar [data-popup-name]').click(function() {
          $('.account-sidebar [data-popup-name]').removeClass('active')
          $(this).addClass('active');
          var p = $(this).attr('data-popup-name');
          var popup = $("[data-popup=" + p + "]");
          popup.addClass('open');
          popup.siblings().removeClass('open');
      })
  }
  // login popup Header
  $('.header__icon--account').click(function(e) {
      e.preventDefault();
      $('.loginpopup').stop().toggle();
  })
  $('.close-popup').click(function() {
      $(this).closest('.loginpopup').hide()
      // $(this).closest('')
  })
  $('.login-header span').click(function() {
      $(this).addClass('accent');
      $(this).sibling().removeClass('accent')
  })
  // login popup Header end

  // best seller section slider

  $('.best-seller-collection-grid-wrapper').slick({
    dots: false,
    arrows:false,
    infinite: true,
    speed: 300,
    arrows: true,
    nextArrow: '<span  class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></span>',
    prevArrow: '<span  class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
    slidesToScroll: 1,
    slidesToShow: 1
  });

   $('.best-seller-nav span').click(function(e) {
     e.preventDefault();
     var slideno = $(this).attr('data-index');
     $('.best-seller-collection-grid-wrapper').slick('slickGoTo', slideno - 1);
     $(this).addClass('add-border').siblings().removeClass('add-border')
   });
$('.best-seller-collection-grid-wrapper .slick-arrow').on('click',function(){
  var currentIndex = $('.best-seller-collection-grid-wrapper .slick-current').attr('data-index');
  console.log('currentIndex = '+currentIndex)
  $('.best-seller-nav span[data-index='+ currentIndex +']').addClass('add-border').siblings().removeClass('add-border');
  console.log('AftercurrentIndex = '+currentIndex)
})
  // website popup homepage
  if (localStorage.getItem("popup-web") === null) {
    //...
    window.onload = setTimeout(() => {
      $('.website-popup').show()
  }, 3000)
  }

  $('.website-popup .close').click(function() {
      $(this).closest('.website-popup').hide();
      localStorage.setItem("popup-web",'shown')
  })
  if ($(window).width() < 750) {
      $('.wrapper-inner').slick({
          dots: false,
          arrows: true,
          nextArrow: '<span  class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></span>',
          prevArrow: '<span  class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
          infinite: true,
          variableWidth: true,
          speed: 300,
          slidesToShow: 1,
          slidesToScroll: 1
      });
  }
  // background added to fix nav on scroll
  $('.body--cart .header-wrapper,.body--register .header-wrapper,.body--search .header-wrapper,.about-us .header-wrapper').addClass('fix')
  $(window).scroll(function() {
      if ($(this).scrollTop() > 200) {
          $(".navigation").addClass("bg");
          $('.body--cart .header-wrapper').removeClass('fix')

      } else {
          $(".navigation").removeClass("bg");
          $('.body--cart .header-wrapper').addClass('fix')
      }
  })
  // product megamenu toggle
  $('.list-menu__item').hover(function() {

      if ($(this).next().children().length < 4) {
          $(this).next().addClass('min');
      }
      $(this).next().addClass('open');
      $(this).parent().siblings().find('.product-popup-menu').removeClass('open');

  })
  // own box page 
  // slider and accordian
  $('.main-wrapper .accordian').hide();

  $('.main-wrapper .tab').click(function() {
      $('.tab').removeClass('active');
      $('.main-wrapper .accordian').slideUp();
      $(this).toggleClass('active');
      $(this).next().stop().slideToggle();
      $(this).next().find('.product-slider').slick({
          arrows: true,
          infinite: true,
          speed: 300,
          nextArrow: '<span  class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></span>',
          prevArrow: '<span  class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
          slidesToShow: 3,
          slidesToScroll: 1
      });
  })
  // end
  // making combo product grid on product selection from product slider 
  // price update function
 
// price update function end
// add prodcut to combo grid on add btn click
  $('.product-slider .add-btn').click(function() {
      var productHtm = $(this).closest('.product-item').clone();
      $('.empty-text').remove();
      $('.combo-products-grid').append(productHtm);
      $('.combo-wrapper').removeClass('empty');
      priceUpadte()
  })
  // end
  // remove item on click remove BTN
  $(document).on('click','.remove-btn',function() {
      $(this).closest('.product-item').remove();
      setTimeout(()=>{priceUpadte()},100)
      if ($('.combo-products-grid .product-item').length == 0) {
        // do something
        $('.combo-wrapper').addClass('empty')
        $('.combo-products-grid').html('<span class="empty-text">you have not selected any product</span>')
    }
      
  })
  // end
})
function priceUpadte() {
  var price = 0 ;
  $('.combo-products-grid .product-item').each(function(){

   var cprice = $(this).find('.main-price').attr('data-price');
   
  var acprice = parseInt(cprice);
  price+=acprice
})
var moneyprice = '₹'+price/100

  $('.combo-price-details .pack-price').html(moneyprice)
  $('.combo-price-details .total-amount').html(moneyprice)
}

// countdown timer for deals of day collection page
(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
  var offerTime  =  document.getElementById("offer-time").innerText
  const countDown = new Date(offerTime).getTime(),
      x = setInterval(function() {    

        const now = new Date().getTime(),
              distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
          document.getElementById("headline").innerText = "Offer Gone";
          document.getElementById("countdown").style.display = "none";
          document.getElementById("content").style.display = "block";
          clearInterval(x);
        }
        //seconds
      }, 0)
  }()); 