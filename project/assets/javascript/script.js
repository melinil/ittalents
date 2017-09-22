$(document).ready(function () {

    $(document).scroll(function () {
        if ($(window).scrollTop() !== 0) {
            $("#header_content").css('background-color', 'white');
        } else {
            $("#header_content").css('background-color', 'transparent');
        }
    });

    $('#loginButton').on("click", function () {
        $('#myModal').modal('toggle');
        $('#register').css('visible', 'hidden');

    });

    $('#registerButton').on("click", function () {
        $('#myModal2').modal('toggle');


    });






});


function myMap() {
    var myLatLng = { lat: 42.6643557, lng: 23.2879690 };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Pizza is here!'
    });
}
