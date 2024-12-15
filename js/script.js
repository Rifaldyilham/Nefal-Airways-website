
// Navbar Links Active State on Scroll
let navbarlinks = document.querySelectorAll(".custom-navbar .nav-link");

function navbarlinksActive() {
  navbarlinks.forEach((navbarlink) => {
    if (!navbarlink.hash) return; 

    let section = document.querySelector(navbarlink.hash);
    if (!section) return; 

    let position = window.scrollY + 200; 

    if (
      position >= section.offsetTop &&
      position <= section.offsetTop + section.offsetHeight
    ) {
      navbarlink.classList.add("active"); 
    } else {
      navbarlink.classList.remove("active");
    }
  });
}

window.addEventListener("load", navbarlinksActive);
document.addEventListener("scroll", navbarlinksActive);


// Book Flight Form
document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tabs button");
    const bookingForm = document.getElementById("bookingForm");
    const manageBookingForm = document.getElementById("manageBookingForm");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            if (tab.id === "bookFlightTab") {
                bookingForm.style.display = "block";
                manageBookingForm.style.display = "none";
            } else {
                bookingForm.style.display = "none";
                manageBookingForm.style.display = "block";
            }
        });
    });
});

function showTab(tabId) {
  
    document.getElementById('bookFlightForm').style.display = 'none';
    document.getElementById('manageBookingForm').style.display = 'none';  
    document.getElementById(tabId).style.display = 'block'; 
    let tabLinks = document.querySelectorAll('.tab-link');
    tabLinks.forEach(function (tab) {
        tab.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
}

// route PopUp
document.addEventListener("DOMContentLoaded", () => {
    const routeNav = document.getElementById("routeNav");
    const routePopup = document.getElementById("routePopup");
    const closePopupButton = document.getElementById("closePopup");
    const overlay = document.getElementById("overlay");

    routeNav.addEventListener("click", (event) => {
        event.preventDefault(); 
        document.body.classList.add("popup-active");
        routePopup.classList.remove("hidden");
        overlay.classList.remove("hidden");
    });

    closePopupButton.addEventListener("click", () => {
        document.body.classList.remove("popup-active");
        routePopup.classList.add("hidden");
        overlay.classList.add("hidden");
    });
});

// Carrer PopUp
document.addEventListener("DOMContentLoaded", function () {
    const aviationSecurityModalTrigger = document.getElementById("aviationSecurityModalTrigger");
    const aviationSecurityModal = new bootstrap.Modal(document.getElementById("aviationSecurityModal"));

    if (aviationSecurityModalTrigger) {
        aviationSecurityModalTrigger.addEventListener("click", function () {
            aviationSecurityModal.show();
        });
    }
});

// Preloader
const preloader = document.querySelector("#preloader");
if (preloader) {
  window.addEventListener("load", () => {
    preloader.remove();
  });
}

// Scroll Top
const scrollTop = document.querySelector(".scroll-top");
if (scrollTop) {
    const togglescrollTop = function () {
        window.scrollY > 100 ?
            scrollTop.classList.add("active") :
            scrollTop.classList.remove("active");
    };
    window.addEventListener("load", togglescrollTop);
    document.addEventListener("scroll", togglescrollTop);
    scrollTop.addEventListener(
        "click",
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    );
}

// glightbox
const glightbox = GLightbox({
    selector: ".glightbox",
  });

new PureCounter();


// swiper slider with 1 slide
new Swiper(".slides-1", {
    speed: 600,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// swiper slider with 3 slides 
new Swiper(".slides-3", {
    speed: 600,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 40,
        },

        1200: {
            slidesPerView: 3,
        },
    },
});

// gallery Slider
new Swiper(".gallery-slider", {
    speed: 400,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    },
});

// Animation on scroll function
function aos_init() {
    AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
        mirror: false,
    });
}
window.addEventListener("load", () => {
aos_init();
});

// addfilebtn
document.getElementById('add-file-btn').addEventListener('click', function (e) {
    e.preventDefault(); // Mencegah aksi default (scroll ke atas)

    // Buat elemen baru untuk file upload
    const newFileUpload = document.createElement('div');
    newFileUpload.classList.add('file-upload-wrapper');

    newFileUpload.innerHTML = `
        <input type="file">

    `;

    // Tambahkan elemen baru ke container file-upload
    document.getElementById('file-upload-container').appendChild(newFileUpload);
});

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.custom-navbar');
    if (window.scrollY > 50) {  // Ubah nilai 50 sesuai kebutuhan (berapa banyak scroll)
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
