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
     if($('.gift-wrap-outer input.regular-checkbox').is(":checked")){
      alert('checked')
       $( ".gift-wrap-form .regular-checkbox.input" ).prop( "checked", true );
       $(".gift-wrap-form .regular-checkbox.input").attr('checked', true).attr( 'checked', 'checked' ); 
       $(".gift-wrap-form .regular-checkbox.input").prop('checked', true).attr( 'checked', 'checked' );
       alert('done')
     }
   })
 })
