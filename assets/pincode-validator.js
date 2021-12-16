// *******Pincode Check*********
$.extend({
    ajaxResponse: function(pin) {
        // local var
        var theResponse = null;
        // jQuery ajax
        $.ajax({
            url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + pin + "&sensor=true&key=AIzaSyAcNo81ewFiKqJjLelHJLN12IHEaQz87Ew",
            type: 'POST',
            async: false,
            success: function(data) {
                if (data.results.length == 0) {
                    city_new = '';
                } else {
                    var data_pincodes = data.results[0].address_components;
                    console.log(data_pincodes);
                    var data_pincodes_length = data_pincodes.length;
                    city = data_pincodes[1].long_name;
                    theResponse = city;
                }
            }
        });
        // Return the response text
        return theResponse;
    }
});
// utility functions
// popup close
$('.popup_zipcode-inner .close').click(function(){
    $(this).closest('.popup-zipcode').hide();
  })
// massage printer
function msgPrinter(msg, pin, city) {
    $('#del_time').text(msg + ' ' + city + ' ' + pin);
    $('#msg').text('Deliver To ' + city + ' ' + pin)
}
// set pin
function setPin(pincode) {
    localStorage.setItem('pin', pincode);
}
// get pin
function getPin() {
    var pincode = localStorage.getItem('pin');
    return pincode;
}
// city 
function getCity() {
    var city = localStorage.getItem('city');
    return city;
}
function setCity(city) {
    localStorage.setItem('city', city);
}
function updateCity(city) {
    $('.customer-city').html(city)
}
function findCity(pin) {
    var ci = $.ajaxResponse(pin);
    console.log(ci + "find city");
    return ci;
}
//  popupopen 
function popUpOpen(elm) {
    elm.show()
}
//   popupclose
function popUpClose(elm) {
    elm.hide()
}
// updatePincode
function updatePin(pin) {
    $('.customer-pincode').html(pin)
    $('.header-input-zip').val(pin)
    $('.customer-name').show();
    $('#address_zip').val(pin);
    if( $('.body--cart').length == 0 ){

        $('.cutomer-wrap').addClass('success')
    }

}
//   hide all alert massages
function updateDelhivery(delveryMsg, pin, city) {
    if (delveryMsg == "Invalid") {
        $('.popup-pincode-error-invalid').show();
        $('#msg').hide();
        $('.pincode-validator').append("<span class='massage-invaild' style='color:red'>Enter Valid Pincode</span>")
    }
    if (delveryMsg != "not-in-range" && delveryMsg != 'Invalid') {

        popUpClose($('.popup-zipcode'))
        setPin(pin);
        setCity(city)
        updateCity(city);
        updatePin(pin);
        msgPrinter(delveryMsg, pin, city)
    }
    if (delveryMsg == "not-in-range") {
        $('.popup-pincode-error').show();
    } else {
        return
    }
}
// hide massages
function hideAllMassages() {
    $('.popup-pincode-error').hide();
    $('.popup-pincode-error-invalid').hide();
    $('.massage-invaild').remove();
}
// check delhivery
function checkDelhivery(pin12) {
    if (pin12 != undefined && pin12 != null) {
        var deliverymsg1 = $('.pincode-text').attr('delivery-message_1');
        var deliverymsg2 = $('.pincode-text1').attr('delivery-message_2');
        var deliverymsg3 = $('.pincode-text2').attr('delivery-message_3');
        var deliverymsg4 = $('.pincode-text3').attr('delivery-message_4');

        //   converting in correct format of arrays
        var arr1 = $('.pincode-text').text().split(',');
        var newarr = [];
        arr1.forEach(function(item, index) {
            var n = item.trim();
            newarr.push(n);
        });
        var arr2 = $('.pincode-text1').text().split(',')
        var newarr2 = [];
        arr2.forEach(function(item, index) {
            var n = item.trim();
            newarr2.push(n);
        });
        var arr3 = $('.pincode-text2').text().split(',');
        var newarr3 = [];
        arr3.forEach(function(item, index) {
            var n = item.trim();
            newarr3.push(n);
        });
        var arr4 = $('.pincode-text3').text().split(',');
        var newarr4 = [];
        arr4.forEach(function(item, index) {
            var n = item.trim();
            newarr4.push(n);
        });
        var pincodes = [newarr, newarr2, newarr3, newarr4]

        var result = {}
        pincodes.forEach(function(item, index) {
            if (pin12.length == 6) {
                var indexofPincode = item.indexOf(pin12);

                if (indexofPincode != -1) {
                    var nextValueofInder = parseInt(indexofPincode);
                    var citypin = item[nextValueofInder];
                    var cityname = findCity(citypin);
                    console.log("cityNAme===" + cityname);
                    result.city = cityname;
                    result.index = index;
                } else {
                    result.msg = "not-in-range";
                }
            } else {
                result.msg = 'Invalid';
            }
        })
        if (result.index == 0) {
            result.msg = deliverymsg1;
        } else if (result.index == 1) {
            result.msg = deliverymsg2;
        } else if (result.index == 2) {
            result.msg = deliverymsg3;
        } else if (result.index == 3) {
            result.msg = deliverymsg4;
        }
        return result;

    } else {
        popUpOpen($('.popup-zipcode'))
    }
}
// on cart add validation
function validateOnAddToCart() {
    var newPin = getPin();
    var pin3 = $('.pincode-validator #validate_pin').val()
    //   alert(pin3)
    if ($('body').hasClass('template-product')) {
        if (pin3 == newPin) {
            var delStatuse = checkDelhivery(newPin)
        } else {
            var delStatuse = checkDelhivery(pin3)
        }
    } else {
        var delStatuse = checkDelhivery(newPin)
    }
    if (delStatuse.msg != 'not-in-range' && delStatuse.msg != "Invalid") {
        return true;
    } else {
        updatePin(pin3)
        return false;
    }

}
// init function
function pincodecheckInit() {
    var pin = getPin();
    var city = getCity();
    $('.address').click(function() {
        $(this).addClass('selected').siblings().removeClass('selected')
        var addrespincode = $(this).find('#address-pincode').text();

        updatePin(addrespincode);
    })
    $('.cutomer-wrap').click(function() {
        popUpOpen($('.popup-zipcode'))
    })
    $('.check-pincode').click(function() {
        var pincode12 = $(this).parent().find('.header-input-zip').val();
        var delmsg = checkDelhivery(pincode12);
        updateDelhivery(delmsg.msg, pincode12, delmsg.city);
    })
    if (pin != undefined && pin.length == 6) {
        updatePin(pin)
        updateCity(city)
        var msg12 = checkDelhivery(pin)
        updateDelhivery(msg12.msg, pin, msg12.city);
    } else {
        $('.customer-pincode').html("Enter Your Pincode")
        $('.customer-name').hide();
    }

}
//  called init function 
$(document).ready(function() {
    $('.header-input-zip').focus(function() {
        hideAllMassages()

    })
    pincodecheckInit()
})
//********* end pincode check********  