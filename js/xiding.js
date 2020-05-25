window.onscroll = function(){
    var scrool = document.documentElement.scrollTop || document.body.scrollTop
 
   if(scrool > 208){
     $(".nav-content1").css({
                 width: "100%",
                 background: "#ffffff",
                 zIndex: 999,
                 position:"fixed",
                 top:0,
                 borderBottom: "2px solid black"
              })
     $(".navlogo").show()         
     // document.querySelector(".nav-content1").style.position = "fixed";
     // document.querySelector(".nav-content1").style.top = 0;
    
   }else{
     // document.querySelector(".nav-content1").style.position = "static";
     $(".nav-content1").css({
                 width: "100%",
                 background: "#ffffff",
                 zIndex: 999,
                 position:"static",
                 borderBottom:"none"
                
              })
     $(".navlogo").hide()    
   }

   if(scrool > 208){
      
     $(".nav-contentdown").css({
                 width: "100%",
                 position:"fixed",
                 zIndex:999,
                 top:40
              })
   }else{
     $(".nav-contentdown").css({
                 width: "100%",
                 position:"relative",
                 backgroundColor: "#ffffff",
                 top:0
              })
   }
}