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
            $("body").click(function (e) {
                $( "#products" ).empty();
                var idClicked = e.target.id;
                if (idClicked == "dealTab") {
                    data.deals.forEach(function (element) {
                        $("#products").append("<div class='menu-items'><img width='150px' src='" + element.image + "'><h3>" + element.name + "</h3>"+
                        "<span>"+element.price+ "</span><button color='green'>CHOOSE</button></div>")
                    });
                }
                 if ((idClicked == "pizzaTab") || (idClicked== "menuButton")) {
                    data.pizzas.forEach(function (element) {
                        $("#products").append("<div class='menu-items'><img width='150px' src='" + element.image + "'><h3>" + element.name + "</h3>"+
                        "<span>"+element.price+ "</span><button color='green'>CHOOSE</button></div>")
                    });
                }
                 if (idClicked == "chickenTab") {
                    data.chicken.forEach(function (element) {
                        $("#products").append("<div class='menu-items'><img width='150px' src='" + element.image + "'><h3>" + element.name + "</h3>"+
                        "<span>"+element.price+ "</span><button color='green'>CHOOSE</button></div>")
                    });
                }
                 if (idClicked == "pastaTab") {
                    data.pasta.forEach(function (element) {
                        $("#products").append("<div class='menu-items'><img width='150px' src='" + element.image + "'><h3>" + element.name + "</h3>"+
                        "<span>"+element.price+ "</span><button color='green'>CHOOSE</button></div>")
                    });
                }
                 if (idClicked == "sandwichTab") {
                    data.sandwiches.forEach(function (element) {
                        $("#products").append("<div class='menu-items'><img width='150px' src='" + element.image + "'><h3>" + element.name + "</h3>"+
                        "<span>"+element.price+ "</span><button color='green'>CHOOSE</button></div>")
                    });
                }
                 if (idClicked == "souceTab") {
                    data.souces.forEach(function (element) {
                        $("#products").append("<div class='menu-items'><img width='150px' src='" + element.image + "'><h3>" + element.name + "</h3>"+
                        "<span>"+element.price+ "</span><button color='green'>CHOOSE</button></div>")
                    });
                }
                 if (idClicked == "desertTab") {
                    data.deserts.forEach(function (element) {
                        $("#products").append("<div class='menu-items'><img width='150px' src='" + element.image + "'><h3>" + element.name + "</h3>"+
                        "<span>"+element.price+ "</span><button color='green'>CHOOSE</button></div>")
                    });
                }
                if (idClicked == "drinkTab") {
                    data.drinks.forEach(function (element) {
                        $("#products").append("<div class='menu-items'><img width='150px' src='" + element.image + "'><h3>" + element.name + "</h3>"+
                        "<span>"+element.price+ "</span><button color='green'>CHOOSE</button></div>")
                    });
                }
            });
        }
    });
});
