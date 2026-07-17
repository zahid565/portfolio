// ======================================
// Mobile Menu Toggle
// ======================================

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

if (menuBtn && mobileMenu) {

    menuBtn.addEventListener("click", () => {

        mobileMenu.classList.toggle("hidden");

    });

}

// ======================================
// Close Mobile Menu on Link Click
// ======================================

const mobileLinks = document.querySelectorAll("#mobile-menu a");

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.add("hidden");

    });

});

// ======================================
// Navbar Shadow on Scroll
// ======================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("shadow-xl");

    } else {

        header.classList.remove("shadow-xl");

    }

});

// ======================================
// Active Navigation Link
// ======================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("text-blue-600");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("text-blue-600");

        }

    });

});

// ======================================
// Scroll to Top Button
// ======================================

// Create button
const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.className =
"fixed bottom-6 right-6 bg-blue-600 text-white w-12 h-12 rounded-full shadow-lg hidden hover:bg-blue-700 transition";

document.body.appendChild(topBtn);

// Show/Hide button
window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.classList.remove("hidden");

    } else {

        topBtn.classList.add("hidden");

    }

});

// Scroll to top
topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ======================================
// Console Message
// ======================================

console.log("🚀 Portfolio Loaded Successfully");