document.addEventListener("DOMContentLoaded", function() {
    // Click event listeners for gallery links
    document.getElementById("sqlGalleryLink").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default behavior of the link
        showGallery("sql-gallery");
    });

    document.getElementById("ssisGalleryLink").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default behavior of the link
        showGallery("ssis-gallery");
    });

    // Add similar event listeners for other galleries



        const selectedGallery = document.querySelector("." + galleryId);
        if (selectedGallery) {
            selectedGallery.style.display = "flex";
        }
    
});


