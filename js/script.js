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


    
    
   
})