const buyButton = document.getElementById("buy-product");
const productInCart = document.createElement("div")

function buyProduct(){
	if (buyButton.value == "false") {
		buyButton.value = "true";
		buyButton.innerHTML = "Added to Cart";
		productInCart.className = "productInCart";
		productInCart.innerHTML = "<p>Product Name</p>";
		document.getElementById("cart").append(productInCart)
	}
	else {
		buyButton.value = "false";
		buyButton.innerHTML = "Buy";
		productInCart.innerHTML = "<p></p>";
	};
};

buyButton.addEventListener("click", buyProduct);
