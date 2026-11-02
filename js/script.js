
document.addEventListener("DOMContentLoaded", function () {

    const contactForm = document.querySelector(".contact-form form");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const subject = document.getElementById("subject").value;
            const message = document.getElementById("message").value;

            if (name && email && subject && message) {

                alert("Thank you, " + name +
                    "! Your message has been received in this demo.");

                contactForm.reset();

            } else {

                alert("Please complete all fields.");

            }

        });

    }



    const productCards = document.querySelectorAll(".product-card");

    if (productCards.length > 0) {

        let cart = [];

        const cartContainer = document.createElement("div");

        cartContainer.id = "shopping-cart";

        cartContainer.innerHTML = `
            <h2>Your Shopping Cart</h2>
            <div id="cart-items"></div>
            <h3>Total: R<span id="cart-total">0</span></h3>
            <button id="clear-cart">Clear Order</button>
        `;

        document.body.appendChild(cartContainer);

        const cartItems = document.getElementById("cart-items");
        const cartTotal = document.getElementById("cart-total");

        productCards.forEach(function (card) {

            const button = card.querySelector("button");

            if (button) {

                button.addEventListener("click", function () {

                    const productName =
                        card.querySelector("h3").textContent;

                    const priceText = card.innerText.match(/R\s*(\d+(?:\.\d{1,2})?)/);

                    if (!priceText) {
                        alert("Product price could not be found.");
                        return;
                    }

                    const price = Number(priceText[1]);

                    cart.push({
                        name: productName,
                        price: price
                    });

                    updateCart();

                    alert(productName + " added to your order!");

                });

            }

        });


        function updateCart() {

            cartItems.innerHTML = "";

            let total = 0;

            cart.forEach(function (item, index) {

                total += item.price;

                const itemElement = document.createElement("p");

                itemElement.textContent =
                    (index + 1) + ". " + item.name +
                    " - R" + item.price;

                cartItems.appendChild(itemElement);

            });

            cartTotal.textContent = total.toFixed(2);

        }


        document.getElementById("clear-cart")
            .addEventListener("click", function () {

                cart = [];

                updateCart();

                alert("Your order has been cleared.");

            });

    }



    const newsButtons = document.querySelectorAll(".news-content button");

    newsButtons.forEach(function (button) {

        if (button.textContent.trim() === "Read More") {

            button.addEventListener("click", function () {

                alert(
                    "Thank you for your interest in Kota Joe! " +
                    "More news and updates are coming soon."
                );

            });

        }

    });

});