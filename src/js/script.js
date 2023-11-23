var cartName, priceName;

function addToCart() {
	var priceDOM = document.getElementById('price').innerHTML;
	var nameDOM = document.getElementById('nameProd').innerHTML;
	console.log(priceDOM,nameDOM)
	localStorage.setItem('price', priceDOM)
	localStorage.setItem('name', nameDOM)
	var cartName = document.getElementById('cartName').innerHTML = localStorage.getItem('name');
	var priceName = document.getElementById('priceName').innerHTML = localStorage.getItem('price');
}

function clearCart() {
	var cartName = document.getElementById('cartName').innerHTML = "Неизвестный товар";
	var priceName = document.getElementById('priceName').innerHTML = "???₽";
}