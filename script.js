// =========================================
// PRELOADER
// =========================================
window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");

    if (preloader) {
        setTimeout(() => {
            preloader.style.opacity = "0";
            preloader.style.visibility = "hidden";

            setTimeout(() => {
                preloader.remove();
            }, 500);

        }, 500);
    }
});

// =========================================
// MOBILE MENU
// =========================================
const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

if (menuToggle && navbar) {

    menuToggle.addEventListener("click", () => {

        menuToggle.classList.toggle("active");
        navbar.classList.toggle("active");

    });

    document.querySelectorAll(".navbar a").forEach(link => {

        link.addEventListener("click", () => {

            menuToggle.classList.remove("active");
            navbar.classList.remove("active");

        });

    });

}

// =========================================
// STICKY HEADER
// =========================================
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (header) {

        header.classList.toggle("sticky", window.scrollY > 50);

    }

});

// =========================================
// BACK TO TOP
// =========================================
const backTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (!backTop) return;

    if (window.scrollY > 400) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});

if (backTop) {

    backTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}

// =========================================
// SMOOTH SCROLL
// =========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});

// =========================================
// SCROLL ANIMATION
// =========================================
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(
".fade-up,.fade-left,.fade-right,.zoom-in,.slide-up"
).forEach(el => {

    observer.observe(el);

});

// =========================================
// FAQ
// =========================================
document.querySelectorAll(".faq-item").forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        document.querySelectorAll(".faq-item").forEach(other => {

            if (other !== item) {

                other.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});

// =========================================
// COUNTER
// =========================================
const counters = document.querySelectorAll(".counter-box h2");

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const text = counter.textContent;

        const target = parseInt(text.replace(/\D/g, ""));

        const suffix = text.replace(/[0-9]/g, "");

        let current = 0;

        const speed = target / 80;

        const update = () => {

            current += speed;

            if (current < target) {

                counter.textContent =
                    Math.floor(current) + suffix;

                requestAnimationFrame(update);

            } else {

                counter.textContent =
                    target + suffix;

            }

        };

        update();

        counterObserver.unobserve(counter);

    });

}, {

    threshold: 0.5

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});

// =========================================
// ACTIVE MENU
// =========================================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (window.scrollY >= top &&
            window.scrollY < top + height) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (href === "#" + current) {

            link.classList.add("active");

        }

    });

});

// =========================================
// PARALLAX HERO
// =========================================
const heroImage = document.querySelector(".hero-image img");

window.addEventListener("scroll", () => {

    if (!heroImage) return;

    heroImage.style.transform =
        `translateY(${window.scrollY * 0.08}px)`;

});

// =========================================
// BUTTON RIPPLE EFFECT
// =========================================
document.querySelectorAll(".btn-primary,.btn-secondary").forEach(btn => {

    btn.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const diameter = Math.max(this.clientWidth, this.clientHeight);

        circle.style.width = circle.style.height = diameter + "px";

        circle.style.left =
            e.clientX - this.getBoundingClientRect().left - diameter / 2 + "px";

        circle.style.top =
            e.clientY - this.getBoundingClientRect().top - diameter / 2 + "px";

        circle.classList.add("ripple");

        const ripple = this.querySelector(".ripple");

        if (ripple) ripple.remove();

        this.appendChild(circle);

    });

});

// =========================================
// LAZY IMAGE
// =========================================
const images = document.querySelectorAll("img");

images.forEach(img => {

    img.setAttribute("loading", "lazy");

});

// =========================================
// CONSOLE
// =========================================
console.log("%cToyota Pamulang",
"color:#eb0a1e;font-size:22px;font-weight:bold;");

console.log("Website Ready ✔"); 
