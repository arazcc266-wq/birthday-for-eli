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
