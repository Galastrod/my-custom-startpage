function updateClock() {
	const clockElement = document.querySelector('.clock-js');
	if (!clockElement) return;

	const now = new Date();
	const hours = String(now.getHours()).padStart(2, '0');
	const minutes = String(now.getMinutes()).padStart(2, '0');
	const seconds = String(now.getSeconds()).padStart(2, '0');

	clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

updateClock();
setInterval(updateClock, 1000);

function renderContent(data) {
	let container = document.querySelector('.links-js');
	if (!container) return;

	const html = data.map(section => {
	  const links = section.content.map(item => {
		return `<a href="${item.href}" target="_blank">${item.name}</a>`;
	  }).join('<br>');

	  return `
		<div class="col">
		  <h3 class="cat-name">${section.name}</h3>
		  ${links}
		</div>
	  `;
}).join('');

container.innerHTML = html;
}


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
}

function setRandomBackground() {
  	let index = Math.floor(Math.random() * 10),
  		paddedIndex = String(index).padStart(2, '0'),
  		imageUrl = `bg_${paddedIndex}.jpg`,
		element = document.querySelector('.feh');

	element.style.backgroundImage = `url('./bg/${imageUrl}')`;
}

setRandomBackground();
insertDate();
renderContent(data);