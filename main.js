function updateClock() {
	const clockElement = document.querySelector('.clock-js');
	if (!clockElement) return;

	const now = new Date();
	const hours = String(now.getHours()).padStart(2, '0');
	const minutes = String(now.getMinutes()).padStart(2, '0');
	const seconds = String(now.getSeconds()).padStart(2, '0');

	clockElement.textContent = `${hours}:${minutes}:${seconds}`;
};

function renderContent(data) {
	let container = document.querySelector('.links-js'),
		content = "";

	data
		.forEach( section => {
		let links = '';


		section
			.content
			.forEach( link =>
			{
				links += `<a href="${link.href}" target="_blank">${link.name}</a>`;
			} );

		content +=
			`
			<div class="col">
		  		<h3 class="cat-name">${section.name}</h3>
		  		${links}
			</div>`;
		} );

container.innerHTML = content;
};

function initDotsSlider() {
	let
		dotsContainer = document.querySelector('.slider-dots-js'),
		cols = document.querySelectorAll('.links-js .col'),
		totalSteps = cols.length - 3,
		dotsHtml = '';

	if (cols.length <= 4) {
		cols.forEach(col => col.classList.add('col-show'));
		return;
	};

	for (let i = 0; i < totalSteps; i++) {
		dotsHtml += `<span class="dot btn" data-index="${i}">${i + 1}</span>`;
	};

	dotsContainer.innerHTML = dotsHtml;

	const dots = dotsContainer.querySelectorAll('.dot');

	dots.forEach(dot => {
		dot.addEventListener('click', () => {
			let targetIndex = parseInt(dot.dataset.index) * 4;

			cols.forEach((col, index) => {
				if (index >= targetIndex && index < targetIndex + 4) {
					col.classList.add('col-show');
				} else {
					col.classList.remove('col-show');
				}
			});

			dots.forEach(d => d.classList.toggle('active', d === dot));
		});
	});

	if (dots.length > 0) dots[0].click();
};

document.getElementById('google-search').addEventListener('keydown', function (e) {
	if (e.key === 'Enter') {
		const query = encodeURIComponent(this.value.trim());
		if (query) {
		window.location.href = `https://www.google.com/search?q=${query}`;
		}
	}
});

function insertDate() {
  let now = new Date();
  let day = String(now.getDate()).padStart(2, '0');
  let month = String(now.getMonth() + 1).padStart(2, '0');
  let year = now.getFullYear();
  let weekdays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  let weekday = weekdays[now.getDay()];
  let dateString = `${day}-${month}-${year} (${weekday})`;
  let element = document.querySelector('.js-data');
  if (element) {
    element.textContent = dateString;
  }
};

function setRandomBackground() {
  	let index = Math.floor(Math.random() * 10),
  		paddedIndex = String(index).padStart(2, '0'),
  		imageUrl = `bg_${paddedIndex}.jpg`,
		element = document.querySelector('.feh');

	element.style.backgroundImage = `url('./bg/${imageUrl}')`;
};

function setScheme( index ) {
  if( !index )
    index = Math.floor(Math.random() * schemes.length);

  let 
  	scheme = schemes[index],
  	curent_schem_btn = document.querySelector( '.scheme__btn--active' );

  if( curent_schem_btn )
	curent_schem_btn.classList.remove( 'scheme__btn--active' );

  document
  	.getElementById( index )
	.classList
	.add( 'scheme__btn--active' );

  for (let [key, value] of Object.entries(scheme.vars)) {
    document.documentElement.style.setProperty(key, value);
  }
};

function schemeModuleRender( schemes )
{
	let 
		plane = document.createElement( 'div' ),
		html = "";

	schemes
		.forEach( (item, id) => {
			html += `<button class="scheme__btn btn" id="${id}">${ item.name }</button>`
		} );

	plane.classList.add( 'scheme-plane' );
	plane.innerHTML = html;

	document
		.body
		.append( plane );

	plane
		.querySelectorAll( 'button' )
		.forEach( btn => 
			{
				btn
					.addEventListener( 'click', ev => {
						setScheme( ev.target.id )
					} )
			} )
};



updateClock();
setInterval(updateClock, 1000);
setRandomBackground();
insertDate();
renderContent(data);
initDotsSlider();
schemeModuleRender( schemes );
setScheme();


document.addEventListener('keydown', ev =>
{
  if (ev.key === 'Tab') 
	document.querySelector( '.scheme-plane' ).classList.toggle( 'scheme-plane--active' );
});

