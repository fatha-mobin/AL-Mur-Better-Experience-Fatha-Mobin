
// Dark Mode Create
// Dark Mode Toggle Logic
const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
    
    // Save the dark mode state in local storage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});

// Check for saved dark mode state on page load
window.addEventListener('load', () => {
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        darkModeToggle.checked = true;
    }
});

// Set the date we're counting down to
let countDownDate = new Date().getTime() + 24 * 60 * 60 * 1000;

// Update the countdown every 1 second
let countdownFunction = setInterval(function() {

    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the countdown date
    let distance = countDownDate - now;

    // Time calculations for hours, minutes, and seconds
    let hours = Math.floor((distance % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    let minutes = Math.floor((distance % (60 * 60 * 1000)) / (60 * 1000));
    let seconds = Math.floor((distance % (60 * 1000)) / 1000);

    // Output the result in the respective elements
    document.getElementById("hours").innerHTML = hours.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    document.getElementById("minutes").innerHTML = minutes.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    document.getElementById("seconds").innerHTML = seconds.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});

    // If the countdown is finished, write some text
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);