$(document).ready(function() {
    // Smooth scrolling for navigation links
    $('.nav-link').click(function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800); // Adjust the duration of the scroll animation as needed
    });
});

// Smooth scrolling for navigation links
$(document).ready(function() {
    $('.nav-link').on('click', function(event) {
        if (this.hash !== '') {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// Form validation
$(document).ready(function() {
    $('#contactForm').submit(function(event) {
        event.preventDefault();
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();

        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            alert('Please fill out all fields.');
            return false;
        }

        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        // If form is valid, you can submit the form here
        // Example: $(this).unbind('submit').submit();

        return true;
    });

    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});

