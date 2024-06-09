document.addEventListener("DOMContentLoaded", function() {
    var hamburgerInner = document.querySelector(".hamburger");

    if (hamburgerInner) {
        hamburgerInner.addEventListener("click", function() {
            var wrapper = document.querySelector(".wrapper");
            if (wrapper) {
                wrapper.classList.toggle("active");
            }
        });
    }

    // Banner slideshow logic
    let bannerIndex = 0;
    const banners = document.querySelectorAll('.banner img');
    if (banners.length > 0) {
        setInterval(() => {
            banners[bannerIndex].classList.add('hidden');
            bannerIndex = (bannerIndex + 1) % banners.length;
            banners[bannerIndex].classList.remove('hidden');
        }, 2000);
    }

    // Modal functions
    function openModal(modalId) {
        var modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'block';
        }
    }

    function closeModal(modalId) {
        var modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'none';
        }
    }

    // Close modal when clicking outside of it
    window.onclick = function(event) {
        if (event.target.classList.contains('container-login')) {
            event.target.style.display = 'none';
        }
    }

    // Adding openModal and closeModal to the global scope for use in HTML
    window.openModal = openModal;
    window.closeModal = closeModal;
});
