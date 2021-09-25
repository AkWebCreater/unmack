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
      $(this).closest('.bottom-card').find('.popup-layer').addClass('open');
      $('body').addClass('scroll-block')
    })
    $(document).on('click','.overlay',function(e){
      
      $(this).closest('.popup-layer').removeClass('open');
      $('body').removeClass('scroll-block');
    })
  })
