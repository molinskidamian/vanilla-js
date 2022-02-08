(function () {
	const searchForm = document.querySelector('.search-form');
	const searchField = document.querySelector('.search-field');
	const searchBtn = document.querySelector('.search-btn');
	const query = [];



	let status = 0;

    showQuery = (e) => {
		e.preventDefault();

		
    }

	searchBtn.addEventListener('click', e => {
		if (status === 0) {
			e.preventDefault();
			searchField.classList.remove('search-hide');

			status = 1;
			console.log(status);
		} else {
			let text = searchField.value;
			console.log(text);
			query.push(text);
			console.log(query);

			console.log('The form has been sent.');
		}
	});
})();
