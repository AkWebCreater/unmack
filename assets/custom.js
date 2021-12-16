//########################## make my own box age #####################
$(document).ready(function () {
    // add items to cart
    $(document).on('click', '.add-combo-in-cart', function() {
      var $products = $('.combo-products-grid').children();
  var total = $products.length
      $products.each(function(index){
        var id = $(this).find('[data-var-id]').attr("data-var-id")
        var qt = $(this).find('.qtn').text();
        addToCart(qt, id)
      })
      $('.overlay-own-box').show();
      $('.cart-success-alert').removeClass('closed');
      $('body.make-own-box').addClass('blocked')
    })
    // end
    $('.overlay-own-box').click(function(){
      $(this).hide();
      $('.cart-success-alert').addClass('closed');
      $('body.make-own-box').removeClass('blocked')
    })
    $('.cart-success-alert .close').click(function(){
      $('.overlay-own-box').hide();
      $('.cart-success-alert').addClass('closed');
      $('body.make-own-box').removeClass('blocked')
    })
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
      // combo slider
      $('.products-slider .slider').slick({
        centerMode: true,
        slidesToShow: 4,
        arrows: true,
        nextArrow: '<span  class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></span>',
        prevArrow: '<span  class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
        // adaptiveHeight: true,
        slidesToScroll: 1,
        responsive: [{
          breakpoint: 767,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              adaptiveHeight: true,
          },
      }]
    }).on("setPosition", function() {
        resizeSlider();
    });
  
    $(window).on("resize", function(e) {
        resizeSlider();
    });
  
  
    var slickHeight = $(".products-slider .slick-track").height();
  
    var slideHeight = $(".slick-track").find(".slick-slide").outerHeight();
  
    function resizeSlider() {
        $(".slick-track")
            .find(".slick-slide .pro-wrapper")
            // deducted height of ssw wishlist icon '24' for avoiding extra height
            .css("height", (slickHeight - 24) + "px");
    }
    // end

      // add prodcut to combo grid on add btn click
  $('.product-slider .add-btn').click(function() {
    var productHtm = $(this).closest('.product-item').clone();
    var index  = $(this).closest('.product-item').attr('data-index');
    var qnt = parseInt($(this).closest('.product-item').find('.qtn').text());
    $('.empty-text').remove();
    if($('.combo-products-grid [data-index='+ index +']').length ){
      var oldQtn = parseInt($('.combo-products-grid [data-index='+ index +']').find('.qtn').text());
      var newQtn = oldQtn+qnt;
      $('.combo-products-grid [data-index='+ index +']').find('.qtn').text(newQtn);
      priceUpadte()
    }else{

      $('.combo-products-grid').append(productHtm);
      $('.combo-wrapper').removeClass('empty');
      priceUpadte()
    }
})
// end
  // plus minus function
  $(document).on('click','.minus',function(){
    var qt =  $(this).parent().find('.qtn').text();
    var qtn = parseInt(qt);
    if (qtn > 1){
     qtn -= 1;
    } 
    $(this).parent().find('.qtn').text(qtn);
    priceUpadte()
   })
   $(document).on('click','.plus',function(){
     var qt =  $(this).parent().find('.qtn').text();
     var qtn = parseInt(qt);
      qtn += 1;
      $(this).parent().find('.qtn').text(qtn);
      priceUpadte()
    })
     // end
       // remove item on click remove BTN
  $(document).on('click', '.remove-btn', function() {
    $(this).closest('.product-item').remove();
    setTimeout(() => {
        priceUpadte()
    }, 100)
    if ($('.combo-products-grid .product-item').length == 0) {
        // do something
        $('.combo-wrapper').addClass('empty')
        $('.combo-products-grid').html('<span class="empty-text">you have not selected any product</span>')
    }

})
// end
})
// ################### make my own box page ends here #######################


$(document).ready(function() {
  // product page sliders
  setTimeout(() => {
      $('.product-recommendations .grid').slick({
          dots: false,
          arrows: true,
          nextArrow: '<span  class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></span>',
          prevArrow: '<span  class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
          infinite: true,
          speed: 300,
          slidesToShow: 4,
          slidesToScroll: 1,
          responsive: [{
              breakpoint: 750,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  adaptiveHeight: true,
              },
          }]
      })
  }, 3000)
  // product page slider end


  // product range slider home page
  $('.product-range-slider ul').slick({
      slidesToShow: 6,
      arrows: true,
      nextArrow: '<span  class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></span>',
      prevArrow: '<span  class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
      adaptiveHeight: true,
      slidesToScroll: 1,
      responsive: [{
              breakpoint: 1024,
              settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  adaptiveHeight: true,
              },
          },
          {
              breakpoint: 750,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  adaptiveHeight: true,
              },
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
              },
          },
      ]
  })
  // product range slider end here

  // Umanac Journey year section js
  $('.journey-products').slick({
      slidesToShow: 1,
      arrows: false,
      adaptiveHeight: true,
      slidesToScroll: 1
  })
  //  year slide Click 
  var sec = $('.up-sec .section-images-wrapper');
  var h = sec.find('.active').height();
  sec.height(h);
  $('.year-slide').click(function() {
      var index = $(this).find('.year-img').attr('data-index');
      $('.journey-products').slick('slickGoTo', index - 1);
      $(this).find('.year').addClass('accent')
      $(this).siblings().find('.year').removeClass('accent')
      $(this).addClass('active')
      $(this).siblings().removeClass('active')
      $(this).siblings().removeClass('initial')
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
function addToCart(qnt, id,Callback) {
  console.log(qnt);
  console.log(id);
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
          if(Callback != null){
            Callback();
          }

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
$(document).on('click', '#bulk-button', function() {
  $('.ingredients-inner .grid__item').each(function() {
      var id = $(this).find('.var-id').attr("data-var-id")
      alert(id)
      addToCart(1, id)
  })

})
// gift wrap option
$('.gift-wrap-outer .regular-checkbox').click(function() {
    
    var wrapped = localStorage.getItem('gift-wrap');
    if(wrapped == null){
        alert('added')
        addToCart(1, 41362268422344)
        localStorage.setItem('gift-wrap','wrap');
    }else{
        alert('removed')
        localStorage.removeItem("gift-wrap");
        $.ajax({
            type: 'POST',
            url: '/cart/update.js',
            dataType: 'json',
            data: {
                quantity: 0,
                id: 7182965473480
            }
        })
    }
})
// ends here 
// faq page pop up layer

$(document).ready(function() {

  $('.card-btn').click(function(e) {
      e.preventDefault();
      $(this).closest('.bottom-card').find('.popup-layer').addClass('open');
      $('body').addClass('scroll-block')
      $(this).closest('.bottom-card').find('.overlay').addClass('open');
  })
  $(document).on('click', '.overlay', function(e) {
    $(this).removeClass('open');
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
      loginpopupToggle('icon')
  })
  $('.overlay-1,.close-popup').click(function(){
    loginpopupToggle('close')
  })
  $('.login-header span').click(function() {
      $(this).addClass('accent');
      $(this).siblings().removeClass('accent')
  })
  function loginpopupToggle(target) {
    if(target == 'icon'){
      $('.overlay-1').toggle();
      $('body').toggleClass('blocked');
      $('.loginpopup').toggle();
    }else{
      $('.loginpopup').hide();
      $('.overlay-1').hide();
      $('body').removeClass('blocked');
    }
  }
  // customer ragister toggle
  $('#signup ,.sign-up-link').click(function () {
    $('.customer.register').slideDown();
    $('.customer.login').stop().slideUp();
    $('.already-account').show();
})
$('#login,.login-link').click(function () {
    $('.customer.login').slideDown();
    $('.customer.register').stop().slideUp();
    $('.already-account').hide();

  })
  // login popup Header end

  // best seller section slider

  $('.best-seller-collection-grid-wrapper').slick({
      dots: false,
      arrows: false,
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
  $('.best-seller-collection-grid-wrapper .slick-arrow').on('click', function() {
      var currentIndex = $('.best-seller-collection-grid-wrapper .slick-current').attr('data-index');
      console.log('currentIndex = ' + currentIndex)
      $('.best-seller-nav span[data-index=' + currentIndex + ']').addClass('add-border').siblings().removeClass('add-border');
      console.log('AftercurrentIndex = ' + currentIndex)
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
      localStorage.setItem("popup-web", 'shown')
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
//   login popup pass toggle on eye button click
$('.pass').click(function() {
    $(this).toggleClass('crossed');
    var type = $(this).next().attr('type');
    if(type == 'text'){
        $(this).next().attr('type','password');
   
    }else{
        $(this).next().attr('type','text');
    }
})
  // background added to fix nav on scroll
  $('.body--register .header-wrapper,.body--search .header-wrapper,.about-us .header-wrapper').addClass('fix')
  $(window).scroll(function() {
      if ($(this).scrollTop() > 115) {
          $(".navigation").addClass("bg");
     

      } else {
          $(".navigation").removeClass("bg");
  
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
})

function priceUpadte() {
  var price = 0;
  $('.combo-products-grid .product-item').each(function() {

    if(parseInt($(this).find('.qtn').text()) > 1){
  var cprice = parseInt($(this).find('.main-price').attr('data-price')) * parseInt($(this).find('.qtn').text()) ;

}else{
  var cprice = $(this).find('.main-price').attr('data-price') ;
}
      var acprice = parseInt(cprice);
      price += acprice
  })
  var moneyprice = '₹' + price / 100

  $('.combo-price-details .pack-price').html(moneyprice)
  $('.combo-price-details .total-amount').html(moneyprice)
}
// custome select list

/*
Reference: http://jsfiddle.net/BB3JK/47/
*/

$('.custome-select').each(function(){
  var $this = $(this), numberOfOptions = $(this).children('option').length;

  $this.addClass('select-hidden'); 
  $this.wrap('<div class="select"></div>');
  $this.after('<div class="select-styled"></div>');

  var $styledSelect = $this.next('div.select-styled');
  $styledSelect.text($this.children('option').eq(0).text());

  var $list = $('<ul />', {
      'class': 'select-options'
  }).insertAfter($styledSelect);

  for (var i = 0; i < numberOfOptions; i++) {
      $('<li />', {
          text: $this.children('option').eq(i).text(),
          rel: $this.children('option').eq(i).val()
      }).appendTo($list);
  }

  var $listItems = $list.children('li');

  $styledSelect.click(function(e) {
      e.stopPropagation();
      $('div.select-styled.active').not(this).each(function(){
          $(this).removeClass('active').next('ul.select-options').hide();
      });
      $(this).toggleClass('active').next('ul.select-options').toggle();
  });

  $listItems.click(function(e) {
      e.stopPropagation();
      $styledSelect.text($(this).text()).removeClass('active');
      $this.val($(this).attr('rel'));
      $list.hide();
      //console.log($this.val());
  });

  $(document).click(function() {
      $styledSelect.removeClass('active');
      $list.hide();
  });

});

// countdown timer for deals of day collection page
(function() {
  const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;
  var offerTime = document.getElementById("offer-time").innerText
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