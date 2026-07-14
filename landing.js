/* ===========================================
   LOADER
=========================================== */

window.addEventListener("load",()=>{

    const loader=document.getElementById("loader");

    setTimeout(()=>{

        loader.classList.add("hide");

    },900);

});


/* ===========================================
   SHOP BUTTON
=========================================== */

const shop=document.getElementById("shopNow");

shop.addEventListener("click",(e)=>{

    e.preventDefault();

    shop.classList.add("pressed");

    const loader=document.getElementById("loader");

    loader.classList.remove("hide");

    setTimeout(()=>{

        location.href="shop.html";

    },700);

});


/* ===========================================
   HERO IMAGE (Ken Burns)
=========================================== */

const heroImage=document.querySelector(".hero-image img");

let scale=1.05;

let direction=1;

setInterval(()=>{

    scale+=0.0004*direction;

    if(scale>=1.09){

        direction=-1;

    }

    if(scale<=1.05){

        direction=1;

    }

    heroImage.style.transform=`scale(${scale})`;

},40);


/* ===========================================
   SOCIALS
=========================================== */

document.querySelectorAll(".hero-socials a").forEach((icon,index)=>{

    icon.style.opacity="0";

    icon.style.transform="translateY(12px)";

    setTimeout(()=>{

        icon.style.transition="all .8s cubic-bezier(.22,.61,.36,1)";

        icon.style.opacity="1";

        icon.style.transform="translateY(0)";

    },900+index*90);

});


/* ===========================================
   LOGO
=========================================== */

const logo=document.querySelector(".hero-logo");

logo.style.opacity="0";

logo.style.transform="translateY(-20px)";

setTimeout(()=>{

    logo.style.transition="all 1s cubic-bezier(.22,.61,.36,1)";

    logo.style.opacity="1";

    logo.style.transform="translateY(0)";

},500);


/* ===========================================
   BUTTON APPEAR
=========================================== */

shop.style.opacity="0";

shop.style.transform="translateY(24px)";

setTimeout(()=>{

    shop.style.transition="all .9s cubic-bezier(.22,.61,.36,1)";

    shop.style.opacity="1";

    shop.style.transform="translateY(0)";

},700);