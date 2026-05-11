import json
import re

INPUT_FILE = "acclaimed.txt"
OUTPUT_FILE = "acclaimed_movies.json"

movies = []

# Regex to match:
# Movie Title (2001)
pattern = re.compile(r"^(.*?)\s*\((\d{4})\)$")

with open(INPUT_FILE, "r", encoding="utf-8") as f:
    lines = f.readlines()

for line in lines:
    line = line.strip()

    if not line:
        continue

    match = pattern.match(line)

    if match:
        title = match.group(1).strip()
        year = int(match.group(2))

        movie_obj = {
            "title": title,
            "year": year,
            "source": ["acclaimed"]
        }

        movies.append(movie_obj)

# Write pretty JSON output
with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
    json.dump(movies, f, indent=4, ensure_ascii=False)

print(f"Created {OUTPUT_FILE} with {len(movies)} movies.")