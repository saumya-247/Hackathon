<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ECOSORT | Waste Management and Segregation</title>
    <link rel="stylesheet" href="front.css">
    <style>
        * {
            text-decoration: none;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            background-image: url('bg2.png');
            background-size: cover;
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-position: center;
        }

        .nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 20px;
            background-color: rgba(0, 100, 0, 0.8);
            color: white;
        }

        .nav-logo img {
            height: 50px;
        }

        .nav-menu ul {
            list-style: none;
            display: flex;
            gap: 20px;
        }

        .nav-menu ul li a {
            color: white;
            font-weight: bold;
        }

        .nav-button .btn {
            background-color: white;
            color: green;
            padding: 5px 15px;
            border-radius: 5px;
            font-weight: bold;
        }

        .slider-container {
            text-align: center;
            padding: 20px;
        }

        .slider img {
            width: 100%;
            max-height: 400px;
            object-fit: cover;
            border-radius: 10px;
        }

        .service-boxes {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            margin-top: 30px;
        }

        .service-box {
            width: 30%;
            background-color: white;
            padding: 15px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            text-align: center;
        }

        .footer {
            text-align: center;
            background-color: #222;
            color: white;
            padding: 10px;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <nav class="nav">
        <div class="nav-logo">
            <img src="logo.png" alt="ECOSORT Logo">
            <button class="custom-font">ECOSORT</button>
        </div>
        <div class="nav-menu">
            <ul>
                <li><a href="homepage.html">Home</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="faqs.html">FAQs</a></li>
                <li><a href="contact.html">Contact Us</a></li>
            </ul>
        </div>
        <div class="nav-button">
            <button class="btn"><a href="login.html">Login</a></button>
        </div>
    </nav>

    <div class="slider-container">
        <div class="slider">
            <img src="slide1.png" alt="Image 1">
        </div>
        <div class="slider-text">
            <p>Let's segregate and dispose of waste the right way!</p>
        </div>
    </div>

    <div class="service-boxes">
        <div class="service-box">
            <h3>Residential Waste Pickup</h3>
            <p>ECOSORT links you to ideal waste disposal organizations.</p>
        </div>
        <div class="service-box">
            <h3>Commercial Waste Pickup</h3>
            <p>Manage waste for your business in an eco-friendly way.</p>
        </div>
        <div class="service-box">
            <h3>Spreading Awareness</h3>
            <p>Learn the best way to segregate and dispose of waste.</p>
        </div>
    </div>

    <footer class="footer">
        <p>&copy; 2024 ECOSORT. All Rights Reserved.</p>
    </footer>
</body>
</html>
