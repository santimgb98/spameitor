$(document).ready(function(){

    // Mouse enter into button
    $("#btn_spameitor").mouseenter(function(){
        $(this).text("rOTiEmaPS")
    })
    //Mouse leave to the button
    $("#btn_spameitor").mouseleave(function(){
        $(this).text("sPAmEitOR")
    })

    // Click on the button, enter in page
    $("#btn_spameitor").click(function(){
        location.href = "./indexApp.html"
    })


    $("#btn_send_spam").click(function(){
        $(".font").hide()
        $(".input").hide()
        $(".input_message").hide()
        $("#btn_send_spam").hide()
        $("#aparece").show();
        $("#btn_return").show();
    })
    $("#btn_return").click(function(){
        $(".font").show()
        $(".input").show()
        $(".input_message").show()
        $("#btn_send_spam").show()
        $("#aparece").hide();
        $("#btn_return").hide();
    })

    $("#btn_send_spam").mouseenter(function(){
        $(this).text("👻 Send spam 👻")
    })
    $("#btn_send_spam").mouseleave(function(){
        $(this).text("Send spam")
    })
    
   
})