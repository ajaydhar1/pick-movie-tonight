const DATA_URL = "/data/movies-expanded-3.json";
const POSTER_FALLBACK = "";

let browsePlaylists = {};

const rows = {
  tonightsPicks: document.getElementById("tonightsPicks"),
  movies2020s: document.getElementById("movies2020s"),
  movies2010s: document.getElementById("movies2010s"),
  movies2000s: document.getElementById("movies2000s"),
  movies1990s: document.getElementById("movies1990s"),
  moviesBefore1990: document.getElementById("moviesBefore1990"),
};

const searchInput = document.getElementById("movieSearch");

let allMovies = [];

initBrowse();

async function initBrowse() {
  try {
    const response = await fetch(DATA_URL);
    allMovies = await response.json();

    renderBrowseRows(allMovies);
    setupSearch();

    document.addEventListener("click", async event => {
      const button = event.target.closest(".movie-card-button");
      if (!button) return;

      const rowKey = button.dataset.rowKey;
      const rowIndex = Number(button.dataset.rowIndex);

      const playlist = browsePlaylists[rowKey];

      if (!playlist) return;

      window.setTrailerPlaylist(
        playlist.map(movie => ({
          ...movie,
          source: `🔎 Browse`
        })),
        rowIndex,
        button.dataset.rowLabel
      );

      openTrailerModal();
      await window.playTrailerAt(rowIndex);
    });

  } catch (error) {
    console.error("Could not load movie data:", error);
  }
}

function renderBrowseRows(movies) {
  clearRows();

  const shuffled = [...movies].sort(() => Math.random() - 0.5);

  browsePlaylists = {
    tonightsPicks: shuffled.slice(0, 12),
    movies2020s: filterByYearRange(movies, 2020, 2026).slice(0, 18),
    movies2010s: filterByYearRange(movies, 2010, 2019).slice(0, 18),
    movies2000s: filterByYearRange(movies, 2000, 2009).slice(0, 18),
    movies1990s: filterByYearRange(movies, 1990, 1999).slice(0, 18),
    moviesBefore1990: movies.filter(movie => Number(movie.year) < 1990).slice(0, 18)
  };

  renderRow(rows.tonightsPicks, browsePlaylists.tonightsPicks, "tonightsPicks", "Tonight's Picks");
  renderRow(rows.movies2020s, browsePlaylists.movies2020s, "movies2020s", "2020s Movies");
  renderRow(rows.movies2010s, browsePlaylists.movies2010s, "movies2010s", "2010s Movies");
  renderRow(rows.movies2000s, browsePlaylists.movies2000s, "movies2000s", "2000s Movies");
  renderRow(rows.movies1990s, browsePlaylists.movies1990s, "movies1990s", "1990s Movies");
  renderRow(rows.moviesBefore1990, browsePlaylists.moviesBefore1990, "moviesBefore1990", "Before 1990");
}

function renderRow(container, movies, rowKey, rowLabel) {
  if (!container) return;

  container.innerHTML = movies
    .map((movie, index) => createMovieCard(movie, rowKey, rowLabel, index))
    .join("");
}

function createMovieCard(movie, rowKey, rowLabel, index) {
  const title = escapeHTML(movie.title || "Untitled");
  const year = escapeHTML(String(movie.year || ""));
  const poster = movie.poster || movie.posterUrl || movie.poster_path || "";

  return `
    <article class="movie-card">
      <button
          class="movie-card-button"
          type="button"
          data-row-key="${rowKey}"
          data-row-label="${escapeHTML(rowLabel)}"
          data-row-index="${index}"
          data-title="${title}"
          data-year="${year}"
          data-poster="${escapeHTML(poster)}"
          aria-label="Watch trailer for ${title}"
      >
        ${poster ? `<img src="${escapeHTML(poster)}" alt="${title} poster" loading="lazy">` : ""}
        <div class="movie-card-body">
          <h3>${title}</h3>
          <p>${year}</p>
        </div>
      </button>
    </article>
  `;
}

function filterByYearRange(movies, start, end) {
  return movies.filter(movie => {
    const year = Number(movie.year);
    return year >= start && year <= end;
  });
}

function setupSearch() {
  if (!searchInput) return;

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();

    if (!query) {
      renderBrowseRows(allMovies);
      return;
    }

    const matches = allMovies.filter(movie => {
      const title = String(movie.title || "").toLowerCase();
      const year = String(movie.year || "");
      const genres = Array.isArray(movie.genres)
        ? movie.genres.join(" ").toLowerCase()
        : "";

      return (
        title.includes(query) ||
        year.includes(query) ||
        genres.includes(query)
      );
    });

    renderBrowseSearchRows(matches);
  });
}

function renderBrowseSearchRows(movies) {
  clearRows();

  browsePlaylists = {
    searchAll: movies.slice(0, 12),
    search2020s: filterByYearRange(movies, 2020, 2026),
    search2010s: filterByYearRange(movies, 2010, 2019),
    search2000s: filterByYearRange(movies, 2000, 2009),
    search1990s: filterByYearRange(movies, 1990, 1999),
    searchBefore1990: movies.filter(movie => Number(movie.year) < 1990)
  };

  renderRow(rows.tonightsPicks, browsePlaylists.searchAll, "searchAll", "Search Results");
  renderRow(rows.movies2020s, browsePlaylists.search2020s, "search2020s", "Search: 2020s Movies");
  renderRow(rows.movies2010s, browsePlaylists.search2010s, "search2010s", "Search: 2010s Movies");
  renderRow(rows.movies2000s, browsePlaylists.search2000s, "search2000s", "Search: 2000s Movies");
  renderRow(rows.movies1990s, browsePlaylists.search1990s, "search1990s", "Search: 1990s Movies");
  renderRow(rows.moviesBefore1990, browsePlaylists.searchBefore1990, "searchBefore1990", "Search: Before 1990");
}

function clearRows() {
  Object.values(rows).forEach(row => {
    if (row) row.innerHTML = "";
  });
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  }[char]));
}