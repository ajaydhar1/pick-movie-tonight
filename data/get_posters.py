# add_tmdb_posters.py
import json
import os
import time
import urllib.parse
import urllib.request

INPUT_FILE = "movies-expanded-2.json"
OUTPUT_FILE = "movies-expanded-3.json"

TMDB_API_KEY = "YOUR_TMDB_API_KEY"
TMDB_SEARCH_URL = "https://api.themoviedb.org/3/search/movie"
POSTER_BASE_URL = "https://image.tmdb.org/t/p/w500"

REQUEST_DELAY_SECONDS = 0.25


def tmdb_get_json(url):
    request = urllib.request.Request(
        url,
        headers={
            "Accept": "application/json",
            "User-Agent": "PickMovieTonightPosterFetcher/1.0",
        },
    )

    with urllib.request.urlopen(request, timeout=20) as response:
        return json.loads(response.read().decode("utf-8"))


def search_tmdb_movie(title, year=None):
    params = {
        "api_key": TMDB_API_KEY,
        "query": title,
        "include_adult": "false",
    }

    if year:
        params["year"] = str(year)

    url = f"{TMDB_SEARCH_URL}?{urllib.parse.urlencode(params)}"
    data = tmdb_get_json(url)

    results = data.get("results", [])
    if not results:
        return None

    # Prefer a result with a poster.
    for result in results:
        if result.get("poster_path"):
            return result

    return results[0]


def add_poster_data(movie):
    title = movie.get("title") or movie.get("Title")
    year = movie.get("year") or movie.get("Year")

    if not title:
        return movie, "missing_title"

    if movie.get("posterUrl"):
        return movie, "already_has_poster"

    result = search_tmdb_movie(title, year)

    if not result:
        return movie, "not_found"

    poster_path = result.get("poster_path")

    movie["tmdbId"] = result.get("id")
    movie["tmdbTitle"] = result.get("title")
    movie["tmdbReleaseDate"] = result.get("release_date")

    if poster_path:
        movie["posterPath"] = poster_path
        movie["posterUrl"] = f"{POSTER_BASE_URL}{poster_path}"
        return movie, "poster_added"

    return movie, "found_no_poster"


def main():
    if not TMDB_API_KEY:
        raise RuntimeError(
            "Missing TMDB_API_KEY environment variable. "
            "Set it before running this script."
        )

    with open(INPUT_FILE, "r", encoding="utf-8") as f:
        movies = json.load(f)

    updated_movies = []
    stats = {
        "poster_added": 0,
        "already_has_poster": 0,
        "not_found": 0,
        "found_no_poster": 0,
        "missing_title": 0,
        "errors": 0,
    }

    for index, movie in enumerate(movies, start=1):
        title = movie.get("title") or movie.get("Title") or "Unknown Title"
        year = movie.get("year") or movie.get("Year") or ""

        try:
            updated_movie, status = add_poster_data(movie)
            stats[status] += 1
            updated_movies.append(updated_movie)

            print(f"[{index}/{len(movies)}] {status}: {title} {year}")

        except Exception as e:
            stats["errors"] += 1
            updated_movies.append(movie)
            print(f"[{index}/{len(movies)}] ERROR: {title} {year} — {e}")

        time.sleep(REQUEST_DELAY_SECONDS)

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(updated_movies, f, indent=2, ensure_ascii=False)

    print("\nDone!")
    print(f"Saved: {OUTPUT_FILE}")
    print(json.dumps(stats, indent=2))


if __name__ == "__main__":
    main()