document.addEventListener('DOMContentLoaded', () => {
  fetch('./db/games.json')
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          if (!Array.isArray(data)) {
              throw new Error('Invalid JSON format');
          }
          const gamesSection = document.getElementById('games');
          data.forEach(game => {
              const gameCard = document.createElement('div');
              gameCard.classList.add('game-card');
              gameCard.innerHTML = `
                <a href="${game.link}" target="_blank" class="buy-button">
                    <img src="${game.image}" alt="${game.title}">
                    <h3>${game.title}</h3>
                    <p>by ${game.developer}</p>
                    <p>${game.price}</p>
                </a>
              `;
              gamesSection.appendChild(gameCard);
          });
      })
      .catch(error => {
          console.error('Error fetching and parsing data:', error);
      });
});
