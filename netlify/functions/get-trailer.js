exports.handler = async function (event) {
  try {
    const { title, year } = JSON.parse(event.body || "{}");

    if (!title) {
      return json({ error: "Missing movie title" }, 400);
    }

    const apiKey = process.env.TMDB_API_KEY;

    const searchUrl = new URL("https://api.themoviedb.org/3/search/movie");
    searchUrl.searchParams.set("api_key", apiKey);
    searchUrl.searchParams.set("query", title);
    searchUrl.searchParams.set("include_adult", "false");

    if (year) {
      searchUrl.searchParams.set("year", year);
    }

    const searchRes = await fetch(searchUrl);
    const searchData = await searchRes.json();

    const movie = searchData.results?.[0];

    if (!movie) {
      return json({ youtubeKey: null });
    }

    const videosUrl = new URL(
      `https://api.themoviedb.org/3/movie/${movie.id}/videos`
    );

    videosUrl.searchParams.set("api_key", apiKey);

    const videosRes = await fetch(videosUrl);
    const videosData = await videosRes.json();

    const trailers = videosData.results || [];

    const trailer =
      trailers.find(v =>
        v.site === "YouTube" &&
        v.type === "Trailer" &&
        v.official === true
      ) ||
      trailers.find(v =>
        v.site === "YouTube" &&
        v.type === "Trailer"
      ) ||
      trailers.find(v => v.site === "YouTube");

    return json({
      title: movie.title,
      year,
      tmdbId: movie.id,
      youtubeKey: trailer?.key || null
    });

  } catch (error) {
    console.error(error);
    return json({ error: "Server error" }, 500);
  }
};

function json(data, statusCode = 200) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };
}