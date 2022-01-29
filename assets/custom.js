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
// account logged in page edit address
$('.btnEdit').click(function(){
//                    alert('hi')
    // $(this).parent('li').siblings().find('div[id]').slideDown();
    $(this).parent('li').siblings().find('[aria-expanded="true"]').attr("aria-expanded",false);
    $(this).attr("aria-expanded",true);
    $(this).parent('ul').siblings().find('[aria-expanded="true"]').attr("aria-expanded",false);
})
$('.BtnSave').click(function(){
                   var trag = $(this).attr('data-target');
    // $(this).parent('li').siblings().find('div[id]').slideDown();
    $(this).closest('[data-address]').find('[aria-expanded="true"]').attr("aria-expanded",false);;
             Shopify.postLink(trag, {
         parameters: { _method: 'delete' },
                   success:  function(){
                   window.location.href = 'https://umanacshop.myshopify.com/account'
                   }       
                   }); 
                   
})

$('.addNewAdd1').hide();
                   $('.addNewAdd > .btnEdit').click(function(){
                   $('.addNewAdd1').stop().toggle();
                   })
                   $('.addNewAdd .BtnSave').click(function(e){
                   e.preventDefault()
                   $('.addNewAdd1').hide();
                   })                   
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
      addToCart(1, id)
  })

})
// 
// gift wrap option
var wrapped = localStorage.getItem('gift-wrap');
// check on document load if gift wrap checked
if(wrapped == null){
    if($('.gift-wrap-outer .regular-checkbox').length){

        $('.gift-wrap-outer .regular-checkbox')[0].checked = false ;
        $('.gift-wrap').hide()
    }
}else{
    $('.gift-wrap').show()
    if($('.gift-wrap-outer .regular-checkbox').length){
        $('.gift-wrap-outer .regular-checkbox')[0].checked = true;
        setTimeout(()=>{
            $.ajax({
                url: '/cart.js',
                dataType: 'json'
                })
                .done(function(data){
                    var nprice = data.total_price - 2000;
                    console.log(nprice)
                    var nsPrice = Shopify.formatMoney(nprice, "₹{{amount}}");
                var newCount = Shopify.formatMoney(data.total_price, "₹{{amount}}");
                $('.totals .totals__subtotal-value').text(newCount)
                $('.cart__footer .price .items-price').text(nsPrice)
                });
        },3000)
    }

}
// remove gift wrap from cart if cart is empty 

$(document).on('click','cart-remove-button',function(){

    if($('cart-remove-button').length == 1 ){

        $('.gift-wrap').hide()
        localStorage.removeItem("gift-wrap");
        $.ajax({
            type: 'POST',
            url: '/cart/change.js',
            dataType: 'json',
            data: {
                quantity:0,
                id:41362268422344
            },
            success:function(data){
                console.log('gift wrap removed')
            }
        })
    }
})
// counterUp Funtion for home map section
//#region - start of - number counter animation
const counterAnim = (qSelector, start = 0, duration = 2000) => {
    var html_list = document.querySelectorAll(qSelector); // returns NodeList
var html_array = [...html_list]; // converts NodeList to Array
// run function on each element
html_array.forEach(counter => {
    const target = counter;
    var end = parseInt(counter.getAttribute('data-number'));
    let startTimestamp = null;
    const step = (timestamp) => {
     if (!startTimestamp) startTimestamp = timestamp;
     const progress = Math.min((timestamp - startTimestamp) / duration, 1);
     target.innerText = Math.floor(progress * (end - start) + start);
     if (progress < 1) {
      window.requestAnimationFrame(step);
     }
    };
    window.requestAnimationFrame(step);
    });
    
   };

var win = $(window)
var counter1 = $('.num-animation-wrtapper');
if(counter1.length){
    var counterPlus = counter1.offset().top + counter1.height();
win.on('scroll',function() {
    var windowScrollBottom1 = win.scrollTop() + win.height();  
   
       if(Math.floor(counter1.offset().top) + Math.floor(counter1.height()) < windowScrollBottom1) {
        counterAnim('.counter', 0);
     win.off('scroll')
       }
    });
}
// ens here
// add proviniance from country select box  for contact form 

var country = $('#country');
var proviniance = $('#proviniance');
var provinianceData = country.find(':selected').attr('data-provinces');

if(proviniance.length){
    crateProvinianceOption(provinianceData)
function crateProvinianceOption(provinianceData) {
    var provinianceDataArr = JSON.parse(provinianceData)
    for (var i = 0; i < provinianceDataArr.length; i++) {
        var optn = provinianceDataArr[i][0];
        var el = document.createElement("option");
        el.textContent = optn;
        // el.value = optn;
        proviniance.append(el);
    }
    
}
country.on('change',function(){
    var provinianceData1 = country.find(':selected').attr('data-provinces');
    proviniance.html(' ')
    crateProvinianceOption(provinianceData1)
    $('.provi').each(function(){
        var $this = $(this), numberOfOptions = $(this).children('option').length;     
        var $styledSelect = $this.next('div.select-styled');
        var $list = $this.parent().find('.select-options');
        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }
        $styledSelect.text($this.children('option').eq(0).text());
      });
})
}
// add gift wrap product on clicking gift wrap checkbox
$('.gift-wrap-outer .regular-checkbox').click(function() {
    
    var wrapped = localStorage.getItem('gift-wrap');
    if(wrapped == null){

        addToCart(1, 41362268422344,function(){
            $.ajax({
                url: '/cart.js',
                dataType: 'json'
                })
                .done(function(data){
                    var nprice = data.total_price - 2000;
                    var nsPrice = Shopify.formatMoney(nprice, "₹{{amount}}");
                var newCount = Shopify.formatMoney(data.total_price, "₹{{amount}}");
                $('.totals .totals__subtotal-value').text(newCount)
                $('.cart__footer .price .items-price').text(nsPrice)
                });
        })
        $('.gift-wrap').show()
        localStorage.setItem('gift-wrap','wrap');
    }else{
        $('.gift-wrap').hide()
        localStorage.removeItem("gift-wrap");
        $.ajax({
            type: 'POST',
            url: '/cart/change.js',
            dataType: 'json',
            data: {
                quantity:0,
                id:41362268422344
            },
            success:function(data) {
                $.ajax({
                    url: '/cart.js',
                    dataType: 'json'
                    })
                    .done(function(data){
                    var newCount = Shopify.formatMoney(data.total_price, "₹{{amount}}");
                    $('.totals .totals__subtotal-value').text(newCount)
                    $('.cart__footer .price .items-price').text(newCount)
                    });
            }
        })
    }
})
// ends here 
// cart page wrap function for layout
if($(window).width() > 1920){
    $('.recently-viewed-products-bg,.section--main-cart-items,.cart__footer-wrapper').wrapAll('<div class="wrap-new-layout"></div>')
}
// end
// cart combo toggle
if($('.check-combo').length){
    $('body').on('click','.check-combo',function(){
        $('.combo-popup').show();
        $('.combo-overlay').show();
        $('body').addClass('scroll-block');
    })
}
$(document).on('click','.combo-overlay',function(){
    $('.combo-popup').hide();
    // alert('clicked')
    $('.combo-overlay').hide();
    $('body').removeClass('scroll-block');
})

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
  $('.icons-wrapper .header__icon--account').click(function(e) {
      e.preventDefault();
    
      loginpopupToggle('icon')
  })
  $('.overlay-1,.close-popup').click(function(){
    loginpopupToggle('close')
  })
  $('.otp-login').click(function(){

    $('.mobile-otp-login').slideDown();
    $('.account-login').slideUp();
  })
  $('.mobile-otp-login-close').click(function(){

    $('.mobile-otp-login').slideUp();
    $('.account-login').slideDown();
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
//   forgot pass toggle
$('.login-footer a').eq(0).click(function(){
    $('.forgot-pass').slideDown();
    $('.account-login').slideUp();    
})
$('.forgot-pass a').click(function(){
    $('.account-login').slideDown();
    $('.forgot-pass').slideUp();   
})
  // login popup Header end
// our journey  jumping issue fixed
window.onload =function(){
    var nh = $('.up-sec .active').height() + 15;
$('.up-sec').css('height',nh)
}
// ends here
// our story nav-itme click
function bringElIntoView(el) {    
    var elOffset = el.offset();
    var $window = $(window);
    var windowScrollBottom = $window.scrollTop() + $window.height();
    var scrollToPos = -1;
    if (elOffset.top < $window.scrollTop()) // element is hidden in the top
        scrollToPos = elOffset.top ;
    else if (elOffset.top + el.height() > windowScrollBottom) // element is hidden in the bottom
        scrollToPos = $window.scrollTop() + (elOffset.top + el.height() - windowScrollBottom );
    if (scrollToPos !== -1)
        $('html, body').animate({ scrollTop: scrollToPos });
}


$('.header__menu-item').click(function(e) {
    var check = $(this).text();
    var checkTrim = $.trim(check)
    if(checkTrim == 'Our Story'){
      e.preventDefault();
      var url = window.location.href;
      var urlType = url.split('#')[1];
      alert(urlType);
        //$('html, body').animate({scrollTop: $('#shopify-section-template--14951749845192__1630397519047103ef').offset().top - 90}, 1000);
    }
})
// ends here
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
    setInterval(myslick, 1000);
function myslick() {

  if ($('.best-seller-collection-grid-wrapper').hasClass('slick-initialized')){
    var slickheight = $('.collection-grid-wrapper.slick-slide.slick-current.slick-active .grid').outerHeight() + 90;
    $('.best-seller-collection-grid-wrapper.slick-initialized.slick-slider').find('.slick-track').css("height",slickheight+'px');
    clearInterval(myslick);
  } 
}

  $('.best-seller-nav span').click(function(e) {
      e.preventDefault();
      var slideno = $(this).attr('data-index');
      $('.best-seller-collection-grid-wrapper').slick('slickGoTo', slideno - 1);
      $(this).addClass('add-border').siblings().removeClass('add-border');
      var slickheight = $('.collection-grid-wrapper.slick-slide.slick-current.slick-active .grid').outerHeight() + 90;
    $('.best-seller-collection-grid-wrapper.slick-initialized.slick-slider').find('.slick-track').css("height",slickheight+'px');

  });
  $('.best-seller-collection-grid-wrapper .slick-arrow').on('click', function() {
      var currentIndex = $('.best-seller-collection-grid-wrapper .slick-current').attr('data-index');
      console.log('currentIndex = ' + currentIndex)
      $('.best-seller-nav span[data-index=' + currentIndex + ']').addClass('add-border').siblings().removeClass('add-border');
//       console.log('AftercurrentIndex = ' + currentIndex);
    var slickheight = $('.collection-grid-wrapper.slick-slide.slick-current.slick-active .grid').outerHeight() + 90;
//     if(slickheight > 200){
    $('.best-seller-collection-grid-wrapper.slick-initialized.slick-slider').find('.slick-track').css("height",slickheight+'px');

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
// combo popup on cart Add to cart Button
$('.combo-popup .add-btn').click(function(){
var varId = $(this).attr('data-var-id');
addToCart(1,varId,function(){
    location.reload();
})
})
// combo popup on cart Add to cart Button End Here
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
      $this.val($(this).attr('rel')).change();
      
      $list.hide();
      //console.log($this.val());
  });

  $(document).click(function() {
      $styledSelect.removeClass('active');
      $list.hide();
  });

});

// countdown timer for deals of day collection page
// if($('.body--collection.deal-of-day ').length){
//     function countDown(){
//         const second = 1000,
//             minute = second * 60,
//             hour = minute * 60,
//             day = hour * 24;
//         var offerTime = document.getElementById("offer-time").innerText
//         const countDown = new Date(offerTime).getTime(),
//             x = setInterval(function() {
      
//                 const now = new Date().getTime(),
//                     distance = countDown - now;
      
//                 document.getElementById("days").innerText = Math.floor(distance / (day)),
//                     document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
//                     document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
//                     document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
      
//                 //do something later when date is reached
//                 if (distance < 0) {
//                     // document.getElementById("headline").innerText = "Offer Gone";
//                     document.getElementById("countdown").style.display = "none";
//                     // document.getElementById("content").style.display = "block";
//                     clearInterval(x);
//                 }
//                 //seconds
//             }, 1000)
//         }

//         countDown();   
// }

if($('.body--collection.deal-of-day ').length){
    var offerTime = document.getElementById("offer-time").innerText
    var countDownDate = new Date(offerTime).getTime();
    var x = setInterval(function() {
    
        // Get today's date and time
        var now = new Date().getTime();
      
        // Find the distance between now and the count down date
        var distance = countDownDate - now;
      
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
        // Display the result in the element with id="demo"
        var timesLeft = days+'D : '+hours+'H : '+minutes+'M : '+seconds+ 'S LEFT';
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("demo").innerHTML = "OFFER EXPIRED";
        }else{
          document.getElementById("demo").innerHTML = "<i class='far fa-clock' style='font-size:16px'></i></span> " +timesLeft;
        }
      }, 1000);
}

// Video popup section on home page 

$(document).ready(function() {    
        $(".collage-card__image").click(function() {
          
//            $('.navigation').css("display", "none");
          $('.navigation').addClass("custom-hd");
    });
  $('.collage-video__modal-toggle').click(function(){
   $('.navigation').removeClass("custom-hd");
  });
      });

var bunnyVideo = document.getElementById("videoid");
function playPause() { 
    if (bunnyVideo.paused)
    {			
		 bunnyVideo.play();
    }
	else 
	{
		bunnyVideo.pause();
	}
     
} 

 
