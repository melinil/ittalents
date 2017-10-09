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
$(function () {
    $("a").click(function (e) {
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
        if (idClicked == 'infoButton') {
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
                $("#products").append("<div class='menu-items'><img width='80%' height='40%' class='menuCenter' src='" + element.image + "'><h2 class='menuCenter'>" + element.name + "</h2>" +
                    "<h3 class='menuCenter'>Price:" + element.price + "</h3><button class='btn btn-success btn-md' id='orderButton'>CHOOSE</button></div>")
            });
            $("a").click(function (e) {
                $("#products").empty();
                var idClicked = e.target.id;

                function newChoose(element, on) {
                    $(on).popover({
                        title: "<img width='80%' height='40%' src='" + element.image + "'>",
                        content: "<div id='pr'><h2>" + element.name + "</h2>" +
                        "<h3>TOPPINGS</h3><p>" + element.description + "</p>" +
                        "<h3 >Price:" + element.price + "</h3>" +
                        " <button type='submit' class='add-product-to-basket btn btn-success'>Add</button> </div>",
                        html: true,
                        placement: "right"
                    });

                    $(on).on('shown.bs.popover', function () {
                        $(this).closest('.menu-items').find('.add-product-to-basket').click(function () {
                            var count = 1;
                            $("#products").hide();
                            $('#cartContainer').show();
                            $('#row').append('<td><img width="100px" height="100px" src="' + element.image +
                                '"></td><td>' + element.name + '</td>' +
                                '<td><button id="less"> <img width="20px" height="20px" src="assets/images/minus.png" alt=""></button>' +
                                '<span id="moreLess">' + count + '</span>' +
                                '<button id="more"><img width="20px" height="20px" src="assets/images/plus.png" alt=""></button></td>' +
                                '<td>' + element.price + '</td>');
                            $('#more').on('click', function () {
                                $("#moreLess").text(++count);
                            });
                            $('#less').on('click', function () {
                                if (count >= 1)
                                    $("#moreLess").text("" + (--count));
                            });
                        });
                    });

                    $(on).popover('show');
                }

                function listMenu(menuItems) {
                    var html = '';

                    menuItems.forEach(function (element) {
                        html += "<div class='menu-items "+element.spicy+" "+element.veg+"'><img width='80%' height='40%' class='menuCenter' src='" + element.image + "'><h2 class='menuCenter'>" + element.name + "</h2>" +
                            "<h3 class='menuCenter'>Price:" + element.price + "</h3> <button data-id='" + element.id + "' class='open-additional-menu btn btn-success btn-md'>Choose</button></div>";
                    });

                    $("#products").html(html);

                    $('.open-additional-menu').click(function () {
                        var itemNumber = $(this).data('id');

                        newChoose(menuItems[itemNumber - 1], this);
                    });
                }
                if (idClicked == "dealTab") {
                    listMenu(data.deals);
                }
                if ((idClicked == "pizzaTab") || (idClicked == "menuButton")) {
                    listMenu(data.pizzas);
                }
                if (idClicked == "chickenTab") {
                    listMenu(data.chicken);
                }
                if (idClicked == "pastaTab") {
                    listMenu(data.pasta);
                }
                if (idClicked == "sandwichTab") {
                    listMenu(data.sandwiches);
                }
                if (idClicked == "sauceTab") {
                    listMenu(data.sauces);
                }
                if (idClicked == "desertTab") {
                    listMenu(data.deserts);
                }
                if (idClicked == "drinkTab") {
                    listMenu(data.drinks);
                }
                else {
                    console.log("Hello!")
                }
            });
        }
    });




    $('#spicy').on('click', function () {

        if ($('#spicy').is(":checked")) {
            $('.false').hide();
        } else {
            $('.false').show();
        }
    });

    $('#veg').on('click', function () {
        if ($('#veg').is(":checked")) {
            $('.noVeg').hide();
        } else {
            $('.noVeg').show();
        }
    });


    $("#logo").on('click', function () {

        window.location.href = 'index.html';
    });

});

