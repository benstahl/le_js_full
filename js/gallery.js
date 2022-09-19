function activateGallery() {
    let currentClass = "current";
    let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
    thumbnails.forEach(function(thumbnail) {
        thumbnail.addEventListener("click", function() {
            // Set the main image src + alt
            let mainImage = document.querySelector("#gallery-photo > img");
            mainImage.setAttribute("src", thumbnail.dataset.largeVersion);
            mainImage.setAttribute("alt", thumbnail.alt);

            // Set the description column info.
            let titleElem = document.querySelector("#gallery-info > h3");
            let descElem = document.querySelector("#gallery-info > p");
            titleElem.innerHTML = thumbnail.dataset.title;
            descElem.innerHTML = thumbnail.dataset.description;

            // Update the current thumbnail to the one clicked on.
            document.querySelector(currentClass).classList.remove(currentClass);
            thumbnail.parentNode.classList.add(currentClass);
        });
    });
}