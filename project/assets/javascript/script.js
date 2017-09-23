$(document).ready(function () {
    $("#terms").hide();
    $("#mapPage").hide();

    $('#logo').on('click', function(){
        location.reload();
    });

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


    $("#pizzaTab").on("click", function () {
        $('#daIma').empty();
        displayData(pizza, "pizza")

    })
    $("#pastaTab").on("click", function () {
        $('#daIma').empty();
        displayData(pasta)

    })

});

function displayData(inputVar, picture) {
    var count=0;
    inputVar.forEach(function (element) {
        count++;
        $('#daIma').append(
            "<li><p><img class='menuImage' src='assets/images/"+picture+count+".jpeg'><p>Name" + element.name + "</p><p>" + element.price + "</p><p>" + element.description + "</p></li>"
        
        );
    });
}

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

var pizza = [
    {
        "id": 1,
        "name": "Margarita",
        "price": 12,
        "description": "no meat just tomato stuff and stuff... stuff",
        "image": "assets/images/pizza1.png"
    },
    {
        "id": 2,
        "name": "Tropico",
        "price": 16,
        "description": "Pineapple and some stuff",
        "image": "assets/images/pizza2.jpg"
    },
    {
        "id": 3,
        "name": "CAT-arina",
        "price": 11,
        "description": "Some other stuff that makes you go meow!",
        "image": "assets/images/pizza3.png"
    }
];

var pasta = [
    {
        "id": 1,
        "name": "AAAAAAAAAAAAAAAAAAAAAAAAA",
        "price": 12,
        "description": "no meat just tomato stuff and stuff... stuff",
        "image": "assets/images/pizza1.png"
    },
    {
        "id": 2,
        "name": "TropSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSico",
        "price": 16,
        "description": "Pineapple and some stuff",
        "image": "assets/images/pizza2.jpg"
    },
    {
        "id": 3,
        "name": "CATDDDDDDDDDDDDDDDDDDDDDDDDDDDD-arina",
        "price": 11,
        "description": "Some other stuff that makes you go meow!",
        "image": "assets/images/pizza3.png"
    }
];
