function getYouTubeEmbed(url) {
  const match = String(url).match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtubeKey=)([^&]+)/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : `https://www.youtube.com/embed/${url}`;
}

function getYouTubeKeyFromUrl(url) {
  if (!url) return "";

  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname.includes("youtu.be")) {
      return parsedUrl.pathname.replace("/", "");
    }

    return parsedUrl.searchParams.get("v") || "";
  } catch {
    return "";
  }
}

function getYouTubePlaylistEmbed(url) {
  const listMatch = url.match(/[?&]list=([^&]+)/);
  const videoMatch = url.match(/[?&]v=([^&]+)/);

  if (!listMatch) return null;

  const listId = listMatch[1];
  const videoId = videoMatch ? videoMatch[1] : null;

  return videoId
    ? `https://www.youtube.com/embed/${videoId}?list=${listId}`
    : `https://www.youtube.com/embed/videoseries?list=${listId}`;
}

function openMediaModal(embedUrl, title = "Media", type = "media") {
  const modal = document.getElementById("trailer-modal");
  const iframe = document.getElementById("trailer-modal-iframe");
  const titleText = document.getElementById("media-modal-title-text");

  if (!modal || !iframe) return;

  if (embedUrl) {
    iframe.src = embedUrl;
  }

  if (titleText) {
    titleText.textContent = title;
  }

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
}

function openTrailerModal(trailerUrl = "") {
  showTrailerNavButtons();

  if (trailerUrl) {
    const embedUrl = getYouTubeEmbed(trailerUrl);
    if (!embedUrl) return;

    openMediaModal(`${embedUrl}?autoplay=1&rel=0`, "Trailer", "trailer");
    return;
  }

  openMediaModal(null, "Trailer", "trailer");
}

function openScoreModal(scorePlaylistUrl) {
  hideTrailerNavButtons();
  const embedUrl = getYouTubePlaylistEmbed(scorePlaylistUrl);
  if (!embedUrl) return;
  openMediaModal(`${embedUrl}${embedUrl.includes("?") ? "&" : "?"}rel=0`, "Film Score", "score");
}

function closeTrailerModal() {
  const modal = document.getElementById("trailer-modal");
  const iframe = document.getElementById("trailer-modal-iframe");
  const eq = document.getElementById("media-eq");

  if (iframe) iframe.src = "";
  eq?.classList.remove("is-active");
  modal?.classList.remove("is-open");
  modal?.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

const TRAILER_HISTORY_KEY = "pickMovieTonightTrailerHistory";
const TRAILER_HISTORY_LIMIT = 250;

function saveTrailerHistoryItem(movie) {
  if (!movie?.title) return;

  const item = {
    title: movie.title,
    year: movie.year || "",
    poster: movie.poster || movie.posterUrl || movie.poster_path || movie.posterUrlFull || "",
    youtubeKey: movie.youtubeKey || "",
    source: movie.source || "Trailer",
    watchedAt: new Date().toISOString()
  };

  const existing = JSON.parse(localStorage.getItem(TRAILER_HISTORY_KEY) || "[]");

  const withoutDuplicate = existing.filter(saved =>
    !(saved.title === item.title && String(saved.year) === String(item.year))
  );

  const updated = [item, ...withoutDuplicate].slice(0, TRAILER_HISTORY_LIMIT);

  localStorage.setItem(TRAILER_HISTORY_KEY, JSON.stringify(updated));
}

function getTrailerHistory() {
  return JSON.parse(localStorage.getItem(TRAILER_HISTORY_KEY) || "[]");
}

function clearTrailerHistory() {
  localStorage.removeItem(TRAILER_HISTORY_KEY);
}

function openTrailerFromHistory(index) {
  const history = getTrailerHistory();

  if (!history.length) return;

  window.setTrailerPlaylist(history, index, "🕘 Trailer History");
  window.playTrailerAt(index);

  openTrailerModal();
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("trailer-modal-close")?.addEventListener("click", closeTrailerModal);
  document.querySelector(".trailer-modal-backdrop")?.addEventListener("click", closeTrailerModal);

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeTrailerModal();
  });
});

const homePicksRow = document.getElementById("homePicksRow");

let homePicks = [];

async function renderHomePicks() {
    if (!homePicksRow) return;

    const response = await fetch("/data/movies-expanded-3.json");
    const expandedMovies = await response.json();

    homePicks = shuffle(expandedMovies).slice(0, 6);

    homePicksRow.innerHTML = homePicks.map((movie, index) => {
        const title = escapeHTML(movie.title || "Untitled");
        const year = escapeHTML(String(movie.year || ""));
        const poster = movie.poster || movie.posterUrl || movie.poster_path || movie.posterUrlFull || "";

        return `
      <article class="movie-card">
        <button
          class="movie-card-button"
          type="button"
          data-home-pick-index="${index}"
          data-home-pick-title="${title}"
          data-home-pick-year="${year}"
          data-home-pick-poster="${escapeHTML(poster)}"
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
    }).join("");
}

document.addEventListener("click", async event => {
    const button = event.target.closest("[data-home-pick-title]");
    if (!button) return;

    const movieIndex = Number(button.dataset.homePickIndex);

    window.setTrailerPlaylist(
        homePicks.map(movie => ({
            ...movie,
            source: "🍿 Tonight's Picks"
        })),
        movieIndex,
        "🍿 Tonight's Picks"
    );

    await window.playTrailerAt(movieIndex);
    openTrailerModal();
});

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
    }[char]));
}

renderHomePicks();