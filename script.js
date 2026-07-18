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
// دوای 10 چرکە داخستنەوە
setTimeout(() => {

    msg.classList.remove("show");

    setTimeout(() => {

        msg.remove();

    },600);

},10000);
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
   const cinema=document.getElementById("cinematicLight");

cinema.classList.add("active");

const scene=document.querySelector(".door-scene");

scene.classList.add("zoomScene");

setTimeout(()=>{

scene.classList.remove("zoomScene");

},2000);
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
/* ===================================
   PART 12.3
   TYPEWRITER
=================================== */

function playTyping(){

    document.querySelectorAll(".typewriter").forEach(text=>{

        const original=text.dataset.text || text.textContent;

        text.dataset.text=original;

        text.textContent="";

        let i=0;

        function type(){

            if(i<original.length){

                text.textContent+=original.charAt(i);

                i++;

                setTimeout(type,40); // خێرایی نووسین

            }

        }

        type();

    });

}

playTyping();

if(nextPage){
    nextPage.addEventListener("click",playTyping);
}

if(prevPage){
    prevPage.addEventListener("click",playTyping);
}
/* ===================================
   PART 12.4
   BOOK MAGIC
=================================== */

const bookEffects=document.getElementById("bookEffects");

const magicIcons=[
"✨",
"🌸",
"💖",
"🦋",
"⭐",
"💕",
"🌹"
];

function createBookMagic(){

if(!bookEffects) return;

const item=document.createElement("div");

item.className="bookMagic";

item.innerHTML=
magicIcons[
Math.floor(
Math.random()*magicIcons.length
)
];

item.style.left=
Math.random()*100+"%";

item.style.bottom="20px";

item.style.fontSize=
(20+Math.random()*20)+"px";

bookEffects.appendChild(item);

setTimeout(()=>{

item.remove();

},5000);

}

setInterval(createBookMagic,350);

/* ===================================
   PART 13
   TIMELINE ANIMATION
=================================== */

const timelineItems =
document.querySelectorAll(".timeline-item");

function timelineAnimation(){

timelineItems.forEach(item=>{

const top=item.getBoundingClientRect().top;

if(top<window.innerHeight-120){

item.classList.add("show");

}

});

}

window.addEventListener(
"scroll",
timelineAnimation
);

timelineAnimation();

/* ===================================
   PART 14.1
   OPEN MY HEART
=================================== */

function openLove(){

    const secret = document.getElementById("secret");

    // Smooth Scroll
    secret.scrollIntoView({
        behavior:"smooth"
    });

    // Fade Animation
    secret.animate([
        {
            opacity:0,
            transform:"translateY(80px)"
        },
        {
            opacity:1,
            transform:"translateY(0)"
        }
    ],{
        duration:1200,
        easing:"ease"
    });

    // Hearts Explosion
    for(let i=0;i<35;i++){

        const heart=document.createElement("div");

        heart.innerHTML="❤️";

        heart.className="heartBurst";

        heart.style.left=Math.random()*100+"vw";
        heart.style.top="85vh";

        document.body.appendChild(heart);

        setTimeout(()=>{
            heart.remove();
        },3000);

    }

}
/* ===================================
   PART 14.2
   OPEN BOOK
=================================== */

const openBook=document.getElementById("openBook");

if(openBook){

openBook.addEventListener("click",()=>{

const cover=document.querySelector(".book-cover");

cover.animate([

{
transform:"rotateY(0deg)"
},

{
transform:"rotateY(-180deg)"
}

],{

duration:1500,
fill:"forwards",
easing:"ease-in-out"

});

setTimeout(()=>{

cover.style.display="none";

showPage(0);

playTyping();

},1500);

});

}
/* ===================================
   PART 15
   LOVE COUNTER
=================================== */

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

if(daysEl){

    // ڕێکەوتی دەستپێکی خۆشەویستی
    const loveDate = new Date("2025-11-27T00:00:00");

    function updateLoveCounter(){

        const now = new Date();

        const diff = now - loveDate;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));

        const hours = Math.floor(
            (diff % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );

        const minutes = Math.floor(
            (diff % (1000 * 60 * 60)) /
            (1000 * 60)
        );

        const seconds = Math.floor(
            (diff % (1000 * 60)) /
            1000
        );

        daysEl.textContent = days;
        hoursEl.textContent = hours;
        minutesEl.textContent = minutes;
        secondsEl.textContent = seconds;

    }

    updateLoveCounter();

    setInterval(updateLoveCounter,1000);

}
/* ===================================
   PART 16
   FIREFLIES
=================================== */

const fireflies = document.getElementById("fireflies");

if(fireflies){

    function createFirefly(){

        const light = document.createElement("div");

        light.className = "firefly";

        light.style.left = Math.random()*100 + "vw";
        light.style.bottom = "-20px";

        light.style.setProperty(
            "--move",
            (Math.random()*200-100) + "px"
        );

        light.style.animationDuration =
            (8 + Math.random()*5) + "s";

        fireflies.appendChild(light);

        setTimeout(()=>{

            light.remove();

        },13000);

    }

    setInterval(createFirefly,500);

}
/* ===================================
   PART 15.3
   MAGIC RING
=================================== */

const openRing = document.getElementById("openRing");
const ringBox = document.getElementById("ringBox");

if (openRing && ringBox) {

    openRing.addEventListener("click", () => {

        // Open Box
        ringBox.classList.add("open");

       // Magic Sparkles

for(let i=0;i<40;i++){

setTimeout(()=>{

const spark=document.createElement("div");

spark.className="ringSpark";

spark.innerHTML=["✨","⭐","💛","🌟"][Math.floor(Math.random()*4)];

spark.style.setProperty("--x",(Math.random()*500-250)+"px");

spark.style.setProperty("--y",(Math.random()*500-250)+"px");

ringBox.appendChild(spark);

setTimeout(()=>{

spark.remove();

},2500);

},i*40);

}

        // Disable Button
        openRing.disabled = true;
        openRing.innerHTML = "❤️ For Eli ❤️";

        // Magic Message
        setTimeout(() => {

            const msg = document.createElement("div");

            msg.className = "birthdayPopup";

            msg.innerHTML = `
                <h2>💍 Eli ❤️</h2>

                <p>

                ئەم ئەڵقەیە
                تەنها ئەڵقە نییە...

                هێمای ئەو خۆشەویستییەیە
                کە هەموو ڕۆژێک
                لە دڵم گەورەتر دەبێت.

                ❤️

                </p>
            `;

            document.body.appendChild(msg);

            setTimeout(() => {

                msg.classList.add("show");

            },100);

        },1000);

       // دوای 10 چرکە داخستنەوە
setTimeout(() => {

    msg.classList.remove("show");

    setTimeout(() => {

        msg.remove();

    },600);

},10000);

        // Hearts
        for(let i=0;i<30;i++){

            setTimeout(()=>{

                const heart=document.createElement("div");

                heart.className="heartBurst";

                heart.innerHTML=["❤️","💖","💕","💗"][Math.floor(Math.random()*4)];

                heart.style.left=(45+Math.random()*10)+"%";

                heart.style.top="55%";

                document.body.appendChild(heart);

                setTimeout(()=>{

                    heart.remove();

                },3000);

            },i*80);

        }

    });

}
/* ===================================
   PART 16.3
   TYPEWRITER PROMISE
=================================== */

const promiseBtn = document.getElementById("showPromise");
const promiseText = document.getElementById("promiseText");

if (promiseBtn && promiseText) {

const fullText = `

من بەڵێنت پێ دەدەم...

هەمیشە پشتگیریت بکەم،

هەمیشە ڕێزت لێ بگرم،

هەمیشە لە کاتی خۆشی و ناخۆشیدا لە تەنیشت بم،

هەمیشە بە دڵی پاک خۆشمبوێیت،

و هەرگیز وازت لێ نەهێنم...

❤️

Araz ❤️ Eli
`;

promiseBtn.addEventListener("click", () => {

promiseBtn.disabled = true;

promiseText.innerHTML = "";

let i = 0;

const typing = setInterval(() => {

promiseText.innerHTML += fullText.charAt(i);

i++;

if(i >= fullText.length){

clearInterval(typing);

const card=document.querySelector(".promise-card");

card.classList.add("magic");

const icons=["❤️","💖","💕","🌹","✨","🌸","⭐"];

for(let j=0;j<60;j++){

setTimeout(()=>{

const item=document.createElement("div");

item.className="promiseMagic";

item.innerHTML=
icons[
Math.floor(Math.random()*icons.length)
];

item.style.left=
(10+Math.random()*80)+"%";

item.style.bottom="40px";

item.style.setProperty(
"--x",
(Math.random()*300-150)+"px"
);

card.appendChild(item);

setTimeout(()=>{

item.remove();

},4000);

},j*40);

}

promiseBtn.innerHTML = "❤️ Forever ❤️";

}

},45);

});

}
/* ===================================
   PART 17.3
   WISHING STAR
=================================== */

const wishBtn = document.getElementById("wishButton");

if(wishBtn){

wishBtn.addEventListener("click",()=>{

   
document.body.classList.add("wishMode");

const moon=document.getElementById("moon");

const aurora=document.getElementById("aurora");

if(moon){

moon.classList.add("wishMode");

}

if(aurora){

aurora.classList.add("wishMode");

}


const card=document.querySelector(".wish-card");

card.classList.add("magic");

const oldPopup=document.querySelector(".wishPopup");

if(oldPopup){

oldPopup.remove();

}

const popup=document.createElement("div");

popup.className="birthdayPopup wishPopup";

popup.innerHTML=`

<h2>🌠 Your Wish 🌠</h2>

<p>

هەر ئارەزوویەکم لە دڵدا...
تەنها یەک شتە...

😊

هەمیشە خەندە لەسەر لێوەکانی Eli ببینم ❤️

</p>

`;

document.body.appendChild(popup);

setTimeout(()=>{

popup.classList.add("show");

},100);

setTimeout(()=>{

popup.classList.remove("show");

setTimeout(()=>{

popup.remove();

},600);

},10000);

const icons=[
"⭐",
"✨",
"💖",
"❤️",
"🌸",
"💫"
];

for(let i=0;i<70;i++){

setTimeout(()=>{

const item=document.createElement("div");

item.className="promiseMagic";

item.innerHTML=
icons[
Math.floor(Math.random()*icons.length)
];

item.style.left=
(Math.random()*100)+"vw";

item.style.bottom="-30px";

item.style.setProperty(
"--x",
(Math.random()*400-200)+"px"
);

document.body.appendChild(item);

setTimeout(()=>{

item.remove();

},4000);

},i*35);

}

setTimeout(()=>{

    document.body.classList.remove("wishMode");

    if(moon){
        moon.classList.remove("wishMode");
    }

    if(aurora){
        aurora.classList.remove("wishMode");
    }

},10000);
   
});

}
/* ===================================
   PART 18.3
   GALLERY POPUP
=================================== */

const photos=document.querySelectorAll(".photo");

const galleryPopup=document.getElementById("galleryPopup");

const popupImage=document.getElementById("popupImage");

const closeGallery=document.getElementById("closeGallery");

photos.forEach(photo=>{

photo.addEventListener("click",()=>{

const img=photo.querySelector("img");

if(!img) return;

popupImage.src=img.src;

galleryPopup.classList.add("show");
   for(let i=0;i<25;i++){

setTimeout(()=>{

const heart=document.createElement("div");

heart.className="popupHeart";

heart.innerHTML=Math.random()>0.5?"❤️":"💖";

heart.style.left=(20+Math.random()*60)+"vw";

heart.style.top=(40+Math.random()*30)+"vh";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},3000);

},i*80);

}

});

});

closeGallery.addEventListener("click",()=>{

galleryPopup.classList.remove("show");

});

galleryPopup.addEventListener("click",(e)=>{

if(e.target===galleryPopup){

galleryPopup.classList.remove("show");

}

});
