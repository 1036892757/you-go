let ord = 0;
    let mytimer = null;
    let hrefs=["https://www.baidu.com",
            "http://www.1000phone.com",
            "https://www.baidu.com"]


    function autoPlay(){
        if (mytimer != null) {
            return;
        }
        mytimer = setInterval(function () {
            goImg(ord + 1);
        }, 2000)
    }
    
    function goImg(tranord){
       if(mytimer == ord){
           return
       }
       let outord = ord;
       ord = tranord;
       if(ord>$(".imgbox img").length - 1){
           ord = 0;
       }else if(ord<0){
           ord = $(".imgbox img").length - 1;
       }
       $(".imgbox img").eq(outord).animate({"opacity":0},1000).end().eq(ord).animate({"opacity":1},1000);
       
       $(".doudou>li").eq(outord).css({
           width:20,
           height:6,
           backgroundColor: "#2e2925"
       }).end().eq(ord).css({
        width: 31,
         height: 6,
       backgroundColor: "#fff"
       })
    }

    function stopPlay(){
        window.clearInterval(mytimer);
        mytimer = null;
    }

    $(function(){
      autoPlay();
      $("ul>li").click(function(){
          stopPlay();
          goImg($(this).index());
          setTimeout(function () {
                autoPlay()
            }, 1500)
      })
      $(".imgbox").hover(function(){
            stopPlay();
        },function(){
            autoPlay()
        }).click(function(){
            window.open(hrefs[ord])
        })
    })