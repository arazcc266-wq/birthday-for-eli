/* =========================
   RESET
========================= */

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html{
    scroll-behavior:smooth;
}

body{
    font-family:'Poppins',sans-serif;
    overflow:hidden;
    background:#020617;
    color:#fff;
}

/* =========================
BACKGROUND
========================= */

body{

    background:
    radial-gradient(circle at top,#1d4ed8 0%,#020617 55%,#000 100%);

    min-height:100vh;

}

/* =========================
LOADING
========================= */

#loading-screen{

position:fixed;
inset:0;

display:flex;
justify-content:center;
align-items:center;

background:#000;

z-index:99999;

transition:1.5s;

}

.loading-content{

text-align:center;

width:90%;

max-width:450px;

}

.loading-content h1{

font-size:42px;

margin-top:25px;

}

.loading-content p{

margin-top:18px;

font-size:18px;

opacity:.85;

}

/* =========================
HEART
========================= */

.heart-loader{

width:95px;

height:95px;

margin:auto;

background:#ff2d55;

transform:rotate(45deg);

animation:beat 1s infinite;

}

.heart-loader:before,
.heart-loader:after{

content:"";

position:absolute;

width:95px;

height:95px;

background:#ff2d55;

border-radius:50%;

}

.heart-loader:before{

left:-48px;

}

.heart-loader:after{

top:-48px;

}

/* =========================
BAR
========================= */

.loading-bar{

width:100%;

height:12px;

margin-top:30px;

background:#222;

border-radius:30px;

overflow:hidden;

}

.loading-progress{

width:0;

height:100%;

background:linear-gradient(90deg,#ff2d55,#ff8fab);

animation:loading 6s linear forwards;

}

/* =========================
HOME
========================= */

#home{

position:relative;

width:100%;

height:100vh;

display:flex;

justify-content:center;

align-items:center;

text-align:center;

overflow:hidden;

}

.hero{

position:relative;

z-index:2;

padding:25px;

}

.hero h1{

font-size:65px;

margin-top:15px;

}

.hero h3{

font-size:42px;

margin:20px 0;

color:#ff8fab;

}

.hero p{

font-size:20px;

max-width:700px;

line-height:1.9;

opacity:.9;

margin:auto;

margin-top:15px;

}

#startBtn{

margin-top:40px;

padding:18px 45px;

font-size:20px;

border:none;

border-radius:60px;

cursor:pointer;

background:#ff2d55;

color:#fff;

transition:.4s;

box-shadow:0 0 30px rgba(255,45,85,.4);

}

#startBtn:hover{

transform:scale(1.08);

box-shadow:0 0 45px rgba(255,45,85,.8);

}

/* =========================
ANIMATION
========================= */

@keyframes beat{

0%,100%{

transform:rotate(45deg) scale(1);

}

50%{

transform:rotate(45deg) scale(1.15);

}

}

@keyframes loading{

100%{

width:100%;

}

}
