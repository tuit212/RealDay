// header start
let lists = document.querySelectorAll(".header__item-list");

for (let i = 0; i < lists.length; i++) {
	lists[i].addEventListener('click', function() {
		for (let x = 0; x < lists.length; x++) {
			if (lists[x] == this) {
				lists[x].classList.add('active');
			} else {
				lists[x].classList.remove('active');
			}
		}
	});
}

// header end