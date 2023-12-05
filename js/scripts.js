

$(document).ready(function() {
    
    // Works with turning on and off the audio
    var restaurant = document.getElementById('restaurant');
    let switcher = 0;
    $('#audio-button').on('click', function() {
        if(switcher == 1) {
            $('#audio-button').empty();
            restaurant.pause();
            switcher = 0;
            $('#audio-button').append('<li> Turn on audio </li>');
        } else if(switcher == 0) {
            $('#audio-button').empty();
            restaurant.play();
            switcher = 1;
            $('#audio-button').append('<li> Turn off audio </li>');
        }
    });

    // Works with changing website theme
    var theme = 'light';
    $('#theme-button').click(function () {
        if (theme == 'light') {
            $('body').removeClass('light-theme');
            $('body').addClass('dark-theme');
            theme = 'dark';
        } else {
            $('body').removeClass('dark-theme');
            $('body').addClass('light-theme');
            theme = 'light';
        }
    });

    // Array of YouTube video IDs
    var videoIds = ['dQw4w9WgXcQ', '3tmd-ClpJxA', '2vjPBrBU-TM']; // Replace with your own video IDs

    // Function to generate a random video
    function generateRandomVideo() {
        // Generate a random index
        var randomIndex = Math.floor(Math.random() * videoIds.length);

        // Get the video ID
        var videoId = videoIds[randomIndex];

        // Create the iframe
        var iframe = document.createElement('iframe');
        iframe.src = 'https://www.youtube.com/embed/' + videoId;
        iframe.width = 700;
        iframe.height = 315;

        // Append the iframe to the body
        document.body.appendChild(iframe);
    }

    $('#watch-video').on('click', function() {
        // Call the function to generate a random video
        generateRandomVideo();
    });



    // Works with the pre-determined pizza choice buttons
    $('.pizza-button').on('click', function() {
        var img = document.createElement('img');
        img.className = 'center';

        if (this.id === 'ch_pizza') {
            img.src = 'imgs/cheese_pizza.svg';

        } else if (this.id === 'vg_pizza') {
            img.src = 'imgs/veggie_pizza.svg';

            // Generate random x and y coordinates
            var x = Math.random() * window.innerWidth;
            var y = Math.random() * window.innerHeight;
    
            // Generate a random rotation in increments of 45 degrees
            var rotation = Math.floor(Math.random() * 4) * 90;
    
            // Apply the rotation
            img.style.transform = 'rotate(' + rotation + 'deg)';
    
            // Position the SVG image at the generated coordinates
            img.style.left = x + 'px';
            img.style.top = y + 'px';

        } else if (this.id === 'pp_pizza') {
            img.src = 'imgs/pepperoni_pizza.svg';

            // Generate random x and y coordinates
            var x = Math.random() * window.innerWidth;
            var y = Math.random() * window.innerHeight;
    
            // Generate a random rotation in increments of 45 degrees
            var rotation = Math.floor(Math.random() * 4) * 90;
    
            // Apply the rotation
            img.style.transform = 'rotate(' + rotation + 'deg)';
    
            // Position the SVG image at the generated coordinates
            img.style.left = x + 'px';
            img.style.top = y + 'px'; 

        } else if (this.id === 'mt_pizza') {
            img.src = 'imgs/meat_pizza.svg';

            // Generate random x and y coordinates
            var x = Math.random() * window.innerWidth;
            var y = Math.random() * window.innerHeight;
    
            // Generate a random rotation in increments of 45 degrees
            var rotation = Math.floor(Math.random() * 4) * 90;
    
            // Apply the rotation
            img.style.transform = 'rotate(' + rotation + 'deg)';
    
            // Position the SVG image at the generated coordinates
            img.style.left = x + 'px';
            img.style.top = y + 'px';

        } else if (this.id === 'mg_pizza') {
            img.src = 'imgs/margh_pizza.svg';

            // Generate random x and y coordinates
            var x = Math.random() * window.innerWidth;
            var y = Math.random() * window.innerHeight;
    
            // Generate a random rotation in increments of 45 degrees
            var rotation = Math.floor(Math.random() * 4) * 90;
    
            // Apply the rotation
            img.style.transform = 'rotate(' + rotation + 'deg)';
    
            // Position the SVG image at the generated coordinates
            img.style.left = x + 'px';
            img.style.top = y + 'px'; 

        } else if (this.id === 'hw_pizza') {
            img.src = 'imgs/hawaii_pizza.svg';

            // Generate random x and y coordinates
            var x = Math.random() * window.innerWidth;
            var y = Math.random() * window.innerHeight;
    
            // Generate a random rotation in increments of 45 degrees
            var rotation = Math.floor(Math.random() * 4) * 90;
    
            // Apply the rotation
            img.style.transform = 'rotate(' + rotation + 'deg)';
    
            // Position the SVG image at the generated coordinates
            img.style.left = x + 'px';
            img.style.top = y + 'px'; 

        } else if(this.id === 'clear-table') { 
            $('#pizza-type').empty();
            pizza_nm = document.getElementById('clear-table')
        }


        // Remove previous image and append the new one
        $('#pizza-type').empty().append(img);
        
    });

});
