
document.addEventListener("DOMContentLoaded", function() {
    // Click event listener for desktop users
    document.getElementById("portfolioLink").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default behavior of the link
        window.location.href = "portfoliotab.html"; // Redirect to the portfolio tab page
    });

    // Touch event listener for touch devices
    document.getElementById("portfolioLink").addEventListener("touchstart", function(event) {
        event.preventDefault(); // Prevent the default behavior of the link
        window.location.href = "portfoliotab.html"; // Redirect to the portfolio tab page
    });
});


document.addEventListener("DOMContentLoaded", function() {
    // Click event listeners for touch devices
    document.getElementById("sqlGalleryLink").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default behavior of the link
        showGallery("sql-gallery");
    });

    document.getElementById("ssisGalleryLink").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default behavior of the link
        showGallery("ssis-gallery");
    });

    // Add similar event listeners for other galleries

    // Hover effect for desktop users
    const galleryLinks = document.querySelectorAll(".gallery-link");
    galleryLinks.forEach(function(link) {
        link.addEventListener("mouseenter", function() {
            showGallery(link.dataset.galleryId);
        });
    });

    // Hide galleries when the mouse leaves the container
    const galleryContainer = document.querySelector(".gallery-container");
    galleryContainer.addEventListener("mouseleave", function() {
        hideGalleries();
    });

    function showGallery(galleryId) {
        const galleries = document.querySelectorAll(".gallery");
        galleries.forEach(function(gallery) {
            gallery.style.display = "none";
        });

        const selectedGallery = document.querySelector("." + galleryId);
        if (selectedGallery) {
            selectedGallery.style.display = "flex";
        }
    }

    function hideGalleries() {
        const galleries = document.querySelectorAll(".gallery");
        galleries.forEach(function(gallery) {
            gallery.style.display = "none";
        });
    }

  
})
