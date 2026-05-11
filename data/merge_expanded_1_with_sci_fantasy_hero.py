import json
import csv

CSV_FILE = "87bc67b4-1684-471e-8537-30d7884c978c.csv"
MOVIES_FILE = "movies-expanded.json"
OUTPUT_FILE = "movies-expanded-2.json"


def normalize_title(title):
    """
    Normalize titles for duplicate checking.
    """
    return title.strip().lower()


# Load existing movies-expanded.json
with open(MOVIES_FILE, "r", encoding="utf-8") as f:
    movies = json.load(f)

# Create lookup for duplicate detection
existing_titles = {
    normalize_title(movie["title"]): movie
    for movie in movies
}

# Start with existing movies
merged_movies = list(movies)

added_count = 0
skipped_count = 0

# Read CSV file
with open(CSV_FILE, "r", encoding="utf-8") as f:
    reader = csv.DictReader(f)

    for row in reader:
        title = row.get("Title", "").strip()
        year = row.get("Year", "").strip()

        if not title or not year:
            continue

        normalized = normalize_title(title)

        # Skip duplicates already in movies-expanded.json
        if normalized in existing_titles:
            skipped_count += 1
            continue

        try:
            year = int(year)
        except ValueError:
            continue

        movie_obj = {
            "title": title,
            "year": year,
            "source": ["sci-fantasy-hero"]
        }

        merged_movies.append(movie_obj)
        existing_titles[normalized] = movie_obj
        added_count += 1

# Write merged output
with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
    json.dump(merged_movies, f, indent=4, ensure_ascii=False)

print(f"Created {OUTPUT_FILE}")
print(f"Starting movies: {len(movies)}")
print(f"Added CSV movies: {added_count}")
print(f"Skipped duplicates: {skipped_count}")
print(f"Final total: {len(merged_movies)}")