// shortFullBtn
const shortFullTexts = document.querySelectorAll('.shortFullText');
const shortFullBtns = document.querySelectorAll('.shortFullBtn');

if (shortFullBtns) {
	for (let i = 0; i < shortFullTexts.length; i++) {
		shortFullBtns[i].addEventListener('click', () => {
			shortFullTexts[i].classList.toggle('fullText');
			if (shortFullBtns[i].textContent==="戻る"){
				shortFullBtns[i].textContent="全文";
			} else {
				shortFullBtns[i].textContent="戻る";
			}
		});
	};
};

// darkmoodBtn
const darkBtns = document.querySelectorAll('.darkBtn');
const boxes = document.querySelectorAll('.code-box');

if (darkBtns) {
	for (let i = 0; i < darkBtns.length; i++) {
		darkBtns[i].addEventListener('click', () => {
			boxes[i].classList.toggle('night');
			
			if(darkBtns[i].textContent === 'dark') {
			darkBtns[i].textContent = 'light';
			} else {
				darkBtns[i].textContent = 'dark';
			}
		});
	};
};