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
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $('.account-sidebar .popup').slideUp();
    // var popup = $(this).find('.popup');
  //  var  popup = $("[data-popup="+p+"]");
  $(this).next().slideDown();
  })
}
else{
  $('.account-sidebar [data-popup-name]').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    var p = $(this).attr('data-popup-name');
   var  popup = $("[data-popup="+p+"]");
   popup.addClass('open');
   popup.siblings().removeClass('open');
  })
}
  })
