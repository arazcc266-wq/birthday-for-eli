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

/* ===========================
   Loading
=========================== */

let value = 0;

const loadingInterval = setInterval(() => {

    value++;

    if(progress){
        progress.style.width = value + "%";
    }

    if(value >= 100){

        clearInterval(loadingInterval);

        setTimeout(()=>{

            if(loading){
                loading.style.opacity = "0";

                setTimeout(()=>{
                    loading.style.display = "none";
                },700);
            }

        },500);

    }

},35);

/* ===========================
   Stars
=========================== */

if(stars){

    for(let i=0;i<250;i++){

        const star = document.createElement("div");

        star.className = "star";

        star.style.left = Math.random()*100 + "%";
        star.style.top = Math.random()*100 + "%";

        star.style.animationDelay =
            Math.random()*4 + "s";

        stars.appendChild(star);

    }

}

/* ===========================
   Hearts
=========================== */

function createHeart(){

    if(!hearts) return;

    const heart = document.createElement("div");

    heart.className = "floating-heart";
    heart.innerHTML = "❤️";

    heart.style.left =
        Math.random()*100 + "vw";

    heart.style.fontSize =
        (18 + Math.random()*25) + "px";

    heart.style.animationDuration =
        (6 + Math.random()*5) + "s";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },11000);

}

setInterval(createHeart,450);

/* ===========================
   Flowers
=========================== */

const flowersEmoji = ["🌸","🌹","🌺","🌷"];

function createFlower(){

    if(!flowers) return;

    const flower = document.createElement("div");

    flower.className = "flower";

    flower.innerHTML =
        flowersEmoji[
            Math.floor(
                Math.random()*flowersEmoji.length
            )
        ];

    flower.style.left =
        Math.random()*100 + "vw";

    flower.style.fontSize =
        (18 + Math.random()*18) + "px";

    flower.style.animationDuration =
        (8 + Math.random()*5) + "s";

    flowers.appendChild(flower);

    setTimeout(()=>{

        flower.remove();

    },14000);

}

setInterval(createFlower,900);

/* ===========================
   Start Button
=========================== */

if(startButton){

    startButton.addEventListener("click",()=>{

        const section =
            document.getElementById("firstMessage");

        if(section){

            section.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

}
/* ===========================
   METEORS
=========================== */

const meteors = document.getElementById("meteors");

function createMeteor(){

    if(!meteors) return;

    const meteor = document.createElement("div");

    meteor.className = "meteor";

    meteor.style.top =
        Math.random() * 40 + "%";

    meteor.style.left =
        (60 + Math.random() * 40) + "%";

    meteor.style.animationDuration =
        (1 + Math.random() * 1.5) + "s";

    meteors.appendChild(meteor);

    setTimeout(() => {

        meteor.remove();

    }, 2500);

}

setInterval(createMeteor, 1800);
/* ===================================
   LOVE BOOK
=================================== */

const pages = document.querySelectorAll(".page");

const nextPage = document.getElementById("nextPage");
const prevPage = document.getElementById("prevPage");

let currentPage = 0;

function showPage(index){

    if(pages.length === 0) return;

    if(index < 0){
        index = pages.length - 1;
    }

    if(index >= pages.length){
        index = 0;
    }

    currentPage = index;

    pages.forEach(page=>{
        page.classList.remove("active");
    });

    pages[currentPage].classList.add("active");

}

if(nextPage){

    nextPage.addEventListener("click",()=>{

        showPage(currentPage + 1);

    });

}

if(prevPage){

    prevPage.addEventListener("click",()=>{

        showPage(currentPage - 1);

    });

}

showPage(0);
/* ===================================
   PART 8-3
   BIRTHDAY
=================================== */

const blowBtn = document.getElementById("blowCandles");

if(blowBtn){

    blowBtn.addEventListener("click",()=>{

        blowBtn.disabled = true;

        document.querySelectorAll(".flame").forEach(flame=>{

            flame.style.opacity = "0";
            flame.style.transform =
                "translateX(-50%) scale(0)";
            flame.style.transition = ".6s";

        });

        let popup =
            document.querySelector(".birthdayPopup");

        if(!popup){

            popup = document.createElement("div");

            popup.className = "birthdayPopup";

            popup.innerHTML = `
                <h2>🎉 ڕۆژی لەدایکبوونت پیرۆز بێت Eli ❤️</h2>

                <p>
                هیوادارم تەمەنت پڕ بێت لە خۆشی،
                ئارامی،
                سەرکەوتن،
                و هەموو خەونەکانت
                ببنە ڕاستی ❤️
                </p>
            `;

            document.body.appendChild(popup);

        }

        requestAnimationFrame(()=>{

            popup.classList.add("show");

        });

    });

}
/* ===================================
   PART 9-3
   FIREWORKS & CONFETTI
=================================== */

const fireworks = document.getElementById("fireworks");
const confettiBox = document.getElementById("confetti");


function launchFirework(x, y){

    if(!fireworks) return;

    for(let i = 0; i < 40; i++){

        const p = document.createElement("div");

        p.className = "firework";

        p.style.left = x + "px";
        p.style.top = y + "px";

        const angle = Math.random() * Math.PI * 2;
        const distance = 80 + Math.random() * 140;

        p.style.setProperty(
            "--x",
            Math.cos(angle) * distance + "px"
        );

        p.style.setProperty(
            "--y",
            Math.sin(angle) * distance + "px"
        );

        p.style.background =
        `hsl(${Math.random()*360},100%,65%)`;

        fireworks.appendChild(p);


        setTimeout(()=>{

            p.remove();

        },1500);

    }

}



function createConfetti(){

    if(!confettiBox) return;


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


    c.style.left =
    Math.random()*100 + "vw";


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

    const heart = document.createElement("div");


    heart.className = "heartBurst";


    heart.innerHTML = "❤️";


    heart.style.left =
    (40 + Math.random()*20) + "vw";


    heart.style.top = "60vh";


    document.body.appendChild(heart);


    setTimeout(()=>{

        heart.remove();

    },3000);

}




function startCelebration(){

    // Fireworks 🎆

    for(let i = 0; i < 5; i++){

        setTimeout(()=>{

            launchFirework(
                window.innerWidth / 2,
                window.innerHeight / 2
            );

        }, i * 500);

    }



    // Confetti 🎉

    const confettiTimer = setInterval(()=>{

        createConfetti();

    },100);



    setTimeout(()=>{

        clearInterval(confettiTimer);

    },5000);




    // Hearts ❤️

    for(let i = 0; i < 15; i++){

        setTimeout(()=>{

            heartBurst();

        }, i * 200);

    }

}

/* ===================================
   Birthday Button Effects
=================================== */

if(blowBtn){

    blowBtn.addEventListener("click",()=>{


        // Fireworks 🎆

        setTimeout(()=>{

            launchFirework(
                window.innerWidth * 0.25,
                window.innerHeight * 0.30
            );

        },300);



        setTimeout(()=>{

            launchFirework(
                window.innerWidth * 0.75,
                window.innerHeight * 0.25
            );

        },800);



        setTimeout(()=>{

            launchFirework(
                window.innerWidth * 0.50,
                window.innerHeight * 0.18
            );

        },1300);



        // Extra Fireworks 🎆

        setTimeout(()=>{

            launchFirework(
                window.innerWidth * 0.50,
                window.innerHeight * 0.50
            );

        },1800);




        // Confetti 🎉

        const confettiInterval = setInterval(()=>{

            createConfetti();

        },120);


        setTimeout(()=>{

            clearInterval(confettiInterval);

        },6000);




        // Hearts ❤️

        const heartInterval = setInterval(()=>{

            heartBurst();

        },250);


        setTimeout(()=>{

            clearInterval(heartInterval);

        },5000);



        // Final message ✨

        setTimeout(()=>{

            const msg = document.createElement("div");

            msg.className="birthdayMessage";

            msg.innerHTML=
            "🎂 Happy Birthday Eli ❤️<br>لەگەڵ تۆ ژیان جوانترە ✨";


            document.body.appendChild(msg);


            setTimeout(()=>{

                msg.remove();

            },5000);


        },2500);



    });

}
/* ===================================
   MAGIC DOOR
=================================== */

const openDoorBtn = document.getElementById("openDoor");

if(openDoorBtn){

openDoorBtn.addEventListener("click",()=>{


const left = document.querySelector(".door-left");
const right = document.querySelector(".door-right");

const glow = document.getElementById("doorGlow");
const door = document.getElementById("magicDoor");

const hero = document.getElementById("hero");

const light = document.getElementById("doorLight");
const cinema = document.getElementById("cinematicLight");

const scene = document.querySelector(".door-scene");

const particleBox = document.getElementById("magicParticles");
const flash = document.getElementById("magicFlash");
const container = document.getElementById("sparkleContainer");



// Open Door 🚪✨

if(left) left.style.transform="rotateY(-120deg)";

if(right) right.style.transform="rotateY(120deg)";



// Glow Effect ✨

if(glow){

glow.style.transform="scale(3)";
glow.style.opacity="0";

}



// Light Effect 💡

if(light){

light.classList.add("active");

}


if(cinema){

cinema.classList.add("active");

}



// Camera Zoom 🎥

if(scene){

scene.classList.add("zoomScene");


setTimeout(()=>{

scene.classList.remove("zoomScene");

},2000);

}




// Magic Particles 🌸✨

if(particleBox){

const icons=[
"✨",
"🌸",
"💖",
"🦋",
"🌹",
"⭐"
];


for(let i=0;i<60;i++){


const p=document.createElement("div");


p.className="magicParticle";


p.innerHTML =
icons[Math.floor(Math.random()*icons.length)];


p.style.left =
(40+Math.random()*20)+"%";


p.style.setProperty(
"--x",
(Math.random()*800-400)+"px"
);


p.style.animationDelay =
(Math.random()*1.5)+"s";


particleBox.appendChild(p);



setTimeout(()=>{

p.remove();

},4000);


}

}




// Flash Effect ⚡

if(flash){

flash.classList.add("show");


setTimeout(()=>{

flash.classList.remove("show");

},800);

}




// Sparkles ⭐

if(container){


for(let i=0;i<120;i++){


const s=document.createElement("div");


s.className="spark";


s.style.left =
Math.random()*window.innerWidth+"px";


s.style.top =
Math.random()*window.innerHeight+"px";


container.appendChild(s);



setTimeout(()=>{

s.remove();

},2200);


}

}




// Lock Scroll

document.body.style.overflow="hidden";




// Close Door Scene & Go Hero

setTimeout(()=>{


if(door){

door.style.opacity="0";
door.style.pointerEvents="none";

}


if(hero){

hero.scrollIntoView({

behavior:"smooth"

});

}


document.body.style.overflow="auto";


},1800);



});

}
/* ===================================
   PART 12.3
   TYPEWRITER
=================================== */

let typingTimers = [];


function playTyping(){

    // پاککردنەوەی تایمەرە کۆنەکان

    typingTimers.forEach(timer=>{

        clearTimeout(timer);

    });

    typingTimers=[];



    document.querySelectorAll(".typewriter").forEach(text=>{


        const original =
        text.dataset.text || text.textContent;



        text.dataset.text = original;


        text.textContent="";



        let i=0;



        function type(){


            if(i < original.length){


                text.textContent +=
                original.charAt(i);


                i++;



                const timer=setTimeout(type,40);


                typingTimers.push(timer);


            }


        }



        type();


    });


}



// دەستپێکردنی نووسین

playTyping();



// لە گۆڕینی پەڕەکان

if(nextPage){

    nextPage.addEventListener(
        "click",
        ()=>{

            setTimeout(playTyping,300);

        }
    );

}



if(prevPage){

    prevPage.addEventListener(
        "click",
        ()=>{

            setTimeout(playTyping,300);

        }
    );

}
/* ===================================
   PART 12.4
   BOOK MAGIC
=================================== */


const bookEffects =
document.getElementById("bookEffects");


const magicIcons=[

"✨",
"🌸",
"💖",
"🦋",
"⭐",
"💕",
"🌹"

];


let bookMagicTimer;



function createBookMagic(){


    if(!bookEffects) return;



    const item =
    document.createElement("div");



    item.className="bookMagic";



    item.innerHTML =
    magicIcons[
        Math.floor(
            Math.random()*magicIcons.length
        )
    ];



    item.style.left =
    Math.random()*100+"%";



    item.style.bottom =
    "20px";



    item.style.fontSize =
    (20+Math.random()*20)+"px";



    item.style.animationDelay =
    (Math.random()*1)+"s";



    bookEffects.appendChild(item);



    setTimeout(()=>{


        item.remove();


    },5000);


}



// Start Magic ✨

if(bookEffects){


    bookMagicTimer =
    setInterval(
        createBookMagic,
        350
    );


}

/* ===================================
   PART 13
   TIMELINE ANIMATION
=================================== */


const timelineItems =
document.querySelectorAll(".timeline-item");



function timelineAnimation(){


    timelineItems.forEach(item=>{


        const top =
        item.getBoundingClientRect().top;



        if(top < window.innerHeight - 120){


            item.classList.add("show");


        }


    });


}



// Scroll Animation

window.addEventListener(
"scroll",
timelineAnimation
);



// Start

timelineAnimation();

/* ===================================
   PART 14.1
   OPEN MY HEART
=================================== */


function openLove(){


    const secret =
    document.getElementById("secret");


    if(!secret) return;



    // Smooth Scroll ❤️

    secret.scrollIntoView({

        behavior:"smooth"

    });




    // Fade Animation ✨

    secret.animate([

        {

            opacity:0,

            transform:"translateY(80px) scale(.9)"

        },

        {

            opacity:1,

            transform:"translateY(0) scale(1)"

        }

    ],{

        duration:1200,

        easing:"cubic-bezier(.17,.67,.38,1.2)"

    });





    // Heart Explosion ❤️✨

    for(let i=0;i<35;i++){


        const heart =
        document.createElement("div");



        heart.innerHTML="❤️";

        heart.className="heartBurst";



        heart.style.left =
        Math.random()*100+"vw";


        heart.style.top =
        "85vh";



        heart.style.fontSize =
        (20+Math.random()*30)+"px";



        heart.style.setProperty(
            "--moveX",
            (Math.random()*300-150)+"px"
        );



        document.body.appendChild(heart);



        setTimeout(()=>{

            heart.remove();

        },3000);


    }




    // Magic Glow ✨

    document.body.classList.add(
        "heartMode"
    );


    setTimeout(()=>{

        document.body.classList.remove(
            "heartMode"
        );

    },3000);



}
/* ===================================
   PART 14.2
   OPEN BOOK
=================================== */


const openBook =
document.getElementById("openBook");



if(openBook){


openBook.addEventListener("click",()=>{


const cover =
document.querySelector(".book-cover");


if(!cover) return;



// Prevent Double Click

openBook.disabled = true;



// Open Cover Animation 📖✨

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




// After Open

setTimeout(()=>{


    cover.style.display="none";



    showPage(0);



    playTyping();



},1500);



});

}
