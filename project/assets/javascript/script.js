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
        }else if (idClicked == 'infoButton') {
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
             var idClicked = e.target.id;
             if(idClicked== "deals"){
               deals.array.forEach(function(element) {
                   $("#products").append("<div><img src='"+element.image+"'><h3>" +element.name+"</h3></div>")
               }, this);  
             }
        }
    });
});
