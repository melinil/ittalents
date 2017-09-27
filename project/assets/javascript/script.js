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
        if (idClicked == 'btn-choose') {
            $.ajax({
                type: "POST",
                url: "products.json",
                success: function (data) {
                    $("#choosePizza").modal('toggle');
                    data.pizzas.find(function (element) {
                        $("#product").attr("src", element.image);
                        $("#namePr").text(element.name);
                        $("#topping").text(element.description);
                        $("#price").text("Price: "+element.price);
                    })
                }
            });
            $("#add").on("click", function(){
                
            })
        }
    });

    $.ajax({
        type: "POST",
        url: "products.json",
        success: function (data) {
            $("body").click(function (e) {
                $("#products").empty();
                var idClicked = e.target.id;
                var print = function (element) {
                    $("#products").append("<div class='menu-items'><img width='150px' src='" + element.image + "'><h2>" + element.name + "</h2>" +
                        "<div><h3>Price:</h3>" + element.price + "</div><button id='btn-choose'class='btn btn-success'>CHOOSE</button></div>")
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

