document.querySelectorAll(".product").forEach(card => {

    card.addEventListener("click", function () {

        const id = this.dataset.id;

        window.location.href = "product.html?id=" + id;

    });

});