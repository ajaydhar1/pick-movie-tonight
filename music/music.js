const MUSIC_HISTORY_KEY = "pickMusicNowHistory";
const MUSIC_HISTORY_LIMIT = 12;

function getMusicHistory() {
  return JSON.parse(localStorage.getItem(MUSIC_HISTORY_KEY)) || [];
}

function saveMusicHistoryItem(song) {
  const history = getMusicHistory();

  const item = {
    title: song.title,
    artist: song.artist,
    thumbnail: song.thumbnail,
    youtubeId: song.youtubeId || song.videoId || song.id,
    source: song.source || "Music",
    playedAt: new Date().toISOString()
  };

  const updatedHistory = [
    item,
    ...history.filter(existing => existing.youtubeId !== item.youtubeId)
  ].slice(0, MUSIC_HISTORY_LIMIT);

  localStorage.setItem(MUSIC_HISTORY_KEY, JSON.stringify(updatedHistory));
  renderMusicHistory();
}

function renderMusicHistory() {
  const row = document.getElementById("songHistoryRow");
  if (!row) return;

  const history = getMusicHistory();

  row.innerHTML = history.map(song => {
    const title = escapeHTML(song.title || "Untitled");
    const artist = escapeHTML(song.artist || "");
    const thumbnail = song.thumbnail || "";
    const youtubeId = song.youtubeId || song.videoId || song.id || "";
    const source = escapeHTML(song.source || "Music");

    return `
      <article class="item-card">
        <button
          class="item-card-button"
          type="button"
          data-title="${title}"
          data-artist="${artist}"
          data-thumbnail="${escapeHTML(thumbnail)}"
          data-youtube-id="${escapeHTML(youtubeId)}"
          aria-label="Play ${title}"
        >
          ${thumbnail ? `<img src="${escapeHTML(thumbnail)}" alt="${title} thumbnail" loading="lazy">` : ""}
          <div class="item-card-body">
            <h3>${title}</h3>
            <p>${artist}</p>
            <span>${source}</span>
          </div>
        </button>
      </article>
    `;
  }).join("");
}

function setupMusicHistoryPlayback() {
  const row = document.getElementById("songHistoryRow");
  if (!row) return;

  row.addEventListener("click", event => {
    const button = event.target.closest(".item-card-button");
    if (!button) return;

    const song = {
      title: button.dataset.title,
      artist: button.dataset.artist,
      thumbnail: button.dataset.thumbnail,
      youtubeId: button.dataset.youtubeId,
      source: "Recently Played"
    };

    // Remember which history item we're viewing
    const history = getMusicHistory();
    musicHistoryCursor = history.findIndex(
      item => item.youtubeId === song.youtubeId
    );

    openMusicPlayer(song);

    // Optional: do not save it again if it's already in history
    // saveMusicHistoryItem(song);
  });
}

function setupMusicHistoryClear() {
  const button = document.getElementById("clearSongHistoryBtn");
  if (!button) return;

  button.addEventListener("click", () => {
    localStorage.removeItem(MUSIC_HISTORY_KEY);
    renderMusicHistory();
  });
}


let musicHistoryCursor = null;

function playSongFromHistoryIndex(index) {
  const history = getMusicHistory();

  if (index < 0 || index >= history.length) return;

  musicHistoryCursor = index;

  openMusicPlayer(history[index]);
}

function playPreviousHistorySong() {
  const history = getMusicHistory();
  if (!history.length) return;

  if (musicHistoryCursor === null) {
    musicHistoryCursor = 0;
  }

  if (musicHistoryCursor < history.length - 1) {
    playSongFromHistoryIndex(musicHistoryCursor + 1);
  }
}

function playNextHistoryOrRandomSong() {
  const history = getMusicHistory();

  if (!history.length || musicHistoryCursor === null) {
    playRandomVibeSong();
    return;
  }

  if (musicHistoryCursor > 0) {
    playSongFromHistoryIndex(musicHistoryCursor - 1);
  } else {
    playRandomVibeSong();
  }
}

function playRandomVibeSong() {
  const playableSongs = allSongs.filter(song =>
    song.youtubeId || song.videoId || song.id
  );

  const song = playableSongs[Math.floor(Math.random() * playableSongs.length)];
  if (!song) return;

  openMusicPlayer(song);

  saveMusicHistoryItem({
    ...song,
    source: "Random vibe"
  });

  musicHistoryCursor = 0;
}

function playSong(song, options = {}) {
  const {
    saveToHistory = true,
    source = song.source || "Music"
  } = options;

  // existing YouTube/player/modal logic here
  openMusicPlayer(song);

  if (saveToHistory) {
    saveMusicHistoryItem({
      ...song,
      source
    });

    const history = getMusicHistory();
    musicHistoryCursor = history.length - 1;
  }
}

document.addEventListener("keydown", event => {
  const activeTag = document.activeElement?.tagName?.toLowerCase();

  if (activeTag === "input" || activeTag === "textarea") return;

  if (event.key === "ArrowRight" || event.key === "MediaTrackNext") {
    event.preventDefault();
    playNextHistoryOrRandomSong();
  }

  if (event.key === "ArrowLeft" || event.key === "MediaTrackPrevious") {
    event.preventDefault();
    playPreviousHistorySong();
  }
});

function setupMediaModalNavigationButtons() {
  const prevButton = document.getElementById("media-prev-btn");
  const nextButton = document.getElementById("media-next-btn");

  if (prevButton) {
    prevButton.addEventListener("click", () => {
      playPreviousHistorySong();
    });
  }

  if (nextButton) {
    nextButton.addEventListener("click", () => {
      playNextHistoryOrRandomSong();
    });
  }
}