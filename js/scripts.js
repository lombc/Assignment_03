
$(document).ready(function() {

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
        }        
        
        // Remove previous image and append the new one
        $('#tb-counter').empty().append(img); 
    });

});
/*
Change Theme Function


$(document).ready(function () {
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
});
*/