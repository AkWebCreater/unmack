// Umanac Journey year section js
$(document).ready(function(){
   $('.year').click(function(){
    var index = $(this).attr('data-index');
    $('.year-img[data-index='+index+']').addClass('active').siblings().removeClass('active')
   })
})
// custome js for gift wrap button -- check form input on chekout click if outer cechekbox checked
$(document).ready(function(){
   $('.cart__ctas').click(function(){
     if($('.gift-wrap-outer input.regular-checkbox').is(":checked")){
       $( ".gift-wrap-form input.regular-checkbox" ).prop( "checked", true );
     }
   })
 })
// empty cart other items hide
var empt = $('.cart--wrapper.is-empty').length;
if(empt){
  $('.cart__footer-wrapper').hide();
} 

// custom add t cart
function addToCart(qnt,id){
  $.ajax({
    type: 'POST',
    url: '/cart/add.js',
    async:false,
    data: {
      quantity: qnt,
      id: id
    },
    dataType: 'json', 
    success: function (data) { 
//           $('#CartCount span:first').text(data.quantity);
      console.log(data.quantity);
    
    } 
  });
}
// add cart
$(document).on('click','.add-cart',function(){ 
 var product = $(this).parent();
   var id =  product.find('.var-id').data("var-id")
   addToCart(1,id)
 })
// bulk add
$(document).on('click','#bulk-add-button',function(){ 
   $('.ingredients-inner .grid__item').each(function(){
    var id =  $(this).find('.var-id').data("var-id")
    addToCart(1,id)
  })
  
  })

  // faq page pop up layer
  
  $(document).ready(function(){

    $('.card-btn').click(function(e){
      e.preventDefault();
      $('.popup-layer').addClass('open');
      $('body').addClass('scroll-block')
    })
    $(document).on('click','.overlay',function(e){
      
      $('.popup-layer').removeClass('open');
      $('body').removeClass('scroll-block');
    })
    // question answer toggle js on FAQ Page
    $(".answer").hide();
    $('.question').click(function(){
$(this).next().slideToggle()
$(this).toggleClass('open')
    })
    // account page popup 
   
if($(window).width() < 750){
  $('.account-sidebar [data-popup-name]').click(function(){
    $('.account-sidebar [data-popup-name]').removeClass('active')
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $('.account-sidebar .popup').slideUp();
    // var popup = $(this).find('.popup');
  //  var  popup = $("[data-popup="+p+"]");
  $(this).next().stop().slideDown();
  })
}
else{
  $('.account-sidebar [data-popup-name]').click(function(){
    $('.account-sidebar [data-popup-name]').removeClass('active')
    $(this).addClass('active');
    var p = $(this).attr('data-popup-name');
   var  popup = $("[data-popup="+p+"]");
   popup.addClass('open');
   popup.siblings().removeClass('open');
  })
}
// login popup Header
$('.header__icon--account').click(function(e){
e.preventDefault();
  $('.loginpopup').stop().toggle();
})
$('.close-popup').click(function(){
  $(this).closest('.loginpopup').hide()
  // $(this).closest('')
})
$('.login-header span').click(function(){
  $(this).addClass('accent');
  $(this).sibling().removeClass('accent')
})
// login popup Header end
// website popup homepage
window.onload = setTimeout(()=>{$('.website-popup').show()},3000)
$('.website-popup .close').click(function(){
  $(this).closest('.website-popup').hide();
})
if($(window).width() < 750){
  $('.wrapper-inner').slick({
    dots: false,
    arrows:true,
    infinite: true,
    variableWidth: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
  });
}
// background added to fix nav on scroll
$(window).scroll(function() {
  if($(this).scrollTop() > 215) {
    $(".navigation").addClass("bg");
  }
  else{
    $(".navigation").removeClass("bg");
  }
})
// product megamenu toggle
$('.list-menu__item').hover(function(){
  $(this).next().addClass('open');
  $(this).parent().siblings().find('.product-popup-menu').removeClass('open');
})
})
