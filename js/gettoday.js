function getToday() {
	let today = new Date();
	let weeks = ['日','月','火','水','木','金','土'];
	let y = today.getFullYear();
	let str = 'Today：';
	
	str += today.getFullYear() + '年';
	if (str == 2019) {
		str += '(令和元年)';
	} else {
		str += '(令和' + (y - 2018) + '年)'
	}
	str += (today.getMonth() + 1) + '月';
	str += today.getDate() + '日';
	str += '(' + weeks[today.getDay()] + ')';
	document.querySelector('#header-today').textContent = str;
}
getToday();