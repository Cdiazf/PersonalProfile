// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Wait for the DOM to be fully loaded

    let banner = document.querySelector('.banner'); // Assuming 'banner' is a class, not an element
    let menutoggle = document.querySelector('.toggle'); // Assuming 'toggle' is a class, not an element

    if (menutoggle && banner) {
        // Check if the elements are found in the DOM

        menutoggle.onclick = function () {
            menutoggle.classList.toggle('active');
            banner.classList.toggle('active');
        };
    } else {
        console.error("Elements not found in the DOM. Check your HTML structure or class names.");
    }
});
