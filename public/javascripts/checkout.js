


$(document).ready(function(){


    
    $(".submit-order-btn").click(function(){

        var firstName = $("#firstName").val();
        var lastName = $("#lastName").val();
        var user_name = firstName + " " + lastName;

        var address1 = $("#user_address1").val();

        if($("#user_address2").val().length != 0){
            var address2 = $("#user_address2").val();
            var user_address = address1 + ", " + address2;
        }
        
        else{
            var user_address = address1;
        }
        
        var currentDateTime = new Date();
        var date = currentDateTime.toLocaleDateString();
        var time = currentDateTime.toLocaleTimeString();

        $("#user_name").val(user_name.trim());
        $("#user_address").val(user_address.trim());
        $("#date").val(date);
        $("#time").val(time);

        $(".submit-order-form").submit();

    });

    //event handler for promo "Redeem" button
    $(".redeem-btn").click(function(){
        alert("Sorry, the promo code cannot be redeemed at this moment.");
        
    });

});