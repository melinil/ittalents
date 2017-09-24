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
                if (idClicked == "dealTab") {
                    data.deals.forEach(function (element) {
                        $("#products").append("<div class='menu-items'><img width='150px' src='" + element.image + "'><h3>" + element.name + "</h3>" +
                            "<div>Price: " + element.price + "</div><button class='btn btn-success'>CHOOSE</button></div>")
                    });
                }
                if ((idClicked == "pizzaTab") || (idClicked == "menuButton")) {
                    data.pizzas.forEach(function (element) {
                        $("#products").append("<div class='menu-items'><img width='150px' src='" + element.image + "'><h3>" + element.name + "</h3>" +
                            "<div>Price: " + element.price + "</div><button class='btn btn-success'>CHOOSE</button></div>")
                    });
                }
                if (idClicked == "chickenTab") {
                    data.chicken.forEach(function (element) {
                        $("#products").append("<div class='menu-items'><img width='150px' src='" + element.image + "'><h3>" + element.name + "</h3>" +
                            "<div>Price: " + element.price + "</div><button class='btn btn-success'>CHOOSE</button></div>")
                    });
                }
                if (idClicked == "pastaTab") {
                    data.pasta.forEach(function (element) {
                        $("#products").append("<div class='menu-items'><img width='150px' src='" + element.image + "'><h3>" + element.name + "</h3>" +
                            "<div>Price: " + element.price + "</div><button class='btn btn-success'>CHOOSE</button></div>")
                    });
                }
                if (idClicked == "sandwichTab") {
                    data.sandwiches.forEach(function (element) {
                        $("#products").append("<div class='menu-items'><img width='150px' src='" + element.image + "'><h3>" + element.name + "</h3>" +
                            "<div> Price:" + element.price + "</div><button class='btn btn-success'>CHOOSE</button></div>")
                    });
                }
                if (idClicked == "souceTab") {
                    data.souces.forEach(function (element) {
                        $("#products").append("<div class='menu-items'><img width='150px' src='" + element.image + "'><h3>" + element.name + "</h3>" +
                            "<div>" + element.price + "</div><button class='btn btn-success'>CHOOSE</button></div>")
                    });
                }
                if (idClicked == "desertTab") {
                    data.deserts.forEach(function (element) {
                        $("#products").append("<div class='menu-items'><img width='150px' src='" + element.image + "'><h3>" + element.name + "</h3>" +
                            "<div>Price:" + element.price + "</div><button class='btn btn-success'>CHOOSE</button></div>")
                    });
                }
                if (idClicked == "drinkTab") {
                    data.drinks.forEach(function (element) {
                        $("#products").append("<div class='menu-items'><img width='150px' src='" + element.image + "'><h3>" + element.name + "</h3>" +
                            "<div>Price: " + element.price + "</div><button class='btn btn-success'>CHOOSE</button></div>")
                    });
                }
                else {
                    console.log("Hello!")
                }
            });
        }
    });


});

