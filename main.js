// Step 1: Define the options for the Intersection Observer
let options = {
    root: document.querySelector("#scrollArea"),
    rootMargin: "0px",
    threshold: 1.0,
};

// Step 2: Create the Intersection Observer instance with the callback function
let observer = new IntersectionObserver(callback, options);

// Step 3: Select the images to lazy load
const lazyLoadImages = document.querySelectorAll('.lazy-load');

// Step 4: Observe each selected image
lazyLoadImages.forEach(image => {
    observer.observe(image);
});

// Step 5: Define the callback function with debugging statements
function callback(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Load the image when it comes into the viewport
            const image = entry.target;

            // Assuming you have stored the image URL in the "data-src" attribute
            image.src = image.dataset.src;

            // Remove the "preload" class after loading the image
            image.classList.remove('preload');

            // Stop observing the image once it is loaded to avoid unnecessary checks
            observer.unobserve(image);
        }
    });
}