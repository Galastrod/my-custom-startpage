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

renderContent(data);

document.getElementById('google-search').addEventListener('keydown', function (e) {
	if (e.key === 'Enter') {
		const query = encodeURIComponent(this.value.trim());
		if (query) {
		window.location.href = `https://www.google.com/search?q=${query}`;
		}
	}
});
