/* ===================================
   ARAZ ❤️ Eli
   PART 4
=================================== */

const loading = document.getElementById("loading");
const progress = document.getElementById("loading-progress");
const startButton = document.getElementById("startButton");
const stars = document.getElementById("stars");
const hearts = document.getElementById("hearts");
const flowers = document.getElementById("flowers");

// Loading Animation
let value = 0;

const loadingInterval = setInterval(() => {

    value++;

    progress.style.width = value + "%";

    if (value >= 100) {

        clearInterval(loadingInterval);

        setTimeout(() => {

            loading.style.opacity = "0";

            setTimeout(() => {

                loading.style.display = "none";

            }, 700);

        }, 500);

    }

}, 35);

// Stars
for (let i = 0; i < 250; i++) {

    const star = document.createElement("div");

    star.className = "star";

    star.style.left = Math.random() * 100 + "%";

    star.style.top = Math.random() * 100 + "%";

    star.style.animationDelay = Math.random() * 4 + "s";

    stars.appendChild(star);

}

// Hearts
function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.className = "floating-heart";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (18 + Math.random() * 25) + "px";

    heart.style.animationDuration = (6 + Math.random() * 5) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 11000);

}

setInterval(createHeart, 450);

// Flowers
const flowersEmoji = ["🌸","🌹","🌺","🌷"];

function createFlower(){

    const flower = document.createElement("div");

    flower.className = "flower";

    flower.innerHTML =
        flowersEmoji[
            Math.floor(Math.random()*flowersEmoji.length)
        ];

    flower.style.left = Math.random()*100+"vw";

    flower.style.fontSize =
        (18+Math.random()*18)+"px";

    flower.style.animationDuration =
        (8+Math.random()*5)+"s";

    flowers.appendChild(flower);

    setTimeout(()=>{

        flower.remove();

    },14000);

}

setInterval(createFlower,900);

// Start Button

startButton.addEventListener("click",()=>{

    document.getElementById("firstMessage")
    .scrollIntoView({

        behavior:"smooth"

    });

});
/* ===========================
METEORS
=========================== */

function createMeteor(){

const meteor=document.createElement("div");

meteor.className="meteor";

meteor.style.top=Math.random()*40+"%";

meteor.style.left=(60+Math.random()*40)+"%";

meteor.style.animationDuration=
(1+Math.random()*1.5)+"s";

document
.getElementById("meteors")
.appendChild(meteor);

setTimeout(()=>{

meteor.remove();

},2500);

}

setInterval(createMeteor,1800);
/* ===================================
   LOVE BOOK
=================================== */

const pages = document.querySelectorAll(".page");

const nextPage = document.getElementById("nextPage");

const prevPage = document.getElementById("prevPage");

let currentPage = 0;

function showPage(index){

pages.forEach(page=>page.classList.remove("active"));

pages[index].classList.add("active");

}

if(nextPage){

nextPage.onclick=()=>{

currentPage++;

if(currentPage>=pages.length){

currentPage=0;

}

showPage(currentPage);

};

}

if(prevPage){

prevPage.onclick=()=>{

currentPage--;

if(currentPage<0){

currentPage=pages.length-1;

}

showPage(currentPage);

};

}

showPage(currentPage);
/* ===================================
   PART 8-3
   BIRTHDAY
=================================== */

const blowBtn = document.getElementById("blowCandles");

if (blowBtn) {

    blowBtn.addEventListener("click", () => {

        document.querySelectorAll(".flame").forEach(flame => {

            flame.style.opacity = "0";

            flame.style.transform = "translateX(-50%) scale(0)";

        });

        const msg = document.createElement("div");

        msg.className = "birthdayPopup";

        msg.innerHTML = `
        <h2>🎉 ڕۆژی لەدایکبوونت پیرۆز بێت Eli ❤️</h2>

        <p>
        هیوادارم تەمەنت پڕ بێت لە خۆشی،
        ئارامی،
        سەرکەوتن،
        و هەموو خەونەکانت ببنە ڕاستی.
        ❤️
        </p>
        `;

        document.body.appendChild(msg);

        setTimeout(() => {

            msg.classList.add("show");

        },100);

    });

}
/* ===================================
   PART 9-3
   FIREWORKS & CONFETTI
=================================== */

const fireworks = document.getElementById("fireworks");
const confettiBox = document.getElementById("confetti");

function launchFirework(x, y) {

    for (let i = 0; i < 40; i++) {

        const p = document.createElement("div");

        p.className = "firework";

        p.style.left = x + "px";
        p.style.top = y + "px";

        const angle = Math.random() * Math.PI * 2;
        const distance = 80 + Math.random() * 140;

        p.style.setProperty("--x", Math.cos(angle) * distance + "px");
        p.style.setProperty("--y", Math.sin(angle) * distance + "px");

        p.style.background =
            `hsl(${Math.random()*360},100%,65%)`;

        fireworks.appendChild(p);

        setTimeout(() => p.remove(), 1500);

    }

}

function createConfetti(){

    const colors = [
        "#ff4d8d",
        "#ffd54f",
        "#4dd0ff",
        "#8cff66",
        "#ffffff",
        "#b388ff"
    ];

    const c = document.createElement("div");

    c.className = "confetti";

    c.style.left = Math.random()*100 + "vw";

    c.style.background =
        colors[Math.floor(Math.random()*colors.length)];

    c.style.animationDuration =
        (3 + Math.random()*2) + "s";

    confettiBox.appendChild(c);

    setTimeout(()=>{

        c.remove();

    },5000);

}

function heartBurst(){

    const heart=document.createElement("div");

    heart.className="heartBurst";

    heart.innerHTML="❤️";

    heart.style.left=(40+Math.random()*20)+"vw";

    heart.style.top="60vh";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },3000);

}

/* ===================================
   Birthday Button Effects
=================================== */

if(blowBtn){

    blowBtn.addEventListener("click",()=>{

        // Fireworks
        setTimeout(()=>launchFirework(
            window.innerWidth*0.25,
            window.innerHeight*0.30
        ),300);

        setTimeout(()=>launchFirework(
            window.innerWidth*0.75,
            window.innerHeight*0.25
        ),800);

        setTimeout(()=>launchFirework(
            window.innerWidth*0.50,
            window.innerHeight*0.18
        ),1300);

        // Confetti
        const confettiInterval = setInterval(createConfetti,120);

        setTimeout(()=>{

            clearInterval(confettiInterval);

        },6000);

        // Hearts
        const heartInterval = setInterval(heartBurst,250);

        setTimeout(()=>{

            clearInterval(heartInterval);

        },5000);

    });

}
/* ===================================
   MAGIC DOOR
=================================== */

const openDoorBtn = document.getElementById("openDoor");

if(openDoorBtn){

openDoorBtn.addEventListener("click",()=>{

const left=document.querySelector(".door-left");
const right=document.querySelector(".door-right");
const glow=document.getElementById("doorGlow");
const door=document.getElementById("magicDoor");
const hero=document.getElementById("hero");

left.style.transform="rotateY(-120deg)";
right.style.transform="rotateY(120deg)";

glow.style.transform="scale(3)";
glow.style.opacity="0";
   const light = document.getElementById("doorLight");

light.classList.add("active");
   const particleBox = document.getElementById("magicParticles");

const icons = ["✨","🌸","💖","🦋","🌹","⭐"];

for(let i=0;i<60;i++){

    const p=document.createElement("div");

    p.className="magicParticle";

    p.innerHTML=icons[Math.floor(Math.random()*icons.length)];

    p.style.left=(40+Math.random()*20)+"%";

    p.style.setProperty("--x",(Math.random()*800-400)+"px");

    p.style.animationDelay=(Math.random()*1.5)+"s";

    particleBox.appendChild(p);

    setTimeout(()=>{

        p.remove();

    },4000);

}
const flash=document.getElementById("magicFlash");

flash.classList.add("show");

setTimeout(()=>{

flash.classList.remove("show");

},800);

const container=document.getElementById("sparkleContainer");

for(let i=0;i<120;i++){

const s=document.createElement("div");

s.className="spark";

s.style.left=Math.random()*window.innerWidth+"px";

s.style.top=Math.random()*window.innerHeight+"px";

container.appendChild(s);

setTimeout(()=>{

s.remove();

},2200);

}
document.body.style.overflow="hidden";

setTimeout(()=>{

door.style.opacity="0";
door.style.pointerEvents="none";

hero.scrollIntoView({
behavior:"smooth"
});

document.body.style.overflow="auto";

},1800);

});

}
