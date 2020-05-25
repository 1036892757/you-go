$(function(){
    let uesrSpan = getCookie("username");

    if(uesrSpan){
        $("#uesrSpan").html(uesrSpan)
        $(".welcome-box").show()
        $(".firstli").hide()
    }else{
        $(".firstli").show()
    }

    $(".btnLogout").click(function(){
        removeCookie("username");
        
        $(".welcome-box").hide()
        $(".firstli").show()
    })
})