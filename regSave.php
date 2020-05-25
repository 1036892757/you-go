<?php
   
    $name = $_POST["username"];
    $pass = $_POST["userpass"];
    $sjinp = $_POST["sjinp"];

     //  启动 Session
     session_start();


    if($sjinp != $_SESSION["code"]){
        echo "codefail";
    }else{

  

    $link = mysqli_connect("localhost","root","root","dianshang");

    $result = mysqli_query($link,"insert into vip(username,userpass) value('".$name."','".$pass."')");

    mysqli_close($link);

    if($result){
        echo "1";
    }else{
        echo "0";
    }

}
?>