function getYear() {
	let today = new Date();
	let year = today.getFullYear();
	let ele = document.getElementById('thisyear');
	ele.innerHTML = year;
}
getYear();
