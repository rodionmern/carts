var cartName, priceName;

function addToCart() {
	var priceDOM = document.getElementById('product_price_one').innerHTML;
	var nameDOM = document.getElementById('product_name_one').innerHTML;
	console.log(priceDOM,nameDOM)
	localStorage.setItem('price', priceDOM)
	localStorage.setItem('name', nameDOM)
	// var cartName = document.getElementById('cartName').innerHTML = localStorage.getItem('name');
	// var priceName = document.getElementById('priceName').innerHTML = localStorage.getItem('price');

	// var newDiv = document.createElement("div");
	// newDiv.innerHTML = `
	// 					<div class="cart__description">
	// 						<div class="produuct">
	// 							<p id="${nameDOM}">Неиз3231вестный товар</p>
	// 							<p id="${priceDOM}">223???₽</p>
	// 						</div>
	// 					</div>`;

	var parent = document.querySelector('.cart');

	var cart__ = document.createElement('div');
	parent.appendChild(cart__);

	var name = document.createElement('p');
	name.textContent = `${nameDOM}`;

	var price = document.createElement('p');
	price.textContent = `${priceDOM}`;

	cart__.appendChild(name);
	cart__.appendChild(price);
}

function clearCart() {
	var cartName = document.getElementById('cartName').innerHTML = "Неизвестный товар";
	var priceName = document.getElementById('priceName').innerHTML = "???₽";
}