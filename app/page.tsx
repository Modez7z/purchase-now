<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Get the best services.</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #121212;
            font-family: Arial, sans-serif;
        }
        
        .container {
            text-align: center;
        }
        
        h1 {
            color: white;
            margin-bottom: 40px;
        }
        
        .join-button {
            position: relative;
            display: inline-block;
            padding: 15px 30px;
            font-size: 18px;
            font-weight: bold;
            color: white;
            text-decoration: none;
            border: none;
            border-radius: 50px;
            cursor: pointer;
            background: linear-gradient(90deg, 
                #ff0000, #ff7f00, #ffff00, #00ff00, 
                #0000ff, #4b0082, #8f00ff, #ff0000);
            background-size: 800% 100%;
            animation: rainbow 8s linear infinite;
            transition: transform 0.3s;
            overflow: hidden;
            z-index: 1;
        }
        
        .join-button:hover {
            transform: scale(1.05);
        }
        
        .join-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(255, 255, 255, 0.1);
            z-index: -1;
            transform: scale(0);
            border-radius: 50px;
            transition: transform 0.5s;
        }
        
        .join-button:hover::before {
            transform: scale(1);
        }
        
        @keyframes rainbow {
            0% {
                background-position: 0% 50%;
            }
            100% {
                background-position: 800% 50%;
            }
        }
        
        .discord-logo {
            width: 24px;
            height: 24px;
            margin-right: 10px;
            vertical-align: middle;
        }

        .rating {
            margin-top: 20px;
            color: white;
            font-size: 24px;
        }

        .stars {
            color: #ffd700; /* Gold color for stars */
            font-size: 28px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1> !Modez7'z Services! </h1>
        <a href="https://discord.gg/KXuTw9qE9w" class="join-button">
            <svg class="discord-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36">
                <path fill="#fff" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
            </svg>
            Join Service
        </a>
        <div class="rating">
            <span class="stars">★★★★☆</span> 4.5/5
        </div>
    </div>
</body>
</html>
