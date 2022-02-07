(function () {
	const searchForm = document.querySelector('.search-form');
	const searchField = document.querySelector('.search-field');
	const searchBtn = document.querySelector('.search-btn');

	let status = 0;

	searchBtn.addEventListener('click', e => {
		if (status === 0) {
			e.preventDefault();
			searchField.classList.remove('search-hide');

			status = 1;
			console.log(status);
		} else {
			console.log('super');
			e.target.submit;
		}
	});
})();
