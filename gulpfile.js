let gulp = require("gulp");

gulp.task("default",async ()=>{
    gulp.watch("./demo/*.html",async ()=>{
        gulp.src("./demo/*.html")
        .pipe(gulp.dest("d:\\phpstudy_pro\\WWw\\gogo\\demo"))
    })
    gulp.watch("./*.html",async ()=>{
        gulp.src("./*.html")
        .pipe(gulp.dest("d:\\phpstudy_pro\\WWw\\gogo"))
    })
    gulp.watch("./*.php",async ()=>{
        gulp.src("./*.php")
        .pipe(gulp.dest("d:\\phpstudy_pro\\WWw\\gogo"))
    })
    gulp.watch("./js/*.js",async ()=>{
        gulp.src("./js/*.js")
        .pipe(gulp.dest("d:\\phpstudy_pro\\WWw\\gogo\\js"))
    })
    gulp.watch("./css/*.css",async ()=>{
        gulp.src("./css/*.css")
        .pipe(gulp.dest("d:\\phpstudy_pro\\WWw\\gogo\\css"))
    })

    gulp.watch("./img/**/*",async ()=>{
        gulp.src("./img/**/*")
        .pipe(gulp.dest("d:\\phpstudy_pro\\WWw\\gogo\\img"))
    })


    //短信验证码的PHP代码
    gulp.watch("./sms/**/*",async ()=>{
        gulp.src("./sms/**/*")
        .pipe(gulp.dest("d:\\phpstudy_pro\\WWw\\gogo\\sms"))
    })
   
    // gulp.task("copy-img",async ()=>{
    //     gulp.src("./img/*.{jpg,png}")
    //     .pipe(gulp.dest("d:\\phpstudy_pro\\WWw\\gogo\\img"))
    // })
    
})
