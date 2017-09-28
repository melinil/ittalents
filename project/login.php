<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>pizzaTD</title>
    <link rel="stylesheet" href="assets/css/reset.css" />
    <link rel="stylesheet" href="assets/css/style.css" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="assets/javascript/script.js"></script>
</head>


 <?php


?>
<body id="body">

<header id="header">
        <div id="header_content">
            <img src="assets/images/logo2.png" alt="logo for pizza website" id="logo">
            <img src="assets/images/phone.png" alt="phone icon" id="phone">
            <img id="cart" src="assets/images/cart.png" alt="">
            <button type="button" id="infoButton" class="btn btn-primary nav_button">Acoount info</button>
            <!-- <button type="button" id="loginButton" class="btn btn-primary nav_button">Log In</button>
            <button type="button" id="registerButton" class="btn btn-primary nav_button">Register</button> -->
            <a href="login.php" class="btn btn-primary nav_button" id="loginButton">Log In</a>
            <a href="register.php" class="btn btn-primary nav_button"  id="registerButton">Register</a>
            <span>0700125</span>
        </div>
    </header>
    <div id="spaceB"></div>


    <div id="additionalDiv">
        <h1>Login</h1>
		    <form class="login-form" action="includes/login.inc.php" method="POST">
			    <input type="text" name="uid" placeholder="Username">
			    <input type="password" name="pwd" placeholder="Password">
			    <button type="submit" name="submit" class="btn btn-default">Log in</button>
            </form>
    </div>




    <footer>
        <div class="list-group">
            <ul>
                <li class="fListItem"><a href="#map" id="location">Restaurants</a></li>
                <li class="fListItem"><a href="#contact" id="contactUs">Contact us</a></li>
                <li class="fListItem"><a href="#terms" id="termsAndCond">Terms and conditions</a></li>
            </ul>
        </div>
        <div class="list-group">
            <ul>
                <li class="fListItem"><a href="http://facebook.com" target="_blank"><img src="assets/images/faceBook.png" alt="FB Logo"></a></li>
                <li class="fListItem"><a href="http://twitter.com" target="_blank"><img src="assets/images/twitter.png" alt="Twitter Logo"></a></li>
                <li class="fListItem"><a href="http://www.youtube.com" target="_blank"><img src="assets/images/youtube.png" alt="Youtube Logo"></a></li>
            </ul>
        </div>
    </footer>

</body>

</html>