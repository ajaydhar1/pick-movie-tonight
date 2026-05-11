import json

MOVIES_FILE = "movies.json"
ACCLAIMED_FILE = "acclaimed_movies.json"
OUTPUT_FILE = "movies-expanded.json"


def normalize_title(title):
    """
    Normalize titles for duplicate comparison.
    """
    return title.strip().lower()


# Load original movies.json
with open(MOVIES_FILE, "r", encoding="utf-8") as f:
    movies = json.load(f)

# Load acclaimed_movies.json
with open(ACCLAIMED_FILE, "r", encoding="utf-8") as f:
    acclaimed_movies = json.load(f)

# Build lookup from existing movies.json
# These take priority
existing_titles = {
    normalize_title(movie["title"]): movie
    for movie in movies
}

# Start merged list with the original movies
merged_movies = list(movies)

added_count = 0
skipped_count = 0

# Add acclaimed movies ONLY if not already present
for movie in acclaimed_movies:
    normalized = normalize_title(movie["title"])

    if normalized not in existing_titles:
        merged_movies.append(movie)
        added_count += 1
    else:
        skipped_count += 1

# Write merged output
with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
    json.dump(merged_movies, f, indent=4, ensure_ascii=False)

print(f"Created {OUTPUT_FILE}")
print(f"Original movies: {len(movies)}")
print(f"Added acclaimed movies: {added_count}")
print(f"Skipped duplicates: {skipped_count}")
print(f"Total movies: {len(merged_movies)}")