function getYouTubeEmbed(url) {
  const match = String(url).match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtubeKey=)([^&]+)/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : `https://www.youtube.com/embed/${url}`;
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

function openMediaModal(embedUrl, title = "Media", mediaType = "media") {
  const modal = document.getElementById("trailer-modal");
  if (!modal || !embedUrl) return;

  const dialog = modal.querySelector(".trailer-modal-dialog");
  const body = modal.querySelector(".trailer-modal-body");
  const iframe = document.getElementById("trailer-modal-iframe");
  const titleText = document.getElementById("media-modal-title-text");
  const eq = document.getElementById("media-eq");

  if (!iframe) return;

  iframe.src = embedUrl;
  if (titleText) titleText.textContent = title;

  dialog?.classList.remove("is-score");
  body?.classList.remove("is-score");

  if (mediaType === "score") {
    eq?.classList.add("is-active");
    dialog?.classList.add("is-score");
    body?.classList.add("is-score");
  } else {
    eq?.classList.remove("is-active");
  }

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function openTrailerModal(trailerUrl) {
  const embedUrl = getYouTubeEmbed(trailerUrl);
  if (!embedUrl) return;
  openMediaModal(`${embedUrl}?autoplay=1&rel=0`, "Trailer", "trailer");
}

function openScoreModal(scorePlaylistUrl) {
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

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("trailer-modal-close")?.addEventListener("click", closeTrailerModal);
  document.querySelector(".trailer-modal-backdrop")?.addEventListener("click", closeTrailerModal);

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeTrailerModal();
  });
});