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