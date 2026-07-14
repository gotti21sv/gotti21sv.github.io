const products = document.querySelectorAll(".product");

/* ==========================================
   Ждём полной загрузки страницы
========================================== */

window.addEventListener("load", () => {

    const images = document.images;

    let loaded = 0;

    function reveal(){

        products.forEach((card,index)=>{

            setTimeout(()=>{

                card.classList.add("show");

            },index*45);

        });

    }

    if(images.length===0){

        setTimeout(reveal,120);

        return;

    }

    for(const img of images){

        if(img.complete){

            loaded++;

        }else{

            img.onload=()=>{

                loaded++;

                if(loaded===images.length){

                    setTimeout(reveal,120);

                }

            };

        }

    }

    if(loaded===images.length){

        setTimeout(reveal,120);

    }

});

/* ==========================================
   Переход
========================================== */

products.forEach(card=>{

card.addEventListener("click",()=>{

const id=card.dataset.id;

card.style.transform="scale(.985)";

setTimeout(()=>{

document.body.style.opacity="0";

document.body.style.transition=".35s ease";

},70);

setTimeout(()=>{

location.href="product.html?id="+id;

},420);

});

});
/* =========================================
   VIEW SWITCH
========================================= */

const catalog = document.querySelector(".catalog");

const buttons = document.querySelectorAll(".view-btn");

buttons.forEach(button=>{

button.addEventListener("click",()=>{

if(button.classList.contains("active")) return;

buttons.forEach(b=>b.classList.remove("active"));

button.classList.add("active");

catalog.classList.add("switching");

setTimeout(()=>{

catalog.classList.remove("view-1");
catalog.classList.remove("view-4");
catalog.classList.remove("view-12");

catalog.classList.add("view-"+button.dataset.view);

requestAnimationFrame(()=>{

setTimeout(()=>{

catalog.classList.remove("switching");

},70);

});

},180);

});

});

catalog.classList.add("view-4");

});

});

catalog.classList.add("view-4");