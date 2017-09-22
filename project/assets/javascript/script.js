$(document).ready(function () {
    $("#terms").hide();
    $("#mapPage").hide();

    $('#loginButton').on("click", function () {
        $('#myModal').modal('toggle');
        $('#register').css('visible', 'hidden');

    });

    $('#registerButton').on("click", function () {
        $('#myModal2').modal('toggle');
    });

    $(".nav navbar-nav").ready(function () {
        $("nav").hide();
    });

    $("#menuButton").on("click", function () {
        $("nav").show();
        $(".pages").hide();
    });

    $("#termsAndCond").on("click", function () {
        $(".pages").hide();
        $("#terms").show();
    });

    $("#location").on("click", function () {
        $(".pages").hide();
        $("#mapPage").show();
    });

    $("#contactUs").on("click", function () {
        $(".pages").hide();
        $("#terms").show();
    });

    $("#deals").on("click", function () {
        $.getJSON("products.json", function (data) {
            var items = [];
            $.each(data, function (i, item) {
                items.push(item.name + " , " + item.description);
            });
            $("#res").html(items.join('<br/>'));
        })
    })


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

