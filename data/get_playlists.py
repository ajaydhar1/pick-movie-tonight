import json
from yt_dlp import YoutubeDL

PLAYLIST_URLS = [
    "https://www.youtube.com/playlist?list=PLnpIGDCblPQW5n9-la5oW6YSA1BWYk32F",
    "https://www.youtube.com/playlist?list=PLff_8M2LCnlCP3deJhXdYJCxlqCIJjItL",
    "https://www.youtube.com/playlist?list=PLpdRrmiqbfWPV6OwkPtaX4cMWgszSIlnX",
    "https://www.youtube.com/playlist?list=PLp-ZAI3S7Nw0IMM92hrekE5AhNOlGBGz6",
    "https://www.youtube.com/playlist?list=PLgfoqdLGAnLFG-WmI7ioMfjIUzz-jvO_x",
    "https://www.youtube.com/playlist?list=PLqnnuEVGcRQyQhvsd5Tl47q9JllRqcnGY",
    "https://www.youtube.com/playlist?list=PLsjTwB9AUURELhLyJmCa_wVV58XMGImJu"
]

def extract_playlist(url: str) -> dict:
    ydl_opts = {
        "quiet": True,
        "extract_flat": True,   # faster, metadata only
        "skip_download": True,
    }

    with YoutubeDL(ydl_opts) as ydl:
        info = ydl.extract_info(url, download=False)

    entries = info.get("entries", []) or []

    tracks = []
    for entry in entries:
        video_id = entry.get("id", "")
        title = entry.get("title", "").strip()

        if not video_id or not title:
            continue

        tracks.append({
            "title": title,
            "youtube": f"https://www.youtube.com/watch?v={video_id}"
        })

    return {
        "movie": info.get("title", "").strip(),
        "playlistUrl": url,
        "tracks": tracks
    }

def main():
    results = []

    for url in PLAYLIST_URLS:
        try:
            results.append(extract_playlist(url))
        except Exception as e:
            results.append({
                "playlistUrl": url,
                "error": str(e)
            })

    print(json.dumps(results, indent=2, ensure_ascii=False))

if __name__ == "__main__":
    main()