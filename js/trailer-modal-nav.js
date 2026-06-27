(function () {
    let trailerPlaylist = [];
    let currentTrailerIndex = -1;
    let trailerContextLabel = "Current list";

    const iframe = document.getElementById("trailer-modal-iframe");
    const titleText = document.getElementById("media-modal-title-text");
    const contextText = document.getElementById("media-modal-context");
    const prevButton = document.getElementById("trailer-prev-button");
    const nextButton = document.getElementById("trailer-next-button");

    if (!iframe || !titleText || !prevButton || !nextButton) return;

    function getVideoKey(item) {
        return item.youtubeKey || item.trailerKey || item.videoId || item.youtubeId || "";
    }

    function getEmbedUrl(videoKey) {
        return `https://www.youtube.com/embed/${videoKey}?autoplay=1&rel=0`;
    }

    async function fetchTrailerKey(item) {
        const response = await fetch("/.netlify/functions/get-trailer", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: item.title,
                year: item.year
            })
        });

        if (!response.ok) throw new Error("Trailer lookup failed");

        const data = await response.json();
        return data.youtubeKey || "";
    }

    function updateContextLabel() {
        if (contextText) {
            contextText.textContent = `Navigating: ${trailerContextLabel}`;
        }
    }

    function updateNavButtons() {
        const hasMultiple = trailerPlaylist.length > 1;

        prevButton.disabled = !hasMultiple;
        nextButton.disabled = !hasMultiple;
    }

    function setTrailerPlaylist(items, startIndex = 0, contextLabel = "Current list") {
        trailerPlaylist = Array.isArray(items) ? [...items] : [];
        currentTrailerIndex = startIndex;
        trailerContextLabel = contextLabel;

        if (currentTrailerIndex < 0) currentTrailerIndex = 0;
        if (currentTrailerIndex >= trailerPlaylist.length) {
            currentTrailerIndex = trailerPlaylist.length - 1;
        }

        updateContextLabel();
        updateNavButtons();
    }

    async function playTrailerAt(index) {
        if (!trailerPlaylist.length) return;

        if (index < 0) index = trailerPlaylist.length - 1;
        if (index >= trailerPlaylist.length) index = 0;

        currentTrailerIndex = index;

        const item = trailerPlaylist[currentTrailerIndex];

        titleText.textContent = item.title || "Finding trailer...";
        updateContextLabel();

        let videoKey = getVideoKey(item);

        try {
            prevButton.disabled = true;
            nextButton.disabled = true;

            if (!videoKey) {
                videoKey = await fetchTrailerKey(item);

                if (!videoKey) {
                    alert(`No trailer found for ${item.title || "this movie"}.`);
                    updateNavButtons();
                    return;
                }

                trailerPlaylist[currentTrailerIndex] = {
                    ...item,
                    youtubeKey: videoKey,
                    source: item.source || trailerContextLabel
                };
            }

            const currentItem = trailerPlaylist[currentTrailerIndex];

            iframe.src = getEmbedUrl(videoKey);
            titleText.textContent = currentItem.title || "Trailer";
            updateContextLabel();

            if (typeof saveTrailerHistoryItem === "function") {
                saveTrailerHistoryItem({
                    ...currentItem,
                    youtubeKey: videoKey,
                    source: currentItem.source || trailerContextLabel || "Trailer modal"
                });
            }

            if (typeof renderTrailerHistory === "function") {
                renderTrailerHistory();
            }
        } catch (error) {
            console.error(error);
            alert("Could not load a trailer right now.");
        } finally {
            updateNavButtons();
        }
    }

    prevButton.addEventListener("click", () => {
        playTrailerAt(currentTrailerIndex - 1);
    });

    nextButton.addEventListener("click", () => {
        playTrailerAt(currentTrailerIndex + 1);
    });

    window.setTrailerPlaylist = setTrailerPlaylist;
    window.playTrailerAt = playTrailerAt;

    function updateContextLabel() {
        if (contextText) {
            contextText.textContent = `Navigating: ${trailerContextLabel}`;
        }
    }

})();

function hideTrailerNavButtons() {
    const controls = document.querySelector(".trailer-modal-controls");
    if (controls) controls.hidden = true;
}

function showTrailerNavButtons() {
    const controls = document.querySelector(".trailer-modal-controls");
    if (controls) controls.hidden = false;
}