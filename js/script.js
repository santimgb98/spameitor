import { sendSpam } from "../main"

$(document).ready(function(){
    
    // INITIAL BUTTON // ENTER TO PAGE
    $("#btn_spameitor").mouseenter(()=>{
        $(this).text("rOTiEmaPS")
    })
    $("#btn_spameitor").mouseleave(()=>{
        $(this).text("sPAmEitOr")
    })
    $("#btn_spameitor").click(()=>{
        location.href = "./indexApp.html"
    })

    // CLICKs on the BUTTONS
    $("#btn_send_spam").click(()=>{
        $(".q_form, .indicador,#btn_send_spam").hide()
        $("#aparece, #btn_return").show();

        const receptor = $("id='input_receptor'").val();
        const asunto = $("id='input_asunto'").val();
        const mensaje = $("id='input_mensaje'").val();
        const n_mensajes = $("id='input_mensajes'").val();
        sendSpam(receptor,asunto,mensaje,n_mensajes);
    })
    $("#btn_return").click(()=>{
        $(".q_form, .indicador, #btn_send_spam").show()
        $("#aparece, #btn_return").hide();
    })

    // MOUSE MOVES on BUTTONS
    // send button
    $("#btn_send_spam").mouseenter(()=>{
        $("#btn_send_spam").text("👻 Send spam 👻")
        $("#content").css("border-color", "rgb(153, 255, 0)")
        $(".input").css("border-color", "rgb(153, 255, 0)")
        $(".input_message").css("border-color", "rgb(153, 255, 0)")
        $("#input_receiver").css("color","rgb(113, 255, 196)");
    })
    $("#btn_send_spam").mouseleave(()=>{
        $("#btn_send_spam").text("Send spam")
        $("#content").css("border-color", "rgb(255, 0, 0)")
        $(".input").css("border-color", "rgb(255, 0, 0)")
        $(".input_message").css("border-color", "rgb(255, 0, 0)")
        $("#input_receiver").css("color","rgb(255, 0, 0)");
    })

    // return button
    $("#btn_return").mouseenter(()=>{
        $("#content").css("border-color", "rgb(153, 255, 0)")
    })
    $("#btn_return").mouseleave(()=>{
        $("#content").css("border-color", "rgb(255, 0, 0)")
    })

})
