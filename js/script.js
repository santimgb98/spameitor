
$(document).ready(function(){
    
    // INITIAL BUTTON // ENTER TO PAGE
    $("#btn_spameitor").mouseenter(function(){
        $(this).text("rOTiEmaPS")
    })
    $("#btn_spameitor").mouseleave(function(){
        $(this).text("sPAmEitOr")
    })
    $("#btn_spameitor").click(function(){
        location.href = "./indexApp.html"
    })

    // CLICKs on the BUTTONS
    $("#btn_send_spam").click(function(){
        $(".font, .input, .input_message, # btn_send_spam").hide()
        $("#aparece, #return").show();
        
    })
    $("#btn_return").click(function(){
        $(".font, .input, .input_message, # btn_send_spam").show()
        $("#aparece, #return").hide();
    })

    // MOUSE MOVES on BUTTONS
    // send button
    $("#btn_send_spam").mouseenter(function(){
        $(this).text("👻 Send spam 👻")
        $("#content").css("border-color", "rgb(153, 255, 0)")
        $(".input").css("border-color", "rgb(153, 255, 0)")
        $(".input_message").css("border-color", "rgb(153, 255, 0)")
        $("#input_receiver").css("color","rgb(113, 255, 196)");
    })
    $("#btn_send_spam").mouseleave(function(){
        $(this).text("Send spam")
        $("#content").css("border-color", "rgb(255, 0, 0)")
        $(".input").css("border-color", "rgb(255, 0, 0)")
        $(".input_message").css("border-color", "rgb(255, 0, 0)")
        $("#input_receiver").css("color","rgb(255, 0, 0)");
    })

    // return button
    $("#btn_return").mouseenter(function(){
        $("#content").css("border-color", "rgb(153, 255, 0)")
    })
    $("#btn_return").mouseleave(function(){
        $("#content").css("border-color", "rgb(255, 0, 0)")
    })


    // DATA INTRODUCTION in the INPUTS
    $("#receiver").local ;function sendSpam(receiver) {
     $(this)  
    }
    
   
})
