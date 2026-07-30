/* ==========================================================
   TOYOTA PAMULANG PREMIUM V6
   SCRIPT.JS
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       PRELOADER
    ========================================== */

    const preloader = document.getElementById("preloader");

    window.addEventListener("load", () => {
        if (preloader) {
            preloader.classList.add("hide");
            setTimeout(() => {
                preloader.style.display = "none";
            }, 500);
        }
    });

    /* ==========================================
       MOBILE MENU
    ========================================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const navbar = document.querySelector(".navbar");

    if (menuToggle && navbar) {

        menuToggle.addEventListener("click", () => {

            navbar.classList.toggle("active");
            menuToggle.classList.toggle("active");

        });

        document.querySelectorAll(".navbar a").forEach(link => {

            link.addEventListener("click", () => {

                navbar.classList.remove("active");
                menuToggle.classList.remove("active");

            });

        });

    }

    /* ==========================================
       HEADER SCROLL
    ========================================== */

    const header = document.querySelector(".header");

    function headerScroll() {

        if (!header) return;

        if (window.scrollY > 80) {

            header.style.boxShadow = "0 10px 25px rgba(0,0,0,.08)";
            header.style.background = "rgba(255,255,255,.97)";

        } else {

            header.style.boxShadow = "none";
            header.style.background = "rgba(255,255,255,.96)";

        }

    }

    window.addEventListener("scroll", headerScroll);

    /* ==========================================
       BACK TO TOP
    ========================================== */

    const backTop = document.getElementById("backToTop");

    function backTopShow() {

        if (!backTop) return;

        if (window.scrollY > 400) {

            backTop.classList.add("show");

        } else {

            backTop.classList.remove("show");

        }

    }

    window.addEventListener("scroll", backTopShow);

    if (backTop) {

        backTop.addEventListener("click", () => {

            window.scrollTo({

                top:0,

                behavior:"smooth"

            });

        });

    }

    /* ==========================================
       FAQ
    ========================================== */

    document.querySelectorAll(".faq-item").forEach(item=>{

        const question=item.querySelector(".faq-question");
        const answer=item.querySelector(".faq-answer");

        if(question){

            question.addEventListener("click",()=>{

                const active=item.classList.contains("active");

                document.querySelectorAll(".faq-item").forEach(i=>{

                    i.classList.remove("active");

                    const a=i.querySelector(".faq-answer");

                    if(a){

                        a.style.maxHeight=null;

                    }

                });

                if(!active){

                    item.classList.add("active");

                    if(answer){

                        answer.style.maxHeight=answer.scrollHeight+"px";

                    }

                }

            });

        }

    });

    /* ==========================================
       SCROLL REVEAL
    ========================================== */

    const reveals=document.querySelectorAll(

        ".fade-up,.fade-left,.fade-right,.fade-down,.zoom-in,.zoom-out"

    );

    function revealScroll(){

        const trigger=window.innerHeight-120;

        reveals.forEach(el=>{

            const top=el.getBoundingClientRect().top;

            if(top<trigger){

                el.classList.add("show");

            }

        });

    }

    revealScroll();

    window.addEventListener("scroll",revealScroll);

    /* ==========================================
       COUNTER
    ========================================== */

    const counters=document.querySelectorAll(".counter-box h2");

    let counted=false;

    function counterAnimation(){

        const section=document.querySelector(".counter");

        if(!section) return;

        const top=section.getBoundingClientRect().top;

        if(top<window.innerHeight-120 && !counted){

            counted=true;

            counters.forEach(counter=>{

                const target=parseInt(counter.textContent);

                if(isNaN(target)) return;

                let value=0;

                const speed=Math.max(10,Math.floor(target/40));

                const update=()=>{

                    value+=speed;

                    if(value>=target){

                        value=target;

                    }

                    counter.textContent=value+"+";

                    if(value<target){

                        requestAnimationFrame(update);

                    }

                };

                update();

            });

        }

    }

    window.addEventListener("scroll",counterAnimation);

    counterAnimation();

    /* ==========================================
       RIPPLE BUTTON
    ========================================== */

    document.querySelectorAll(".btn-primary,.btn-secondary").forEach(btn=>{

        btn.addEventListener("click",function(e){

            const circle=document.createElement("span");

            circle.classList.add("ripple");

            const rect=this.getBoundingClientRect();

            const size=Math.max(rect.width,rect.height);

            circle.style.width=size+"px";
            circle.style.height=size+"px";

            circle.style.left=(e.clientX-rect.left-size/2)+"px";
            circle.style.top=(e.clientY-rect.top-size/2)+"px";

            this.appendChild(circle);

            setTimeout(()=>{

                circle.remove();

            },600);

        });

    });

});

/* ==========================================
   SCROLL PROGRESS BAR
========================================== */

const progress=document.createElement("div");

progress.id="scroll-progress";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

    const total=document.documentElement.scrollHeight-window.innerHeight;

    const current=(window.scrollY/total)*100;

    progress.style.width=current+"%";

});
