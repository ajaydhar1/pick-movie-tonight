const DATA_URL = "/data/movies-expanded-3.json";
const POSTER_FALLBACK = "";

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

      const title = button.dataset.title;
      const year = button.dataset.year;
      const poster = button.dataset.poster;

      try {
        const response = await fetch("/.netlify/functions/get-trailer", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            title,
            year
          })
        });

        if (!response.ok) {
          throw new Error("Trailer lookup failed");
        }

        const data = await response.json();

        if (!data.youtubeKey) {
          alert("No trailer available for this movie yet.");
          return;
        }

        saveTrailerHistoryItem({
          title,
          year,
          poster,
          youtubeKey: data.youtubeKey,
          source: "🔎 Browse"
        });

        openTrailerModal(`https://www.youtube.com/watch?v=${data.youtubeKey}`);

      } catch (error) {
        console.error(error);
        alert("Could not load a trailer right now.");
      }
    });

  } catch (error) {
    console.error("Could not load movie data:", error);
  }
}

function renderBrowseRows(movies) {
  clearRows();

  const shuffled = [...movies].sort(() => Math.random() - 0.5);

  renderRow(rows.tonightsPicks, shuffled.slice(0, 12));
  renderRow(rows.movies2020s, filterByYearRange(movies, 2020, 2026).slice(0, 18));
  renderRow(rows.movies2010s, filterByYearRange(movies, 2010, 2019).slice(0, 18));
  renderRow(rows.movies2000s, filterByYearRange(movies, 2000, 2009).slice(0, 18));
  renderRow(rows.movies1990s, filterByYearRange(movies, 1990, 1999).slice(0, 18));
  renderRow(rows.moviesBefore1990, movies.filter(movie => Number(movie.year) < 1990).slice(0, 18));
}

function renderRow(container, movies) {
  if (!container) return;

  container.innerHTML = movies.map(createMovieCard).join("");
}

function createMovieCard(movie) {
  const title = escapeHTML(movie.title || "Untitled");
  const year = escapeHTML(String(movie.year || ""));
  const poster = movie.poster || movie.posterUrl || movie.poster_path || "";
  const trailer =
    movie.trailer ||
    movie.trailerUrl ||
    movie.trailer_url ||
    movie.youtube ||
    movie.youtubeUrl ||
    movie.youtube_url ||
    movie.youtubeKey ||
    movie.youtube_key ||
    movie.trailers?.[0] ||
    "";

  //console.log(movie.title, movie);

  return `
    <article class="movie-card">
      <button
        class="movie-card-button"
        type="button"
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
      const genres = Array.isArray(movie.genres) ? movie.genres.join(" ").toLowerCase() : "";

      return title.includes(query) || year.includes(query) || genres.includes(query);
    });

    clearRows();
    renderRow(rows.tonightsPicks, matches.slice(0, 30));
  });
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