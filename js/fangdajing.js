$(function(){
    $(".bigimg").mouseenter(function(){
        $(".mokuai,.showbox").show()
    }).mouseleave(function(){
       $(".mokuai,.showbox").hide()
    }).mousemove(function(event){
        var l = event.pageX - $(this).offset().left -80;
        var t = event.pageY - $(this).offset().top - 80;
    
        if(l<0){
            l = 0
        }
    
        if(l>320){
            l = 320
        }
    
        if(t<0){
            t = 0
        }
    
        if(t>320){
            t = 320
        }
    
        $(".mokuai").css({
            left:l,
            top:t
        })
    
        $(".showbox>img").css({
            left:-3*l,
            top:-3*t
        })
    })
})