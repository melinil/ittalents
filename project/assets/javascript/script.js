$(document).ready(function(){

$(document).scroll(function() { 
    if($(window).scrollTop() !== 0) {
      $("#header").css('opacity', 1);
    }else{
        $("header").css('opacity', 0.5); 
    }
 });
});