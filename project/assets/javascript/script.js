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
        }
    });

    $.ajax({
        type: "POST",
        url: "products.json",
        success: function (data) {
            
            



        }
    });
});
