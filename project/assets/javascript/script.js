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
    id = 1;
    users = [];
    $("a").click(function (e) {
        var idClicked = e.target.id;
        if (idClicked == 'loginButton') {
            $('#myModal').modal('toggle');
            $("#log").on("click", function () {
                login();
            })
        }
        if (idClicked == 'registerButton') {
            $('#registration').show();
            $(".pages").hide();
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
    function login() {
        var username = $("#logname").val();
        var pass = $("#logpass").val();
        users = JSON.parse(localStorage.getItem('users'));
        if (users.some(user => user.username === username &&
            user.password === pass)) {
            alert("Successful login!")
            $("#registerButton").hide();
            $('#infoButton').show();
            $('#loginButton').hide();
            $('#myModal').modal('toggle');
        } else {
            alert("Invalid username or password")
        }
    }
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
                        title: "<img width='60%' height='30%' src='" + element.image + "'>",
                        content: "<div id='pr'><h2>" + element.name + "</h2>" +
                        "<h3>TOPPINGS</h3><p>" + element.description + "</p>" +
                        "<h3 >Price:" + element.price + "</h3>" +
                        " <button type='submit' class='add-product-to-basket btn btn-success'>Add</button> </div>",
                        html: true,
                        placement: "right"
                    });

                    $(on).on('shown.bs.popover', function () {
                        $(this).closest('.menu-items').find('.add-product-to-basket').on("click", function () {
                            var count = 1;
                            $("#products").hide();
                            $("#navigationBar").hide();
                            $('#cartContainer').show();
                            $('#row').append(' <tr><td><img width="100px" height="100px" src="' + element.image +
                                '"></td><td>' + element.name + '</td>' +
                                '<td><button class="less count-btn"> <img width="20px" height="20px" src="assets/images/minus.png" alt=""></button>' +
                                '<span class="moreLess count-btn">' + count + '</span>' +
                                '<button class="more count-btn"><img width="20px" height="20px" src="assets/images/plus.png" alt=""></button></td>' +
                                '<td>' + element.price + '</td>' +
                                '<td><button id="deleteCross" class="test"><img width="20px" height="20px" src="assets/images/delete_cross.png" alt=""></button></td></tr>');
                            $('.more').on('click', function () {
                                $(this).closest('td').find('.moreLess').html(++count);
                            });
                            $('.less').on('click', function () {
                                if (count >= 1)
                                    $(this).closest('td').find('.moreLess').html(--count);
                            });
                            var c = $('#row tr').length;
                            $("#numberOfProducts>p").text(c);
                            $(".test").on('click', function () {
                                $(this).closest("tr").remove();
                                c = $('#row tr').length;
                                $("#numberOfProducts>p").text(c);
                            });
                        });
                    });

                    $(on).popover('show');
                }

                function listMenu(menuItems) {
                    var html = '';

                    menuItems.forEach(function (element) {
                        html += "<div class='menu-items " + element.spicy + " " + element.veg + "'><img width='80%' height='40%' class='menuCenter' src='" + element.image + "'><h2 class='menuCenter'>" + element.name + "</h2>" +
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
                if (idClicked == "backToMenu") {
                    $("#products").show();
                    $("#cartContainer").hide();
                    $("#navigationBar").show();
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

    $("#signup").on("click", function () {
        var fname = $("#fname").val();
        var lname = $("#lname").val();
        var email = $("#email").val();
        var username = $("#username").val();
        var pass = $("#pass").val();
        if (localStorage.getItem('users') != null)
            users = JSON.parse(localStorage.getItem('users'));
        else {
            users = [{ firstName: "default", lastName: "default", email: "default@abv.bg", username: "default", password: "default" }];
            localStorage.setItem('users', JSON.stringify(users));
        }
        if (!(users.some(user => user.username === username))) {
            users.push({ firstName: fname, lastName: lname, email: email, username: username, password: pass });
            localStorage.setItem('users', JSON.stringify(users));
            alert("Your registration is successful!");
            window.location.href = 'index.html';
        } else {
            alert("This username is not free!");
        }
    });


});

