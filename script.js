document.querySelectorAll(".product").forEach(card => {

    card.addEventListener("click", function () {

        const id = this.dataset.id;

        // плавное нажатие карточки
        this.style.transform = "scale(0.97)";
        this.style.opacity = "0.75";

        // плавное исчезновение всей страницы
        document.body.style.transition = "opacity .4s ease";
        document.body.style.opacity = "0";

        // переход после завершения анимации
        setTimeout(() => {

            window.location.href = "product.html?id=" + id;

        }, 350);

    });

});