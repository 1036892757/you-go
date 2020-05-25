  $(function(){
       $(".tab>a").click(function(){
          $(this).addClass("active").siblings().removeClass();
          var index = $(this).index();
          $(".panels>div").eq(index).show().siblings().hide()
       })

       $(".cloose>a").click(function(){
        $(this).addClass("active").siblings().removeClass();
          var index = $(this).index();
          $(".cpanels>ul").eq(index).show().siblings("ul").hide()
          $(".cpanels>div").eq(index).show().siblings("div").hide()
       })

       $(".arrow-right").click(function(){
           $(".cswiper-content").animate({
               left:-990
           },500)
       })
       $(".arrow-left").click(function(){
           $(".cswiper-content").animate({
               left:0
           },500)
       })
       

       //新品推荐的轮播图
       let ord = 0;
       function goimg(tranord){
           
           ord = tranord;

           if(ord > 3){
               ord = 3
           }else if(ord < 0){
               ord = 0
           }
           $(".swiper-item>div").animate({
               left:-920*ord
           },500)
           
       }
       $(".right").click(function(){
          goimg(ord-1)
       })
       $(".left").click(function(){
          goimg(ord+1)

        })
           
       
   
   })


  
  