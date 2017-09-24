function myMap() {
    var uluru = { lat: 42.664096, lng: 23.287974 };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
    map.setMapTypeId("roadmap");
}
$(document).ready(function () {

    $("body").click(function (e) {
        var idClicked = e.target.id;
        if (idClicked == 'loginButton') {
            $('#myModal').modal('toggle');
        } else if (idClicked == 'registerButton') {
            $('#myModal2').modal('toggle');
        } else if (idClicked == 'menuButton') {
            $("nav").show();
            $(".pages").hide();
        } else if (idClicked == 'termsAndCond') {
            $(".pages").hide();
            $("#terms").show();
            console.log(idClicked);
        } else if (idClicked == 'location') {
            $(".pages").hide();
            $("#mapPage").show();
            myMap()
        } else if (idClicked == 'contactUs') {
            $(".pages").hide();
            $("#contactForm").show();
        } else if (idClicked == 'logo') {
            location.reload();
        } else if (idClicked == 'infoButton') {
            $(".pages").hide();
            $("#loginButton").hide();
            $("#registerButton").hide();
            $("#accountInfo").show();
        }
    });

    $.ajax({
        type: "POST",
        url: "products.json",
        success: function (data) {
            data.deals.forEach(function (element) {
                $("#products").append("<div class='menu-items'><img width='150px' src='" + element.image + "'><h3>" + element.name + "</h3>" +
                    "<div>Price: " + element.price + "</div><button class='btn btn-success'>CHOOSE</button></div>")
            });
            $("body").click(function (e) {
                $("#products").empty();
                var idClicked = e.target.id;
                var print = function (element) {
                    $("#products").append("<div class='menu-items'><img width='150px' src='" + element.image + "'><h2>" + element.name + "</h2>" +
                        "<div><h3>Price:</h3>" + element.price + "</div><button class='btn btn-success'>CHOOSE</button></div>")
                }
                if (idClicked == "dealTab") {
                    data.deals.forEach(function (element) {
                        print(element);
                    });
                }
                if ((idClicked == "pizzaTab") || (idClicked == "menuButton")) {
                    data.pizzas.forEach(function (element) {
                        print(element);
                    });
                }
                if (idClicked == "chickenTab") {
                    data.chicken.forEach(function (element) {
                        print(element);
                    });
                }
                if (idClicked == "pastaTab") {
                    data.pasta.forEach(function (element) {
                        print(element);
                    });
                }
                if (idClicked == "sandwichTab") {
                    data.sandwiches.forEach(function (element) {
                        print(element);
                    });
                }
                if (idClicked == "sauceTab") {
                    data.sauces.forEach(function (element) {
                        print(element);
                    });
                }
                if (idClicked == "desertTab") {
                    data.deserts.forEach(function (element) {
                        print(element);
                    });
                }
                if (idClicked == "drinkTab") {
                    data.drinks.forEach(function (element) {
                        print(element);
                    });
                }
                else {
                    console.log("Hello!")
                }
            });
        }
    });


});

