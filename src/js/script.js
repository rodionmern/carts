function addToCart() {
	var priceDOM = document.getElementById('price').innerHTML;
	var nameDOM = document.getElementById('nameProd').innerHTML;
	console.log(priceDOM,nameDOM)
	localStorage.setItem('price', priceDOM)
	localStorage.setItem('name', nameDOM)
}