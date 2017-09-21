$(document).ready(function(){

$(document).scroll(function() { 
    if($(window).scrollTop() !== 0) {
        $("#header_content").css('background-color', 'white');
    }else{
        $("#header_content").css('background-color', 'transparent');
    }
 });
});