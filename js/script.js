
// No entiendo por que si importo una función externa
// se me van los eventos guardados en el JQuery

// Esta función =>> import { sendSpam } from "../main.js";

$(document).ready(()=>{
    // CLICKs on the BUTTONS
    $("#btn_send_spam").click(()=>{
        $(".q_form, .indicador, #btn_send_spam").hide()
        $("#aparece, #btn_return").show();

        const receptor = $("#input_receptor").val();
        const asunto = $("#input_asunto").val();
        const mensaje = $("#input_mensaje").val();
        const n_mensajes = $("#input_mensajes").val();

        try{
            sendSpam(receptor,asunto,mensaje,n_mensajes);
        }catch(error){
            $(".q_form, .indicador, #btn_send_spam").show()
            $("#aparece, #btn_return").hide();
            setTimeout(()=>{
                alert(`Se ha producido el siguiente error: "${error}`);
            },300);
        }

    })
    $("#btn_return").click(()=>{
        $(".q_form, .indicador, #btn_send_spam").show()
        $("#aparece, #btn_return").hide();
    });

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

});


