// Umanac Journey year section js
$(document).ready(function(){
   $('.year').click(function(){
    var index = $(this).attr('data-index');
    $('.year-img[data-index='+index+']').addClass('active').siblings().removeClass('active')
   })
})
// custome js for gift wrap button
$(document).ready(function(){
   $('.cart__ctas').hover(function(){
      alert('hovered')
     if($('.gift-wrap-outer .regular-checkbox.input').prop("checked") == true){
       $( ".gift-wrap-form .regular-checkbox.input" ).prop( "checked", true );
       $(".gift-wrap-form .regular-checkbox.input").attr('checked', true); 
       $(".gift-wrap-form .regular-checkbox.input").prop('checked', true);
       alert('done')
     }
   })
 })
