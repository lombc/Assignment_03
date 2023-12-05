$(document).ready(function() {
    
    // Works with turning on and off the audio
    var restaurant = document.getElementById('restaurant');
    let switcher = 0;
    $('#audio-button').on('click', function() {
        if(switcher == 1) {
            $('#audio-button').empty();
            restaurant.pause();
            switcher = 0;
            $('#audio-button').append('<li> Enhance Ambience </li>');
        } else if(switcher == 0) {
            $('#audio-button').empty();
            restaurant.play();
            switcher = 1;
            $('#audio-button').append('<li> Un-enhance Ambience </li>');
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

    // Videos Generated are from the Eater Youtube Channel
    // Recommend checking it out!!!
    // Array of YouTube video IDs
    var videoIds = ['ADvf-PIZPLA', 'b5dv_j9SdC0', 'UP094AuTCO4', 'CuBxs1eW0u0', '5UjmB6MLhHE'];

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

        // Center the iframe
        iframe.style.display = 'block';
        iframe.style.marginLeft = 'auto';
        iframe.style.marginRight = 'auto';

        // Append the iframe to the body
        $('#pizza-type').empty().append(iframe);
    }

    // Call the function to generate a random video
    $('#watch-video').on('click', function() {
        generateRandomVideo();
    });

    // Works with the pre-determined pizza choice buttons
    $('.pizza-button').on('click', function() {
        var img = document.createElement('img');
        img.className = 'center';  

        if (this.id === 'ch_pizza') {
            img.src = 'imgs/cheese_pizza.svg';
            img.style.width = '700px';
            img.style.height = '700px';

            // Add hover event
            $(img).hover(
                function() {
                    // This function is executed when the mouse pointer enters the image
                    $(this).css('opacity', '0.2');
                   
                }, 
                function() {
                    // This function is executed when the mouse pointer leaves the image
                    $(this).css('opacity', '1');
                }
            );

            // Click event to lead to recipe website
            $(img).on('click', function() {
                window.open('https://www.foodandwine.com/recipes/classic-cheese-pizza', '_blank');
            });

        } else if (this.id === 'vg_pizza') {
            img.src = 'imgs/veggie_pizza.svg';
            img.style.width = '700px';
            img.style.height = '700px';

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

            // Add hover event
            $(img).hover(
                function() {
                    // This function is executed when the mouse pointer enters the image
                    $(this).css('opacity', '0.2');
                }, 
                function() {
                    // This function is executed when the mouse pointer leaves the image
                    $(this).css('opacity', '1');
                }
            );

            // Click event to lead to recipe website
            $(img).on('click', function() {
                window.open('https://www.allrecipes.com/recipe/15022/veggie-pizza/', '_blank');
            });

        } else if (this.id === 'pp_pizza') {
            img.src = 'imgs/pepperoni_pizza.svg';
            img.style.width = '700px';
            img.style.height = '700px';

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

            // Add hover event
            $(img).hover(
                function() {
                    // This function is executed when the mouse pointer enters the image
                    $(this).css('opacity', '0.2');
                }, 
                function() {
                    // This function is executed when the mouse pointer leaves the image
                    $(this).css('opacity', '1');
                }
            );


            // Click event to lead to recipe website
            $(img).on('click', function() {
                window.open('https://www.allrecipes.com/recipe/240376/homemade-pepperoni-pizza/', '_blank');
            });

        } else if (this.id === 'mt_pizza') {
            img.src = 'imgs/meat_pizza.svg';
            img.style.width = '700px';
            img.style.height = '700px';

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

            // Add hover event
            $(img).hover(
                function() {
                    // This function is executed when the mouse pointer enters the image
                    $(this).css('opacity', '0.2');
                }, 
                function() {
                    // This function is executed when the mouse pointer leaves the image
                    $(this).css('opacity', '1');
                }
            );

            // Click event to lead to recipe website
            $(img).on('click', function() {
                window.open('https://www.food.com/recipe/ground-beef-pizza-281966', '_blank');
            });


        } else if (this.id === 'mg_pizza') {
            img.src = 'imgs/margh_pizza.svg';
            img.style.width = '700px';
            img.style.height = '700px';

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

            // Add hover event
            $(img).hover(
                function() {
                    // This function is executed when the mouse pointer enters the image
                    $(this).css('opacity', '0.2');
                }, 
                function() {
                    // This function is executed when the mouse pointer leaves the image
                    $(this).css('opacity', '1');
                }
            );

            // Click event to lead to recipe website
            $(img).on('click', function() {
                window.open('https://www.onceuponachef.com/recipes/margherita-pizza.html', '_blank');
            });

        } else if (this.id === 'hw_pizza') {
            img.src = 'imgs/hawaii_pizza.svg';
            img.style.width = '700px';
            img.style.height = '700px';

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

            // Add hover event
            $(img).hover(
                function() {
                    // This function is executed when the mouse pointer enters the image
                    $(this).css('opacity', '0.2');
                }, 
                function() {
                    // This function is executed when the mouse pointer leaves the image
                    $(this).css('opacity', '1');
                }
            );

            // Click event to lead to recipe website
            $(img).on('click', function() {
                window.open('https://sallysbakingaddiction.com/hawaiian-pizza/', '_blank');
            });

        } else if(this.id === 'clear-table') { 
            $('#pizza-type').empty();
            pizza_nm = document.getElementById('clear-table')
        }

        // Remove previous image and append the new one
        $('#pizza-type').empty().append(img);
        
    });

});
