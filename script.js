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