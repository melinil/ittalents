$(document).ready(function(){

$(document).scroll(function() { 
    if($(window).scrollTop() !== 0) {
        $("#header").css('background-color', 'white');
        console.log("vliza v if-a");
    }else{
        $("#header").css('background-color', 'transparent');
        console.log("Vliza v else");
       
    }
 });
});