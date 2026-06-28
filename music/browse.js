const SONGS_PER_GROUP = 24;
const HISTORY_KEY = "pickMusicNowHistory";

const playlistSectionsEl = document.getElementById("playlistSections");
const searchInput = document.getElementById("songSearch");
const vibeButton = document.getElementById("vibeButton");

let allSongs = [];

initBrowse();

function initBrowse() {
  allSongs = Array.isArray(items) ? [...items] : [];

  renderPlaylistRows(PLAYLIST_SECTIONS || []);
  setupSearch();
  setupMediaModal();
  setupVibeButtons();

  renderMusicHistory();
  setupMusicHistoryClear();
  setupMusicHistoryPlayback();
  setupMediaModalNavigationButtons();

  document.addEventListener("click", event => {
    const button = event.target.closest(".item-card-button");
    if (!button) return;

    const row = button.closest(".item-row");
    const youtubeId = button.dataset.youtubeId;

    const song = allSongs.find(item =>
      String(item.youtubeId || item.videoId || item.id) === String(youtubeId)
    );

    if (!song) return;

    let queueSongs = [];

    try {
      queueSongs = JSON.parse(row?.dataset.playlistSongs || "[]");
    } catch {
      queueSongs = [];
    }

    setModalQueue(queueSongs.length ? queueSongs : allSongs, youtubeId);

    saveMusicHistoryItem({
      ...song,
      source: song.playlistName || "Browse"
    });

    openMusicPlayer(song);
  });
}

function renderPlaylistRows(sections) {
  if (!playlistSectionsEl) return;

  // Randomize the playlist order each page load
  const shuffledSections = shuffleArray(sections);

  playlistSectionsEl.innerHTML = shuffledSections.map(section => {
    const safeId = escapeHTML(section.id);
    const title = escapeHTML(section.title);

    return `
      <section class="item-section">
        <h2>${title}</h2>
        <div id="${safeId}" class="item-row"></div>
      </section>
    `;
  }).join("");

  shuffledSections.forEach(section => {
    const container = document.getElementById(section.id);
    renderRow(container, section.items || []);
  });
}

function renderRow(container, songs, shouldShuffle = true) {
  if (!container) return;

  const source = shouldShuffle ? shuffleArray(songs) : songs;
  const sample = source.slice(0, SONGS_PER_GROUP);

  container.dataset.playlistSongs = JSON.stringify(sample);

  container.innerHTML = sample.map(createSongCard).join("");
}

function createSongCard(song) {
  const title = escapeHTML(song.title || "Untitled song");
  const thumbnail = song.thumbnail || "";
  const youtubeId = song.youtubeId || song.videoId || song.id || "";
  const playlistName = song.playlistName || "";
  const rank = song.playlistPosition ? `#${song.playlistPosition}` : "";
  const channel = song.channel || "YouTube";

  const meta = [rank, playlistName, channel].filter(Boolean).join(" · ");

  return `
    <article class="item-card">
      <button
        class="item-card-button"
        type="button"
        data-youtube-id="${escapeHTML(youtubeId)}"
        aria-label="Play ${title}"
      >
        ${thumbnail ? `<img src="${escapeHTML(thumbnail)}" alt="${title} thumbnail" loading="lazy">` : ""}
        <div class="item-card-body">
          <h3>${title}</h3>
          <p>${escapeHTML(meta)}</p>
        </div>
      </button>
    </article>
  `;
}

function setupSearch() {
  if (!searchInput) return;

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();

    if (!query) {
      renderPlaylistRows(PLAYLIST_SECTIONS || []);
      return;
    }

    const matches = allSongs.filter(song => {
      const title = String(song.title || "").toLowerCase();
      const channel = String(song.channel || "").toLowerCase();
      const playlistName = String(song.playlistName || "").toLowerCase();
      const rank = String(song.playlistPosition || "");

      return (
        title.includes(query) ||
        channel.includes(query) ||
        playlistName.includes(query) ||
        rank.includes(query)
      );
    });

    renderSearchResults(matches);
  });
}

function renderSearchResults(songs) {
  if (!playlistSectionsEl) return;

  playlistSectionsEl.innerHTML = `
    <section class="item-section">
      <h2>Search Results</h2>
      <div id="searchResults" class="item-row"></div>
    </section>
  `;

  renderRow(document.getElementById("searchResults"), songs, false);
}

function setupVibeButtons() {
  const vibeButtons = document.querySelectorAll(".vibe-button");

  vibeButtons.forEach(button => {
    button.addEventListener("click", playRandomVibe);
  });
}

function playRandomVibe() {
  const playableSongs = allSongs.filter(song =>
    song.youtubeId || song.videoId || song.id
  );

  const song = playableSongs[Math.floor(Math.random() * playableSongs.length)];

  if (!song) return;

  saveMusicHistoryItem({
    ...song,
    source: "🎲 Vibe right now"
  });

  openMusicPlayer(song);
}

function openMusicPlayer(song) {
  const youtubeId = song.youtubeId || song.videoId || song.id;

  if (!youtubeId) return;

  const modal = document.getElementById("media-modal");
  const iframe = document.getElementById("media-modal-iframe");
  const titleText = document.getElementById("media-modal-title-text");

  if (!modal || !iframe || !titleText) {
    window.open(`https://www.youtube.com/watch?v=${youtubeId}`, "_blank", "noopener");
    return;
  }

  titleText.textContent = song.title || "Song";
  iframe.src = `https://www.youtube.com/embed/${youtubeId}?autoplay=1`;

  modal.classList.add("is-open");
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
}

function setupMediaModal() {
  const modal = document.getElementById("media-modal");
  const iframe = document.getElementById("media-modal-iframe");
  const closeBtn = document.getElementById("media-modal-close");
  const backdrop = document.querySelector(".media-modal-backdrop");

  if (!modal || !iframe) return;

  function closeModal() {
    modal.classList.remove("is-open");
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    iframe.src = "";
  }

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (backdrop) backdrop.addEventListener("click", closeModal);

  document.addEventListener("keydown", event => {
    if (
      event.key === "Escape" &&
      (modal.classList.contains("is-open") || modal.classList.contains("active"))
    ) {
      closeModal();
    }
  });
}

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
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