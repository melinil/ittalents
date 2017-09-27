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
    $("#choosePizza").hide();
    $("body").click(function (e) {
        var idClicked = e.target.id;
        if (idClicked == 'loginButton') {
            $('#myModal').modal('toggle');
        }
        if (idClicked == 'registerButton') {
            $('#myModal2').modal('toggle');
        }
        if (idClicked == 'menuButton') {
            $("nav").show();
            $(".pages").hide();
        }
        if (idClicked == 'termsAndCond') {
            $(".pages").hide();
            $("#terms").show();
            $('.tab-content').show();
            console.log(idClicked);
        }
        if (idClicked == 'location') {
            $(".pages").hide();
            $("#mapPage").show();
            myMap()
        }
        if (idClicked == 'contactUs') {
            $(".pages").hide();
            $("#contactForm").show();
            $("#cForm").show();
        }
        if (idClicked == 'logo') {
            location.reload();
        }
        if (idClicked == 'infoButton') {
            $(".pages").hide();
            $("#loginButton").hide();
            $("#registerButton").hide();
            $("#accountInfo").show();
        }
        if (idClicked == 'orderButton') {
            $.ajax({
                type: "POST",
                url: "products.json",
                success: function (data) {
                    $("#choosePizza").modal('toggle');
                    data.pizzas.find(function (element) {
                        $("#product").attr("src", element.image);
                        $("#namePr").text(element.name);
                        $("#topping").text(element.description);
                        $("#price").text("Price: " + element.price);
                    })
                }
            });
            $("#add").on("click", function () {

            })
        }
    });
    $.ajax({
        type: "POST",
        url: "products.json",
        success: function (data) {
            data.deals.forEach(function (element) {
                $("#products").append("<div class='menu-items'><img width='80%' height='40%' class='menuCenter' src='" + element.image + "'><h2 class='menuCenter'>" + element.name + "</h2>" +
                    "<h3 class='menuCenter'>Price:" + element.price + "</h3><button class='btn btn-success menuCenter' id='orderButton'>CHOOSE</button></div>")
            });
            $("body").click(function (e) {
                $("#products").empty();
                var tabName;
                var idClicked = e.target.id;
                var print = function (element) {
                    $("#products").append("<div class='menu-items'><img width='80%' height='40%' class='menuCenter' src='" + element.image + "'><h2 class='menuCenter'>" + element.name + "</h2>" +
                        "<h3 class='menuCenter'>Price:" + element.price + "</h3><button class='btn btn-success' id='orderButton'>CHOOSE</button></div>")
                }
                if (idClicked == "dealTab") {
                    tabName = data.deals;
                    tabName.forEach(function (element) {
                        print(element);
                    });
                }
                if ((idClicked == "pizzaTab") || (idClicked == "menuButton")) {
                    tabName = data.pizzas;
                    tabName.forEach(function (element) {
                        print(element);
                    });
                }
                if (idClicked == "chickenTab") {
                    tabName = data.chicken;
                    tabName.forEach(function (element) {
                        print(element);
                    });
                }
                if (idClicked == "pastaTab") {
                    tabName = data.pasta;
                    tabName.forEach(function (element) {
                        print(element);
                    });
                }
                if (idClicked == "sandwichTab") {
                    tabName = data.sandwiches;
                    tabName.forEach(function (element) {
                        print(element);
                    });
                }
                if (idClicked == "sauceTab") {
                    tabName = data.sauces;
                    tabName.forEach(function (element) {
                        print(element);
                    });
                }
                if (idClicked == "desertTab") {
                    tabName = data.deserts;
                    tabName.forEach(function (element) {
                        print(element);
                    });
                }
                if (idClicked == "drinkTab") {
                    tabName = data.drinks;
                    tabName.forEach(function (element) {
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

