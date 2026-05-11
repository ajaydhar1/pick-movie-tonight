const coreIntelligentThrillers = [
    {
    title: "Inception",
    year: 2010,
    category: "core_intelligent_thrillers",
    genres: ["Sci-Fi", "Thriller"],
    mood: "serious",
    energy: "high",
    complexity: "high",
    scale: "big",
    pace: "fast",
    freshness: "modern",
    runtimeBucket: "long",
    realism: "stylized",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=FiM51gvvW_s",
    scorePlaylist: "https://www.youtube.com/playlist?list=PLbQkZ0-M4gS3vI9IkX8P5_jxLSoM7wrZ7",
    description: "A dream-layered sci-fi thriller with scale, urgency, and big rewatch appeal when you want to lean in."
    },

    {
    title: "Interstellar",
    year: 2014,
    category: "core_intelligent_thrillers",
    genres: ["Sci-Fi", "Drama"],
    mood: "emotional",
    energy: "medium",
    complexity: "high",
    scale: "big",
    pace: "medium",
    freshness: "modern",
    runtimeBucket: "long",
    realism: "stylized",
    familySafe: true,
    trailer: "https://www.youtube.com/watch?v=2LqzF5WauAw",
    scorePlaylist: "https://www.youtube.com/playlist?list=OLAK5uy_mDWtgeNF9LzujhjNi5DFcX-Lld0_ZMr_s",
    description: "Big-screen sci-fi with cosmic ideas and real emotional pull when you want something sweeping."
    },

    {
    title: "Tenet",
    year: 2020,
    category: "core_intelligent_thrillers",
    genres: ["Sci-Fi", "Action"],
    mood: "serious",
    energy: "high",
    complexity: "high",
    scale: "big",
    pace: "fast",
    freshness: "newer",
    runtimeBucket: "long",
    realism: "stylized",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=LdOM0x0XDMo",
    scorePlaylist: "https://www.youtube.com/playlist?list=PLBKadB95sF45_hO-yB_W3yvgDepkKE0C1",
    description: "A bold, high-speed puzzle-box movie for nights when you want to stay mentally engaged."
    },

    {
    title: "Arrival",
    year: 2016,
    category: "core_intelligent_thrillers",
    genres: ["Sci-Fi", "Drama"],
    mood: "emotional",
    energy: "low",
    complexity: "high",
    scale: "small",
    pace: "slow",
    freshness: "modern",
    runtimeBucket: "medium",
    realism: "grounded",
    familySafe: true,
    trailer: "https://www.youtube.com/watch?v=tFMo3UJ4B4g",
    scorePlaylist: "https://www.youtube.com/playlist?list=PLff_8M2LCnlCP3deJhXdYJCxlqCIJjItL",
    description: "Quiet, thoughtful sci-fi that lands emotionally and stays with you afterward."
    },

    {
    title: "Oppenheimer",
    year: 2023,
    category: "core_intelligent_thrillers",
    genres: ["Drama", "Thriller"],
    mood: "serious",
    energy: "medium",
    complexity: "high",
    scale: "big",
    pace: "fast",
    freshness: "newer",
    runtimeBucket: "long",
    realism: "grounded",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=uYPbbksJxIg",
    scorePlaylist: "https://www.youtube.com/playlist?list=PL0EgyyX8wk71akaFcfi7eLJu13iH6MrLQ",
    description: "Large-scale, serious, and intellectually dense with major cinematic weight."
    },

    {
    title: "In Time",
    year: 2011,
    category: "core_intelligent_thrillers",
    genres: ["Sci-Fi", "Thriller"],
    mood: "serious",
    energy: "medium",
    complexity: "medium",
    scale: "medium",
    pace: "fast",
    freshness: "modern",
    runtimeBucket: "medium",
    realism: "stylized",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=xhYUaR5QiUs",
    scorePlaylist: "https://www.youtube.com/playlist?list=PLgfoqdLGAnLFG-WmI7ioMfjIUzz-jvO_x",
    description: "A high-concept sci-fi world where time is currency — fast, stylish, and thought-provoking."
    },

    {
    title: "The Matrix",
    year: 1999,
    category: "core_intelligent_thrillers",
    genres: ["Sci-Fi", "Action"],
    mood: "serious",
    energy: "high",
    complexity: "high",
    scale: "big",
    pace: "medium",
    freshness: "older",
    runtimeBucket: "long",
    realism: "stylized",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=vKQi3bBA1y8",
    scorePlaylist: "https://www.youtube.com/playlist?list=PLqnnuEVGcRQyQhvsd5Tl47q9JllRqcnGY",
    description: "A genre-defining sci-fi action film that blends philosophy, action, and world-building."
    },

    {
    title: "Ex Machina",
    year: 2014,
    category: "core_intelligent_thrillers",
    genres: ["Sci-Fi", "Drama"],
    mood: "serious",
    energy: "low",
    complexity: "high",
    scale: "small",
    pace: "slow",
    freshness: "modern",
    runtimeBucket: "medium",
    realism: "grounded",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=bggUmgeMCdc",
    scorePlaylist: "https://www.youtube.com/playlist?list=PLsjTwB9AUURELhLyJmCa_wVV58XMGImJu",
    description: "A tense, intimate AI story with strong dialogue and unsettling implications."
    },

    {
    title: "Minority Report",
    year: 2002,
    category: "core_intelligent_thrillers",
    genres: ["Sci-Fi", "Action"],
    mood: "serious",
    energy: "high",
    complexity: "medium",
    scale: "big",
    pace: "fast",
    freshness: "older",
    runtimeBucket: "long",
    realism: "stylized",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=lG7DGMgfOb8",
    description: "A fast-paced futuristic thriller about prediction, control, and free will."
    },

    {
    title: "Blade Runner 2049",
    year: 2017,
    category: "core_intelligent_thrillers",
    genres: ["Sci-Fi", "Drama"],
    mood: "serious",
    energy: "low",
    complexity: "high",
    scale: "big",
    pace: "slow",
    freshness: "modern",
    runtimeBucket: "long",
    realism: "stylized",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=gCcx85zbxz4",
    scorePlaylist: "https://www.youtube.com/playlist?list=PLh4Eme5gACZEnmG1SuTElZQ-XJoUiBdmb",
    description: "Slow, immersive sci-fi with stunning visuals and deep philosophical themes."
    },

    {
    title: "Nightcrawler",
    year: 2014,
    category: "core_intelligent_thrillers",
    genres: ["Thriller", "Drama"],
    mood: "serious",
    energy: "medium",
    complexity: "medium",
    scale: "small",
    pace: "medium",
    freshness: "modern",
    runtimeBucket: "medium",
    realism: "grounded",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=u1uP_8VJkDQ",
    description: "Dark, intense, and character-driven with a unique perspective on ambition."
    },

    {
    title: "Shutter Island",
    year: 2010,
    category: "core_intelligent_thrillers",
    genres: ["Thriller"],
    mood: "serious",
    energy: "medium",
    complexity: "high",
    scale: "medium",
    pace: "slow",
    freshness: "modern",
    runtimeBucket: "medium",
    realism: "stylized",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=v8yrZSkKxTA",
    description: "A psychological mystery that builds tension and rewards attention."
    },

    {
    title: "Source Code",
    year: 2011,
    category: "core_intelligent_thrillers",
    genres: ["Sci-Fi", "Thriller"],
    mood: "fun",
    energy: "high",
    complexity: "medium",
    scale: "medium",
    pace: "fast",
    freshness: "modern",
    runtimeBucket: "short",
    realism: "stylized",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=i71eXpmkZBY",
    scorePlaylist: "https://www.youtube.com/playlist?list=OLAK5uy_nUJni7QEkGPvd4sHVRzxs09k5KRquRn54",
    description: "A tight, engaging time-loop thriller with strong pacing."
    },

    {
    title: "Looper",
    year: 2012,
    category: "core_intelligent_thrillers",
    genres: ["Sci-Fi", "Action"],
    mood: "serious",
    energy: "medium",
    complexity: "medium",
    scale: "medium",
    pace: "fast",
    freshness: "modern",
    runtimeBucket: "medium",
    realism: "stylized",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=2iQuhsmtfHw",
    scorePlaylist: "https://www.youtube.com/playlist?list=PLWvekjMc3147PXQB9z8vEt1m5xnUf74cE",
    description: "A creative time-travel story with action and emotional stakes."
    },

    {
    title: "The Prestige",
    year: 2006,
    category: "core_intelligent_thrillers",
    genres: ["Drama", "Mystery"],
    mood: "serious",
    energy: "medium",
    complexity: "high",
    scale: "medium",
    pace: "medium",
    freshness: "older",
    runtimeBucket: "long",
    realism: "stylized",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=RLtaA9fFNXU",
    scorePlaylist: "https://www.youtube.com/playlist?list=PLohYzz4btpaTQNrEMP155JA04lIBFkP0P",
    description: "A layered, twist-driven story about obsession and rivalry."
    },

    {
    title: "Children of Men",
    year: 2006,
    category: "core_intelligent_thrillers",
    genres: ["Sci-Fi", "Drama", "Thriller"],
    mood: "serious",
    energy: "medium",
    complexity: "medium",
    scale: "big",
    pace: "medium",
    freshness: "older",
    runtimeBucket: "long",
    realism: "grounded",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=2VT2apoX90o",
    description: "A bleak but gripping near-future thriller with urgency, realism, and emotional weight."
    },

    {
    title: "Gattaca",
    year: 1997,
    category: "core_intelligent_thrillers",
    genres: ["Sci-Fi", "Drama"],
    mood: "thoughtful",
    energy: "low",
    complexity: "medium",
    scale: "small",
    pace: "slow",
    freshness: "older",
    runtimeBucket: "medium",
    realism: "grounded",
    familySafe: true,
    trailer: "https://www.youtube.com/watch?v=NIIZ2P-fiyI",
    scorePlaylist: "https://www.youtube.com/playlist?list=PL83SHZiQatSQXvL3ynh51FsT-pP6NaNGP",
    description: "A calm, elegant sci-fi story about genetics, ambition, and identity."
    },

    {
    title: "Annihilation",
    year: 2018,
    category: "core_intelligent_thrillers",
    genres: ["Sci-Fi", "Horror", "Drama"],
    mood: "unsettling",
    energy: "medium",
    complexity: "high",
    scale: "medium",
    pace: "slow",
    freshness: "newer",
    runtimeBucket: "medium",
    realism: "stylized",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=89OP78l9oF0",
    description: "A strange, atmospheric sci-fi journey filled with mystery, symbolism, and psychological tension."
    },

    {
    title: "Prisoners",
    year: 2013,
    category: "core_intelligent_thrillers",
    genres: ["Thriller", "Drama", "Crime"],
    mood: "tense",
    energy: "medium",
    complexity: "medium",
    scale: "small",
    pace: "slow",
    freshness: "modern",
    runtimeBucket: "long",
    realism: "grounded",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=2SupordEUpw",
    description: "A dark, emotionally intense mystery thriller with escalating tension and strong performances."
    },

    {
    title: "Collateral",
    year: 2004,
    category: "core_intelligent_thrillers",
    genres: ["Thriller", "Crime", "Drama"],
    mood: "serious",
    energy: "medium",
    complexity: "low",
    scale: "small",
    pace: "fast",
    freshness: "older",
    runtimeBucket: "medium",
    realism: "grounded",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=-JDf2zIFgO8",
    description: "A sleek nighttime thriller with sharp dialogue, tension, and a hypnotic city atmosphere."
    },

    {
    title: "Moon",
    year: 2009,
    category: "core_intelligent_thrillers",
    genres: ["Sci-Fi", "Drama"],
    mood: "thoughtful",
    energy: "low",
    complexity: "medium",
    scale: "small",
    pace: "slow",
    freshness: "modern",
    runtimeBucket: "medium",
    realism: "grounded",
    familySafe: true,
    trailer: "https://www.youtube.com/watch?v=WWoDBcSW4_c",
    description: "A quiet, intelligent sci-fi character study with loneliness, identity, and emotional depth."
    },

    {
    title: "Upgrade",
    year: 2018,
    category: "core_intelligent_thrillers",
    genres: ["Sci-Fi", "Action", "Thriller"],
    mood: "dark",
    energy: "high",
    complexity: "medium",
    scale: "medium",
    pace: "fast",
    freshness: "newer",
    runtimeBucket: "medium",
    realism: "stylized",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=36PDeN9NRZ0",
    description: "A brutal, fast-moving cyberpunk revenge thriller with clever tech ideas and momentum."
    },

    {
    title: "Oblivion",
    year: 2013,
    category: "core_intelligent_thrillers",
    genres: ["Sci-Fi", "Action"],
    mood: "serious",
    energy: "medium",
    complexity: "medium",
    scale: "big",
    pace: "medium",
    freshness: "modern",
    runtimeBucket: "medium",
    realism: "stylized",
    familySafe: true,
    trailer: "https://www.youtube.com/watch?v=XmIIgE7eSak",
    description: "A visually polished sci-fi mystery with isolation, scale, and strong atmosphere."
    },

    {
    title: "Snowpiercer",
    year: 2013,
    category: "core_intelligent_thrillers",
    genres: ["Sci-Fi", "Action", "Drama"],
    mood: "intense",
    energy: "high",
    complexity: "medium",
    scale: "medium",
    pace: "fast",
    freshness: "modern",
    runtimeBucket: "medium",
    realism: "stylized",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=nX5PwfEMBM0",
    description: "A fast-moving dystopian thriller with class warfare, momentum, and bold world-building."
    },

    {
    title: "Enemy",
    year: 2013,
    category: "core_intelligent_thrillers",
    genres: ["Thriller", "Drama", "Mystery"],
    mood: "unsettling",
    energy: "low",
    complexity: "high",
    scale: "small",
    pace: "slow",
    freshness: "modern",
    runtimeBucket: "short",
    realism: "stylized",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=FJuaAWrgoUY",
    description: "A strange, psychological identity puzzle filled with ambiguity and tension."
    },

    {
    title: "Sicario",
    year: 2015,
    category: "core_intelligent_thrillers",
    genres: ["Thriller", "Crime", "Drama"],
    mood: "tense",
    energy: "medium",
    complexity: "medium",
    scale: "medium",
    pace: "medium",
    freshness: "modern",
    runtimeBucket: "medium",
    realism: "grounded",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=7XLQ1bkSLDo",
    scorePlaylist: "https://www.youtube.com/playlist?list=PLohYzz4btpaR_a1iymGrRsfZMLIeIjkAn",
    description: "A grounded, morally tense crime thriller with incredible atmosphere and escalating pressure."
    },

    {
    title: "Memento",
    year: 2000,
    category: "core_intelligent_thrillers",
    genres: ["Thriller", "Mystery"],
    mood: "serious",
    energy: "medium",
    complexity: "high",
    scale: "small",
    pace: "fast",
    freshness: "older",
    runtimeBucket: "medium",
    realism: "grounded",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=4CV41hoyS8A",
    description: "A nonlinear memory puzzle that rewards attention and active engagement."
    },

    {
    title: "Predestination",
    year: 2014,
    category: "core_intelligent_thrillers",
    genres: ["Sci-Fi", "Thriller"],
    mood: "serious",
    energy: "medium",
    complexity: "high",
    scale: "small",
    pace: "medium",
    freshness: "modern",
    runtimeBucket: "medium",
    realism: "stylized",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=xxG-YfedrfU",
    description: "A dense, twist-heavy time-travel story that becomes more mind-bending as it unfolds."
    },

    {
    title: "Coherence",
    year: 2013,
    category: "core_intelligent_thrillers",
    genres: ["Sci-Fi", "Thriller", "Mystery"],
    mood: "tense",
    energy: "low",
    complexity: "high",
    scale: "small",
    pace: "medium",
    freshness: "modern",
    runtimeBucket: "short",
    realism: "grounded",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=sEceDz1Rodc",
    description: "A low-budget dinner-party sci-fi thriller with paranoia, multiverse ideas, and smart tension."
    },

    {
    title: "The Girl with the Dragon Tattoo",
    year: 2011,
    category: "core_intelligent_thrillers",
    genres: ["Thriller", "Mystery", "Drama"],
    mood: "dark",
    energy: "medium",
    complexity: "high",
    scale: "small",
    pace: "slow",
    freshness: "modern",
    runtimeBucket: "long",
    realism: "grounded",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=DqQe3OrsMKI",
    scorePlaylist: "https://www.youtube.com/playlist?list=PL40A60C22C34B80DA",
    description: "A cold, meticulous investigative thriller with psychological tension and sharp atmosphere."
    }
];

const crowdPleasingMainstream = [
    {
    title: "The Dark Knight",
    year: 2008,
    category: "crowd_pleasing_mainstream",
    genres: ["Action", "Crime"],
    mood: "serious",
    energy: "high",
    complexity: "medium",
    scale: "big",
    pace: "fast",
    freshness: "modern",
    runtimeBucket: "long",
    realism: "grounded",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=LDG9bisJEaI",
    scorePlaylist: "https://www.youtube.com/playlist?list=PLim3m5NnkYFcopKx6tXrl8k5ELBO-kt4X",
    description: "A massive crime-action pick with pressure, iconic performances, and a very reliable blockbuster feel."
    },

    {
    title: "Spider-Man: Into the Spider-Verse",
    year: 2018,
    category: "crowd_pleasing_mainstream",
    genres: ["Animation", "Action", "Adventure"],
    mood: "fun",
    energy: "high",
    complexity: "medium",
    scale: "big",
    pace: "fast",
    freshness: "newer",
    runtimeBucket: "medium",
    realism: "stylized",
    familySafe: true,
    trailer: "https://www.youtube.com/watch?v=g4Hbz2jLxvQ",
    description: "A wildly creative, energetic superhero adventure with heart, humor, and stunning animation."
    },

    {
    title: "Iron Man",
    year: 2008,
    category: "crowd_pleasing_mainstream",
    genres: ["Action", "Sci-Fi"],
    mood: "fun",
    energy: "high",
    complexity: "low",
    scale: "big",
    pace: "fast",
    freshness: "modern",
    runtimeBucket: "medium",
    realism: "stylized",
    familySafe: true,
    trailer: "https://www.youtube.com/watch?v=8ugaeA-nMTc",
    scorePlaylist: "https://www.youtube.com/playlist?list=PLim3m5NnkYFfT9mc43mS5GXd6ueGLsNyi",
    description: "Charismatic, fast-moving, and endlessly rewatchable — one of the strongest superhero origin stories."
    },

    {
    title: "Logan",
    year: 2017,
    category: "crowd_pleasing_mainstream",
    genres: ["Action", "Drama", "Sci-Fi"],
    mood: "emotional",
    energy: "medium",
    complexity: "medium",
    scale: "medium",
    pace: "medium",
    freshness: "modern",
    runtimeBucket: "long",
    realism: "grounded",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=Div0iP65aZo",
    description: "A darker, emotional superhero road story with strong character work and real weight."
    },

    {
    title: "Guardians of the Galaxy",
    year: 2014,
    category: "crowd_pleasing_mainstream",
    genres: ["Action", "Adventure", "Sci-Fi"],
    mood: "fun",
    energy: "high",
    complexity: "low",
    scale: "big",
    pace: "fast",
    freshness: "modern",
    runtimeBucket: "medium",
    realism: "stylized",
    familySafe: true,
    trailer: "https://www.youtube.com/watch?v=d96cjJhvlMA",
    description: "Funny, energetic, and packed with personality — a highly watchable space adventure."
    },

    {
    title: "Batman Begins",
    year: 2005,
    category: "crowd_pleasing_mainstream",
    genres: ["Action", "Crime", "Drama"],
    mood: "serious",
    energy: "medium",
    complexity: "medium",
    scale: "big",
    pace: "medium",
    freshness: "older",
    runtimeBucket: "long",
    realism: "grounded",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=neY2xVmOfUM",
    scorePlaylist: "https://www.youtube.com/playlist?list=PLD8E9291857CCC34A",
    description: "A grounded and atmospheric superhero origin story focused on fear, identity, and escalation."
    },

    {
    title: "Captain America: The Winter Soldier",
    year: 2014,
    category: "crowd_pleasing_mainstream",
    genres: ["Action", "Thriller", "Sci-Fi"],
    mood: "serious",
    energy: "high",
    complexity: "medium",
    scale: "big",
    pace: "fast",
    freshness: "modern",
    runtimeBucket: "long",
    realism: "grounded",
    familySafe: true,
    trailer: "https://www.youtube.com/watch?v=7SlILk2WMTI",
    scorePlaylist: "https://www.youtube.com/playlist?list=PLohYzz4btpaT2j_yysS9DSN64wzUumaxb",
    description: "A sleek political-action thriller wrapped inside a superhero movie with strong pacing and momentum."
    },

    {
    title: "Avengers: Infinity War",
    year: 2018,
    category: "crowd_pleasing_mainstream",
    genres: ["Action", "Adventure", "Sci-Fi"],
    mood: "epic",
    energy: "high",
    complexity: "medium",
    scale: "huge",
    pace: "fast",
    freshness: "newer",
    runtimeBucket: "long",
    realism: "stylized",
    familySafe: true,
    trailer: "https://www.youtube.com/watch?v=6ZfuNTqbHE8",
    scorePlaylist: "https://www.youtube.com/playlist?list=PL-KykV_4XmWOvFajrtxZXhzJ-oYAKXuQX",
    description: "A massive crossover event with constant momentum, scale, and surprisingly strong emotional stakes."
    },

    {
    title: "X-Men: Days of Future Past",
    year: 2014,
    category: "crowd_pleasing_mainstream",
    genres: ["Action", "Sci-Fi"],
    mood: "serious",
    energy: "high",
    complexity: "medium",
    scale: "big",
    pace: "fast",
    freshness: "modern",
    runtimeBucket: "long",
    realism: "stylized",
    familySafe: true,
    trailer: "https://www.youtube.com/watch?v=pK2zYHWDZKo",
    description: "A smart, entertaining time-travel superhero story with strong ensemble energy and stakes."
    },

    {
    title: "Top Gun: Maverick",
    year: 2022,
    category: "crowd_pleasing_mainstream",
    genres: ["Action", "Drama"],
    mood: "fun",
    energy: "high",
    complexity: "low",
    scale: "big",
    pace: "fast",
    freshness: "newer",
    runtimeBucket: "long",
    realism: "grounded",
    familySafe: true,
    trailer: "https://www.youtube.com/watch?v=giXco2jaZ_4",
    description: "An incredibly polished crowd-pleaser with speed, confidence, emotion, and massive big-screen energy."
    },

    {
    title: "Ocean's Eleven",
    year: 2001,
    category: "crowd_pleasing_mainstream",
    genres: ["Crime", "Comedy"],
    mood: "cool",
    energy: "medium",
    complexity: "medium",
    scale: "medium",
    pace: "fast",
    freshness: "older",
    runtimeBucket: "medium",
    realism: "stylized",
    familySafe: true,
    trailer: "https://www.youtube.com/watch?v=imm6OR605UI",
    description: "Smooth, stylish, and endlessly watchable — a perfect charisma-driven ensemble movie."
    },

    {
    title: "The Nice Guys",
    year: 2016,
    category: "crowd_pleasing_mainstream",
    genres: ["Comedy", "Crime"],
    mood: "fun",
    energy: "medium",
    complexity: "low",
    scale: "small",
    pace: "fast",
    freshness: "modern",
    runtimeBucket: "medium",
    realism: "stylized",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=GQR5zsLHbYw",
    description: "A hilarious detective comedy with great chemistry, momentum, and chaotic energy."
    },

    {
    title: "Baby Driver",
    year: 2017,
    category: "crowd_pleasing_mainstream",
    genres: ["Action", "Crime"],
    mood: "cool",
    energy: "high",
    complexity: "low",
    scale: "medium",
    pace: "fast",
    freshness: "modern",
    runtimeBucket: "medium",
    realism: "stylized",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=zTvJJnoWIPk",
    description: "A music-driven action movie with rhythm, style, and nonstop momentum."
    },

    {
    title: "National Treasure",
    year: 2004,
    category: "crowd_pleasing_mainstream",
    genres: ["Adventure", "Mystery"],
    mood: "fun",
    energy: "medium",
    complexity: "low",
    scale: "medium",
    pace: "fast",
    freshness: "older",
    runtimeBucket: "medium",
    realism: "stylized",
    familySafe: true,
    trailer: "https://www.youtube.com/watch?v=vqUPxNT8io4",
    description: "A fast-moving treasure-hunt adventure that's extremely easy and enjoyable to watch."
    },

    {
    title: "Catch Me If You Can",
    year: 2002,
    category: "crowd_pleasing_mainstream",
    genres: ["Drama", "Crime"],
    mood: "fun",
    energy: "medium",
    complexity: "medium",
    scale: "medium",
    pace: "fast",
    freshness: "older",
    runtimeBucket: "long",
    realism: "grounded",
    familySafe: true,
    trailer: "https://www.youtube.com/watch?v=71rDQ7z4eFg",
    description: "A charming cat-and-mouse story with charisma, momentum, and strong performances."
    },

    {
    title: "School of Rock",
    year: 2003,
    category: "crowd_pleasing_mainstream",
    genres: ["Comedy"],
    mood: "warm",
    energy: "medium",
    complexity: "low",
    scale: "small",
    pace: "medium",
    freshness: "older",
    runtimeBucket: "medium",
    realism: "grounded",
    familySafe: true,
    trailer: "https://www.youtube.com/watch?v=TExoc0MG4I4",
    description: "A joyful, energetic comedy with heart, music, and incredibly likable energy."
    },

    {
    title: "Pirates of the Caribbean: The Curse of the Black Pearl",
    year: 2003,
    category: "crowd_pleasing_mainstream",
    genres: ["Adventure", "Fantasy"],
    mood: "fun",
    energy: "high",
    complexity: "low",
    scale: "big",
    pace: "fast",
    freshness: "older",
    runtimeBucket: "long",
    realism: "stylized",
    familySafe: true,
    trailer: "https://www.youtube.com/watch?v=naQr0uTrH_s",
    scorePlaylist: "https://music.youtube.com/playlist?list=OLAK5uy_mFZb_pU3YvQZ39Rhisjclprw2XZyndb_A",
    description: "A hugely entertaining adventure movie filled with charisma, action, humor, and iconic performances."
    },

    {
    title: "The Hunger Games",
    year: 2012,
    category: "crowd_pleasing_mainstream",
    genres: ["Action", "Sci-Fi", "Drama"],
    mood: "serious",
    energy: "high",
    complexity: "medium",
    scale: "big",
    pace: "fast",
    freshness: "modern",
    runtimeBucket: "long",
    realism: "stylized",
    familySafe: true,
    trailer: "https://www.youtube.com/watch?v=mfmrPu43DF8",
    description: "A gripping dystopian survival blockbuster with strong momentum, tension, and emotional stakes."
    },

    {
    title: "The Social Network",
    year: 2010,
    category: "crowd_pleasing_mainstream",
    genres: ["Drama"],
    mood: "smart",
    energy: "medium",
    complexity: "medium",
    scale: "small",
    pace: "fast",
    freshness: "modern",
    runtimeBucket: "medium",
    realism: "grounded",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=lB95KLmpLR4",
    scorePlaylist: "https://www.youtube.com/playlist?list=PLC772F42251C6522B",
    description: "Sharp, fast, and highly rewatchable — more propulsive than its premise sounds."
    },

    {
    title: "Knives Out",
    year: 2019,
    category: "crowd_pleasing_mainstream",
    genres: ["Mystery", "Comedy"],
    mood: "fun",
    energy: "medium",
    complexity: "medium",
    scale: "small",
    pace: "medium",
    freshness: "newer",
    runtimeBucket: "medium",
    realism: "stylized",
    familySafe: true,
    trailer: "https://www.youtube.com/watch?v=qGqiHJTsRkQ",
    scorePlaylist: "https://www.youtube.com/playlist?list=PLohYzz4btpaRzB_Usv4A7m5P8aLfRQHNA",
    description: "Clever, playful, and very watchable — a satisfying crowd-pleasing mystery."
    },

    {
    title: "Edge of Tomorrow",
    year: 2014,
    category: "crowd_pleasing_mainstream",
    genres: ["Sci-Fi", "Action"],
    mood: "fun",
    energy: "high",
    complexity: "medium",
    scale: "big",
    pace: "fast",
    freshness: "modern",
    runtimeBucket: "medium",
    realism: "stylized",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=vw61gCe2oqI",
    scorePlaylist: "https://www.youtube.com/playlist?list=PLnpIGDCblPQW5n9-la5oW6YSA1BWYk32F",
    description: "A highly entertaining action-sci-fi loop movie with great pace and replay value."
    },

    {
    title: "The Martian",
    year: 2015,
    category: "crowd_pleasing_mainstream",
    genres: ["Sci-Fi", "Drama"],
    mood: "fun",
    energy: "medium",
    complexity: "medium",
    scale: "big",
    pace: "medium",
    freshness: "modern",
    runtimeBucket: "long",
    realism: "grounded",
    familySafe: true,
    trailer: "https://www.youtube.com/watch?v=ej3ioOneTy8",
    description: "Problem-solving, optimism, and survival — a very rewatchable science-driven adventure."
    },

    {
    title: "Ready Player One",
    year: 2018,
    category: "crowd_pleasing_mainstream",
    genres: ["Sci-Fi", "Adventure"],
    mood: "fun",
    energy: "high",
    complexity: "low",
    scale: "big",
    pace: "fast",
    freshness: "newer",
    runtimeBucket: "long",
    realism: "stylized",
    familySafe: true,
    trailer: "https://www.youtube.com/watch?v=cSp1dM2Vj48",
    description: "A high-energy virtual world adventure packed with nostalgia and spectacle."
    },

    {
    title: "Ford v Ferrari",
    year: 2019,
    category: "crowd_pleasing_mainstream",
    genres: ["Drama"],
    mood: "serious",
    energy: "high",
    complexity: "low",
    scale: "medium",
    pace: "fast",
    freshness: "newer",
    runtimeBucket: "long",
    realism: "grounded",
    familySafe: true,
    trailer: "https://www.youtube.com/watch?v=zyYgDtY2AMY",
    description: "A high-speed, character-driven story about ambition and competition."
    },

    {
    title: "Moneyball",
    year: 2011,
    category: "crowd_pleasing_mainstream",
    genres: ["Drama"],
    mood: "smart",
    energy: "medium",
    complexity: "medium",
    scale: "small",
    pace: "medium",
    freshness: "modern",
    runtimeBucket: "medium",
    realism: "grounded",
    familySafe: true,
    trailer: "https://www.youtube.com/watch?v=D1R-LwHbld4",
    description: "A grounded, smart, quietly satisfying movie with strong momentum and heart."
    },

    {
    title: "The Big Short",
    year: 2015,
    category: "crowd_pleasing_mainstream",
    genres: ["Drama", "Comedy"],
    mood: "smart",
    energy: "medium",
    complexity: "high",
    scale: "medium",
    pace: "fast",
    freshness: "modern",
    runtimeBucket: "medium",
    realism: "grounded",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=vgqG3ITMv1Q",
    description: "Fast, sharp, and informative — makes complex topics surprisingly engaging."
    }

];

const comfortFeelGood = [
    {
    title: "The Intern",
    year: 2015,
    category: "comfort_feel_good",
    genres: ["Comedy", "Drama"],
    mood: "warm",
    energy: "low",
    complexity: "low",
    scale: "small",
    pace: "slow",
    freshness: "modern",
    runtimeBucket: "medium",
    realism: "grounded",
    familySafe: true,
    trailer: "https://www.youtube.com/watch?v=ZU3Xban0Y6A",
    scorePlaylist: "https://www.youtube.com/playlist?list=PLiKPbOu567dGDsh3x99E1zF2J77mAZGld",
    description: "An easy, comforting watch with charm and almost zero friction."
    },

    {
    title: "About Time",
    year: 2013,
    category: "comfort_feel_good",
    genres: ["Romance", "Drama", "Comedy"],
    mood: "warm",
    energy: "low",
    complexity: "low",
    scale: "small",
    pace: "slow",
    freshness: "modern",
    runtimeBucket: "medium",
    realism: "stylized",
    familySafe: true,
    trailer: "https://www.youtube.com/watch?v=7OIFdWk83no",
    scorePlaylist: "https://www.youtube.com/playlist?list=PLp-ZAI3S7Nw0IMM92hrekE5AhNOlGBGz6",
    description: "Warm, heartfelt, and easy to settle into when you want something gentle."
    },

    {
    title: "Palm Springs",
    year: 2020,
    category: "comfort_feel_good",
    genres: ["Comedy", "Romance", "Sci-Fi"],
    mood: "fun",
    energy: "medium",
    complexity: "low",
    scale: "small",
    pace: "fast",
    freshness: "newer",
    runtimeBucket: "short",
    realism: "stylized",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=CpBLtXduh_k",
    scorePlaylist: "https://www.youtube.com/playlist?list=PL6T5d_DwwK42KRe2SzOIM4YWDEc1YbKpv",
    description: "Funny, quick, and inventive — great when you want clever without heaviness."
    },

    {
    title: "Chef",
    year: 2014,
    category: "comfort_feel_good",
    genres: ["Comedy", "Drama"],
    mood: "warm",
    energy: "medium",
    complexity: "low",
    scale: "small",
    pace: "slow",
    freshness: "modern",
    runtimeBucket: "medium",
    realism: "grounded",
    familySafe: true,
    trailer: "https://www.youtube.com/watch?v=5xlHJAEaf-s",
    description: "A relaxed, feel-good food and family movie with warmth, music, and positivity."
    },

    {
    title: "The Secret Life of Walter Mitty",
    year: 2013,
    category: "comfort_feel_good",
    genres: ["Adventure", "Drama", "Comedy"],
    mood: "inspiring",
    energy: "medium",
    complexity: "low",
    scale: "medium",
    pace: "medium",
    freshness: "modern",
    runtimeBucket: "medium",
    realism: "stylized",
    familySafe: true,
    trailer: "https://www.youtube.com/watch?v=QD6cy4PBQPI",
    description: "A hopeful, visually uplifting adventure about stepping outside routine and into life."
    },

    {
    title: "Little Miss Sunshine",
    year: 2006,
    category: "comfort_feel_good",
    genres: ["Comedy", "Drama"],
    mood: "warm",
    energy: "low",
    complexity: "low",
    scale: "small",
    pace: "slow",
    freshness: "older",
    runtimeBucket: "medium",
    realism: "grounded",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=bQ7BZTMLImA",
    description: "A quirky family road-trip movie filled with awkwardness, humor, and heart."
    },

    {
    title: "Crazy, Stupid, Love.",
    year: 2011,
    category: "comfort_feel_good",
    genres: ["Comedy", "Romance"],
    mood: "fun",
    energy: "medium",
    complexity: "low",
    scale: "small",
    pace: "medium",
    freshness: "modern",
    runtimeBucket: "medium",
    realism: "grounded",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=8iCwtxJejik",
    description: "Funny, charming, and easy to watch with strong chemistry and emotional warmth."
    },

    {
    title: "Julie & Julia",
    year: 2009,
    category: "comfort_feel_good",
    genres: ["Drama", "Comedy"],
    mood: "warm",
    energy: "low",
    complexity: "low",
    scale: "small",
    pace: "slow",
    freshness: "modern",
    runtimeBucket: "medium",
    realism: "grounded",
    familySafe: true,
    trailer: "https://www.youtube.com/watch?v=ozRK7VXQl-k",
    description: "A calm, cozy cooking movie filled with warmth, food, and gentle inspiration."
    },

    {
    title: "Paddington 2",
    year: 2017,
    category: "comfort_feel_good",
    genres: ["Comedy", "Adventure", "Family"],
    mood: "warm",
    energy: "medium",
    complexity: "low",
    scale: "small",
    pace: "medium",
    freshness: "modern",
    runtimeBucket: "short",
    realism: "stylized",
    familySafe: true,
    trailer: "https://www.youtube.com/watch?v=sw7RElt-SvE",
    description: "A genuinely joyful movie with kindness, humor, and an almost impossibly wholesome tone."
    },

    {
    title: "Hunt for the Wilderpeople",
    year: 2016,
    category: "comfort_feel_good",
    genres: ["Adventure", "Comedy", "Drama"],
    mood: "warm",
    energy: "medium",
    complexity: "low",
    scale: "medium",
    pace: "medium",
    freshness: "modern",
    runtimeBucket: "medium",
    realism: "stylized",
    familySafe: true,
    trailer: "https://www.youtube.com/watch?v=dPaU4Gymt3E",
    description: "Funny, heartfelt, and adventurous with lovable characters and great emotional balance."
    },

    {
    title: "La La Land",
    year: 2016,
    category: "comfort_feel_good",
    genres: ["Drama", "Romance", "Music"],
    mood: "emotional",
    energy: "medium",
    complexity: "low",
    scale: "medium",
    pace: "medium",
    freshness: "modern",
    runtimeBucket: "medium",
    realism: "stylized",
    familySafe: true,
    trailer: "https://www.youtube.com/watch?v=0pdqf4P9MB8",
    description: "A dreamy, emotional musical filled with color, ambition, romance, and nostalgia."
    },

    {
    title: "Soul",
    year: 2020,
    category: "comfort_feel_good",
    genres: ["Animation", "Drama", "Comedy"],
    mood: "thoughtful",
    energy: "low",
    complexity: "medium",
    scale: "small",
    pace: "slow",
    freshness: "newer",
    runtimeBucket: "short",
    realism: "stylized",
    familySafe: true,
    trailer: "https://www.youtube.com/watch?v=xOsLIiBStEs",
    description: "A reflective and uplifting animated story about purpose, passion, and appreciating life."
    },

    {
    title: "Ferris Bueller's Day Off",
    year: 1986,
    category: "comfort_feel_good",
    genres: ["Comedy"],
    mood: "fun",
    energy: "medium",
    complexity: "low",
    scale: "small",
    pace: "fast",
    freshness: "classic",
    runtimeBucket: "short",
    realism: "stylized",
    familySafe: true,
    trailer: "https://www.youtube.com/watch?v=0ZDbKhkLxTs",
    description: "A carefree, endlessly charming comedy about skipping responsibility and enjoying the moment."
    },

    {
    title: "The Truman Show",
    year: 1998,
    category: "comfort_feel_good",
    genres: ["Drama", "Comedy"],
    mood: "smart",
    energy: "low",
    complexity: "medium",
    scale: "small",
    pace: "medium",
    freshness: "older",
    runtimeBucket: "medium",
    realism: "grounded",
    familySafe: true,
    trailer: "https://www.youtube.com/watch?v=dlnmQbPGuls",
    description: "Accessible, thoughtful, and full of big ideas without feeling hard to watch."
    }

];

const actionAdrenaline = [
    {
    title: "Mad Max: Fury Road",
    year: 2015,
    category: "action_adrenaline",
    genres: ["Action"],
    mood: "intense",
    energy: "high",
    complexity: "low",
    scale: "big",
    pace: "fast",
    freshness: "modern",
    runtimeBucket: "medium",
    realism: "stylized",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=hEJnMQG9ev8",
    scorePlaylist: "https://www.youtube.com/playlist?list=PLpdRrmiqbfWPV6OwkPtaX4cMWgszSIlnX",
    description: "A visually electric, ultra-kinetic ride when you want pure motion and style."
    },

    {
    title: "Mission: Impossible – Fallout",
    year: 2018,
    category: "action_adrenaline",
    genres: ["Action", "Thriller"],
    mood: "fun",
    energy: "high",
    complexity: "low",
    scale: "big",
    pace: "fast",
    freshness: "newer",
    runtimeBucket: "long",
    realism: "stylized",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=wb49-oV0F78",
    description: "A pure momentum blockbuster pick when you want spectacle and reliability."
    },

    {
    title: "John Wick",
    year: 2014,
    category: "action_adrenaline",
    genres: ["Action", "Thriller"],
    mood: "dark",
    energy: "high",
    complexity: "low",
    scale: "small",
    pace: "fast",
    freshness: "modern",
    runtimeBucket: "medium",
    realism: "stylized",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=C0BMx-qxsP4",
    description: "A sleek revenge action movie with precision choreography and nonstop momentum."
    },

    {
    title: "John Wick: Chapter 4",
    year: 2023,
    category: "action_adrenaline",
    genres: ["Action", "Thriller"],
    mood: "intense",
    energy: "high",
    complexity: "low",
    scale: "big",
    pace: "fast",
    freshness: "newer",
    runtimeBucket: "long",
    realism: "stylized",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=qEVUtrk8_B4",
    description: "A massive, beautifully choreographed action epic with relentless energy and scale."
    },

    {
    title: "Casino Royale",
    year: 2006,
    category: "action_adrenaline",
    genres: ["Action", "Thriller"],
    mood: "serious",
    energy: "high",
    complexity: "medium",
    scale: "big",
    pace: "fast",
    freshness: "older",
    runtimeBucket: "long",
    realism: "grounded",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=36mnx8dBbGE",
    description: "A grounded and emotionally charged Bond reboot with tension, style, and momentum."
    },

    {
    title: "Skyfall",
    year: 2012,
    category: "action_adrenaline",
    genres: ["Action", "Thriller"],
    mood: "serious",
    energy: "medium",
    complexity: "medium",
    scale: "big",
    pace: "medium",
    freshness: "modern",
    runtimeBucket: "long",
    realism: "grounded",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=6kw1UVovByw",
    description: "A visually stunning Bond thriller with atmosphere, emotion, and sharp action."
    },

    {
    title: "The Raid",
    year: 2011,
    category: "action_adrenaline",
    genres: ["Action", "Thriller"],
    mood: "intense",
    energy: "high",
    complexity: "low",
    scale: "small",
    pace: "fast",
    freshness: "modern",
    runtimeBucket: "short",
    realism: "grounded",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=m6Q7KnXpNOg",
    description: "A brutally efficient action movie with nonstop close-quarters combat and tension."
    },

    {
    title: "The Raid 2",
    year: 2014,
    category: "action_adrenaline",
    genres: ["Action", "Crime", "Thriller"],
    mood: "intense",
    energy: "high",
    complexity: "medium",
    scale: "medium",
    pace: "fast",
    freshness: "modern",
    runtimeBucket: "long",
    realism: "grounded",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=PQ6yUHHfZ04",
    description: "A larger-scale crime-action epic with incredible choreography and relentless brutality."
    },

    {
    title: "Heat",
    year: 1995,
    category: "action_adrenaline",
    genres: ["Crime", "Drama", "Thriller"],
    mood: "serious",
    energy: "medium",
    complexity: "medium",
    scale: "big",
    pace: "medium",
    freshness: "classic",
    runtimeBucket: "long",
    realism: "grounded",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=PpAhjOvQVj0",
    description: "A masterful crime thriller with tension, atmosphere, and one of cinema's most iconic shootouts."
    },

    {
    title: "Die Hard",
    year: 1988,
    category: "action_adrenaline",
    genres: ["Action", "Thriller"],
    mood: "fun",
    energy: "high",
    complexity: "low",
    scale: "medium",
    pace: "fast",
    freshness: "classic",
    runtimeBucket: "medium",
    realism: "grounded",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=jaJuwKCmJbY",
    description: "An endlessly rewatchable action classic with tension, charisma, and momentum."
    },

    {
    title: "Bullet Train",
    year: 2022,
    category: "action_adrenaline",
    genres: ["Action", "Comedy", "Thriller"],
    mood: "fun",
    energy: "high",
    complexity: "low",
    scale: "medium",
    pace: "fast",
    freshness: "newer",
    runtimeBucket: "medium",
    realism: "stylized",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=0IOsk2Vlc4o",
    description: "A chaotic, stylish action-comedy packed with energy, humor, and colorful characters."
    },

    {
    title: "Atomic Blonde",
    year: 2017,
    category: "action_adrenaline",
    genres: ["Action", "Thriller"],
    mood: "cool",
    energy: "high",
    complexity: "medium",
    scale: "small",
    pace: "fast",
    freshness: "modern",
    runtimeBucket: "medium",
    realism: "stylized",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=yIUube1pSC0",
    description: "A slick spy thriller with brutal action, neon atmosphere, and stylish momentum."
    },

    {
    title: "Nobody",
    year: 2021,
    category: "action_adrenaline",
    genres: ["Action", "Thriller"],
    mood: "fun",
    energy: "high",
    complexity: "low",
    scale: "small",
    pace: "fast",
    freshness: "newer",
    runtimeBucket: "short",
    realism: "stylized",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=wZti8QKBWPo",
    description: "A fast, satisfying revenge-action movie with humor, violence, and strong pacing."
    },

    {
    title: "Free Guy",
    year: 2021,
    category: "action_adrenaline",
    genres: ["Action", "Comedy", "Sci-Fi"],
    mood: "fun",
    energy: "high",
    complexity: "low",
    scale: "big",
    pace: "fast",
    freshness: "newer",
    runtimeBucket: "medium",
    realism: "stylized",
    familySafe: true,
    trailer: "https://www.youtube.com/watch?v=X2m-08cOAbc",
    description: "A playful, high-energy action-comedy with gaming chaos and upbeat charm."
    },

    {
    title: "Kingsman: The Secret Service",
    year: 2014,
    category: "action_adrenaline",
    genres: ["Action", "Comedy"],
    mood: "fun",
    energy: "high",
    complexity: "low",
    scale: "big",
    pace: "fast",
    freshness: "modern",
    runtimeBucket: "medium",
    realism: "stylized",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=kl8F-8tR8to",
    description: "A stylish, fast-moving spy action movie filled with humor, gadgets, and outrageous set pieces."
    },

    {
    title: "The Man from U.N.C.L.E.",
    year: 2015,
    category: "action_adrenaline",
    genres: ["Action", "Comedy", "Adventure"],
    mood: "cool",
    energy: "medium",
    complexity: "low",
    scale: "medium",
    pace: "medium",
    freshness: "modern",
    runtimeBucket: "medium",
    realism: "stylized",
    familySafe: true,
    trailer: "https://www.youtube.com/watch?v=-x08iNZ8Mfc",
    description: "A smooth, stylish spy adventure with charm, chemistry, and a laid-back cool factor."
    },

    {
    title: "Speed",
    year: 1994,
    category: "action_adrenaline",
    genres: ["Action", "Thriller"],
    mood: "tense",
    energy: "high",
    complexity: "low",
    scale: "medium",
    pace: "fast",
    freshness: "classic",
    runtimeBucket: "medium",
    realism: "grounded",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=8piqd2BWeGI",
    description: "A nonstop high-concept action thriller driven by urgency, tension, and momentum."
    },

    {
    title: "Terminator 2: Judgment Day",
    year: 1991,
    category: "action_adrenaline",
    genres: ["Action", "Sci-Fi"],
    mood: "intense",
    energy: "high",
    complexity: "medium",
    scale: "big",
    pace: "fast",
    freshness: "classic",
    runtimeBucket: "long",
    realism: "stylized",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=CRRlbK5w8AE",
    description: "A landmark sci-fi action blockbuster with iconic set pieces, emotion, and relentless momentum."
    },

    {
    title: "The Rock",
    year: 1996,
    category: "action_adrenaline",
    genres: ["Action", "Thriller"],
    mood: "fun",
    energy: "high",
    complexity: "low",
    scale: "big",
    pace: "fast",
    freshness: "classic",
    runtimeBucket: "long",
    realism: "stylized",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=a3qcNyjj9ZQ",
    scorePlaylist: "https://www.youtube.com/playlist?list=PLohYzz4btpaQ4ts1hvCV_qsITEJClb6zA",
    description: "Pure 90s action energy with charisma, explosions, and nonstop blockbuster momentum."
    },

    {
    title: "True Lies",
    year: 1994,
    category: "action_adrenaline",
    genres: ["Action", "Comedy", "Thriller"],
    mood: "fun",
    energy: "high",
    complexity: "low",
    scale: "big",
    pace: "fast",
    freshness: "classic",
    runtimeBucket: "long",
    realism: "stylized",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=Uz45Y50ozxE",
    scorePlaylist: "https://www.youtube.com/playlist?list=PLohYzz4btpaSyF5zglXVPl9IZt4cggnnA",
    description: "A huge, funny, high-energy action spectacle with charm, scale, and classic blockbuster pacing."
    },

    {
    title: "Aliens",
    year: 1986,
    category: "action_adrenaline",
    genres: ["Action", "Sci-Fi", "Horror"],
    mood: "tense",
    energy: "high",
    complexity: "medium",
    scale: "big",
    pace: "fast",
    freshness: "classic",
    runtimeBucket: "long",
    realism: "stylized",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=oSeQQlaCZgU",
    description: "An intense sci-fi action masterpiece balancing suspense, survival, and explosive combat."
    },

    {
    title: "Point Break",
    year: 1991,
    category: "action_adrenaline",
    genres: ["Action", "Crime", "Thriller"],
    mood: "cool",
    energy: "high",
    complexity: "low",
    scale: "medium",
    pace: "fast",
    freshness: "classic",
    runtimeBucket: "medium",
    realism: "stylized",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=ZgHPumVN4Fo",
    description: "A wildly entertaining adrenaline-fueled crime movie packed with surfing, skydiving, and charisma."
    },

    {
    title: "Face/Off",
    year: 1997,
    category: "action_adrenaline",
    genres: ["Action", "Crime", "Sci-Fi"],
    mood: "wild",
    energy: "high",
    complexity: "medium",
    scale: "big",
    pace: "fast",
    freshness: "classic",
    runtimeBucket: "long",
    realism: "stylized",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=S-nDX0BeFoQ",
    scorePlaylist: "https://www.youtube.com/playlist?list=PLohYzz4btpaRR6ZqlhayrnlIi8uUZYoGK",
    description: "An outrageous and endlessly entertaining action thriller built on pure cinematic chaos."
    },

    {
    title: "The Fugitive",
    year: 1993,
    category: "action_adrenaline",
    genres: ["Thriller", "Drama", "Crime"],
    mood: "tense",
    energy: "medium",
    complexity: "medium",
    scale: "medium",
    pace: "fast",
    freshness: "classic",
    runtimeBucket: "long",
    realism: "grounded",
    familySafe: true,
    trailer: "https://www.youtube.com/watch?v=ETPVU0acnrE",
    description: "A gripping manhunt thriller with urgency, intelligence, and one of the best chase narratives ever made."
    },

    {
    title: "Lethal Weapon",
    year: 1987,
    category: "action_adrenaline",
    genres: ["Action", "Comedy", "Crime"],
    mood: "fun",
    energy: "high",
    complexity: "low",
    scale: "medium",
    pace: "fast",
    freshness: "classic",
    runtimeBucket: "medium",
    realism: "grounded",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=bKeW-MGu-qQ",
    description: "A charismatic buddy-cop classic with humor, chemistry, and explosive action energy."
    },

    {
    title: "Con Air",
    year: 1997,
    category: "action_adrenaline",
    genres: ["Action", "Thriller"],
    mood: "wild",
    energy: "high",
    complexity: "low",
    scale: "big",
    pace: "fast",
    freshness: "classic",
    runtimeBucket: "long",
    realism: "stylized",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=Olvpk5BXWCI",
    description: "A gloriously over-the-top action movie filled with chaos, momentum, and unforgettable 90s energy."
    },

    {
    title: "Predator",
    year: 1987,
    category: "action_adrenaline",
    genres: ["Action", "Sci-Fi", "Thriller"],
    mood: "intense",
    energy: "high",
    complexity: "low",
    scale: "medium",
    pace: "fast",
    freshness: "classic",
    runtimeBucket: "medium",
    realism: "stylized",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=_1wDBNHYDv8",
    description: "A tense jungle survival-action classic with iconic suspense, atmosphere, and combat."
    }
];

const horrorSuspense = [
    {
    title: "A Quiet Place",
    year: 2018,
    category: "horror_suspense",
    genres: ["Thriller", "Horror"],
    mood: "tense",
    energy: "medium",
    complexity: "low",
    scale: "small",
    pace: "medium",
    freshness: "newer",
    runtimeBucket: "short",
    realism: "stylized",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=WR7cc5t7tv8",
    description: "A tense, minimalist survival story driven by silence and stakes."
    },

    {
    title: "Get Out",
    year: 2017,
    category: "horror_suspense",
    genres: ["Horror", "Thriller", "Mystery"],
    mood: "unsettling",
    energy: "medium",
    complexity: "medium",
    scale: "small",
    pace: "medium",
    freshness: "modern",
    runtimeBucket: "medium",
    realism: "grounded",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=DzfpyUB60YY",
    description: "A smart, socially charged psychological horror film filled with tension and unease."
    },

    {
    title: "Hereditary",
    year: 2018,
    category: "horror_suspense",
    genres: ["Horror", "Drama"],
    mood: "disturbing",
    energy: "medium",
    complexity: "high",
    scale: "small",
    pace: "slow",
    freshness: "newer",
    runtimeBucket: "long",
    realism: "grounded",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=V6wWKNij_1M",
    description: "A deeply unsettling family horror story with escalating dread and emotional intensity."
    },

    {
    title: "The Invisible Man",
    year: 2020,
    category: "horror_suspense",
    genres: ["Thriller", "Sci-Fi", "Horror"],
    mood: "tense",
    energy: "high",
    complexity: "medium",
    scale: "small",
    pace: "fast",
    freshness: "newer",
    runtimeBucket: "medium",
    realism: "grounded",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=WO_FJdiY9dA",
    description: "A modern suspense thriller driven by paranoia, control, and escalating psychological pressure."
    },

    {
    title: "It Follows",
    year: 2014,
    category: "horror_suspense",
    genres: ["Horror", "Mystery"],
    mood: "unsettling",
    energy: "low",
    complexity: "medium",
    scale: "small",
    pace: "slow",
    freshness: "modern",
    runtimeBucket: "medium",
    realism: "stylized",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=HkZYbOH0ujw",
    description: "A slow-building horror movie with dreamlike atmosphere and constant underlying dread."
    },

    {
    title: "Barbarian",
    year: 2022,
    category: "horror_suspense",
    genres: ["Horror", "Thriller"],
    mood: "wild",
    energy: "high",
    complexity: "low",
    scale: "small",
    pace: "fast",
    freshness: "newer",
    runtimeBucket: "medium",
    realism: "stylized",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=Dr89pmKrqkI",
    description: "A chaotic, unpredictable horror thriller that constantly shifts direction and tension."
    },

    {
    title: "Nope",
    year: 2022,
    category: "horror_suspense",
    genres: ["Horror", "Sci-Fi", "Mystery"],
    mood: "unsettling",
    energy: "medium",
    complexity: "medium",
    scale: "big",
    pace: "medium",
    freshness: "newer",
    runtimeBucket: "long",
    realism: "stylized",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=In8fuzj3gck",
    description: "A strange, atmospheric sci-fi horror film about spectacle, fear, and the unknown."
    },

    {
    title: "The Conjuring",
    year: 2013,
    category: "horror_suspense",
    genres: ["Horror", "Thriller"],
    mood: "tense",
    energy: "medium",
    complexity: "low",
    scale: "small",
    pace: "medium",
    freshness: "modern",
    runtimeBucket: "medium",
    realism: "stylized",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=k10ETZ41q5o",
    description: "A polished supernatural horror movie with strong atmosphere and classic haunted-house tension."
    }
];

const emotionalReflective = [
    {
    title: "Her",
    year: 2013,
    category: "emotional_reflective",
    genres: ["Drama", "Romance", "Sci-Fi"],
    mood: "emotional",
    energy: "low",
    complexity: "medium",
    scale: "small",
    pace: "slow",
    freshness: "modern",
    runtimeBucket: "medium",
    realism: "grounded",
    familySafe: true,
    trailer: "https://www.youtube.com/watch?v=dJTU48_yghs",
    description: "A soft, emotional look at human connection and technology."
    },

    {
    title: "The Pursuit of Happyness",
    year: 2006,
    category: "emotional_reflective",
    genres: ["Drama"],
    mood: "inspiring",
    energy: "medium",
    complexity: "low",
    scale: "small",
    pace: "medium",
    freshness: "older",
    runtimeBucket: "long",
    realism: "grounded",
    familySafe: true,
    trailer: "https://www.youtube.com/watch?v=DMOBlEcRuw8",
    description: "An emotional and inspiring story about perseverance, fatherhood, and survival."
    },

    {
    title: "Good Will Hunting",
    year: 1997,
    category: "emotional_reflective",
    genres: ["Drama"],
    mood: "emotional",
    energy: "low",
    complexity: "medium",
    scale: "small",
    pace: "slow",
    freshness: "classic",
    runtimeBucket: "medium",
    realism: "grounded",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=ReIJ1lbL-Q8",
    scorePlaylist: "https://www.youtube.com/playlist?list=PLE0F2FF4708340D46",
    description: "A deeply human character drama about intelligence, trauma, and emotional growth."
    },

    {
    title: "Whiplash",
    year: 2014,
    category: "emotional_reflective",
    genres: ["Drama", "Music"],
    mood: "intense",
    energy: "high",
    complexity: "medium",
    scale: "small",
    pace: "fast",
    freshness: "modern",
    runtimeBucket: "medium",
    realism: "grounded",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=7d_jQycdQGo",
    description: "An emotionally explosive story about ambition, pressure, and artistic obsession."
    },

    {
    title: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
    category: "emotional_reflective",
    genres: ["Drama", "Romance", "Sci-Fi"],
    mood: "emotional",
    energy: "low",
    complexity: "high",
    scale: "small",
    pace: "slow",
    freshness: "older",
    runtimeBucket: "medium",
    realism: "stylized",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=07-QBnEkgXU",
    description: "A creative and emotional exploration of memory, heartbreak, and human connection."
    },

    {
    title: "Past Lives",
    year: 2023,
    category: "emotional_reflective",
    genres: ["Drama", "Romance"],
    mood: "reflective",
    energy: "low",
    complexity: "low",
    scale: "small",
    pace: "slow",
    freshness: "newer",
    runtimeBucket: "medium",
    realism: "grounded",
    familySafe: true,
    trailer: "https://www.youtube.com/watch?v=kA244xewjcI",
    description: "A quiet, emotionally mature story about relationships, timing, and unresolved connection."
    }
];

const weirdCultExperimental = [
    {
    title: "The Jacket",
    year: 2005,
    category: "weird_cult_experimental",
    genres: ["Sci-Fi", "Thriller", "Mystery"],
    mood: "unsettling",
    energy: "medium",
    complexity: "high",
    scale: "small",
    pace: "slow",
    freshness: "older",
    runtimeBucket: "medium",
    realism: "stylized",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=3fPd7_LFOL4",
    description: "A strange psychological time-bending thriller with haunting atmosphere and cult energy."
    },

    {
    title: "Everything Everywhere All at Once",
    year: 2022,
    category: "weird_cult_experimental",
    genres: ["Sci-Fi", "Comedy", "Drama"],
    mood: "wild",
    energy: "high",
    complexity: "high",
    scale: "big",
    pace: "fast",
    freshness: "newer",
    runtimeBucket: "long",
    realism: "stylized",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=wxN1T1uxQ2g",
    description: "A chaotic multiverse adventure blending absurd comedy, emotional depth, and nonstop creativity."
    },

    {
    title: "Donnie Darko",
    year: 2001,
    category: "weird_cult_experimental",
    genres: ["Sci-Fi", "Drama", "Mystery"],
    mood: "unsettling",
    energy: "low",
    complexity: "high",
    scale: "small",
    pace: "slow",
    freshness: "older",
    runtimeBucket: "medium",
    realism: "stylized",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=bzLn8sYeM9o",
    scorePlaylist: "https://www.youtube.com/playlist?list=PLL70aYXRP9yYUi7zNrQJr9CM25MRM8iT-",
    description: "A mysterious cult classic filled with paranoia, time distortion, and eerie atmosphere."
    },

    {
    title: "Scott Pilgrim vs. the World",
    year: 2010,
    category: "weird_cult_experimental",
    genres: ["Action", "Comedy", "Romance"],
    mood: "fun",
    energy: "high",
    complexity: "medium",
    scale: "medium",
    pace: "fast",
    freshness: "modern",
    runtimeBucket: "medium",
    realism: "stylized",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=7wd5KEaOtm4",
    description: "A hyper-stylized comic-book movie packed with music, energy, humor, and visual creativity."
    },

    {
    title: "Being John Malkovich",
    year: 1999,
    category: "weird_cult_experimental",
    genres: ["Comedy", "Drama", "Fantasy"],
    mood: "weird",
    energy: "medium",
    complexity: "high",
    scale: "small",
    pace: "medium",
    freshness: "older",
    runtimeBucket: "medium",
    realism: "stylized",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=LEtlqumjXLw",
    description: "A bizarre and inventive identity-comedy built around one of cinema's strangest concepts."
    },

    {
    title: "Sorry to Bother You",
    year: 2018,
    category: "weird_cult_experimental",
    genres: ["Comedy", "Sci-Fi"],
    mood: "wild",
    energy: "medium",
    complexity: "medium",
    scale: "medium",
    pace: "medium",
    freshness: "newer",
    runtimeBucket: "medium",
    realism: "stylized",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=enH3xA4mYcY",
    description: "A surreal satire that becomes increasingly strange, unpredictable, and socially sharp."
    },

    {
    title: "The Lobster",
    year: 2015,
    category: "weird_cult_experimental",
    genres: ["Drama", "Comedy", "Sci-Fi"],
    mood: "deadpan",
    energy: "low",
    complexity: "high",
    scale: "small",
    pace: "slow",
    freshness: "modern",
    runtimeBucket: "medium",
    realism: "stylized",
    familySafe: false,
    trailer: "https://www.youtube.com/watch?v=LTNZmOJxuAc",
    description: "A deeply strange dystopian relationship satire with dry humor and unsettling world-building."
    }
];

const movies = [
    ...coreIntelligentThrillers,
    ...crowdPleasingMainstream,
    ...comfortFeelGood,
    ...actionAdrenaline,
    ...horrorSuspense,
    ...emotionalReflective,
    ...weirdCultExperimental
];

const questionPool = [
    {
    id: "energy_1",
    category: "energy",
    prompt: "What sounds better right now?",
    a: { title: "High energy", text: "I want something intense, fast, and gripping.", hint: "Louder night", prefs: { energy: ["high"] } },
    b: { title: "Low-key", text: "I want something calmer and easier to settle into.", hint: "Softer night", prefs: { energy: ["low"] } }
    },
    {
    id: "energy_2",
    category: "energy",
    prompt: "Pick your watch energy.",
    a: { title: "Adrenaline", text: "Momentum, urgency, and strong forward motion.", hint: "Push it", prefs: { energy: ["high"], pace: ["fast"] } },
    b: { title: "Ease", text: "I don't want the movie pushing too hard tonight.", hint: "Take it easy", prefs: { energy: ["low"], pace: ["slow", "medium"] } }
    },
    {
    id: "complexity_1",
    category: "complexity",
    prompt: "Which challenge level do you want?",
    a: { title: "Mind-bending", text: "Give me layers, ideas, and something to decode.", hint: "Lean in", prefs: { complexity: ["high"] } },
    b: { title: "Easy watch", text: "I want something clean and instantly watchable.", hint: "No homework", prefs: { complexity: ["low"] } }
    },
    {
    id: "complexity_2",
    category: "complexity",
    prompt: "How much thinking do you want to do?",
    a: { title: "Quite a bit", text: "I want a movie that asks something of me.", hint: "Challenge me", prefs: { complexity: ["high"], mood: ["smart", "serious", "emotional"] } },
    b: { title: "Not much", text: "Tonight is more about comfort than analysis.", hint: "Coast mode", prefs: { complexity: ["low"], mood: ["fun", "warm"] } }
    },
    {
    id: "mood_1",
    category: "mood",
    prompt: "What's the better vibe?",
    a: { title: "Serious", text: "Focused, tense, dramatic, or weighty.", hint: "Dialed in", prefs: { mood: ["serious"] } },
    b: { title: "Fun", text: "Playful, entertaining, stylish, and lighter.", hint: "Have fun", prefs: { mood: ["fun"] } }
    },
    {
    id: "mood_2",
    category: "mood",
    prompt: "Which tone fits tonight better?",
    a: { title: "Warm", text: "Heart, comfort, and a softer landing.", hint: "Comfort watch", prefs: { mood: ["warm"] } },
    b: { title: "Smart", text: "Sharp, thoughtful, and conceptually interesting.", hint: "Sharp watch", prefs: { mood: ["smart"] } }
    },
    {
    id: "mood_3",
    category: "mood",
    prompt: "What do you want more of?",
    a: { title: "Emotion", text: "I want the movie to actually land a little emotionally.", hint: "Feel it", prefs: { mood: ["emotional", "warm"] } },
    b: { title: "Cool factor", text: "I mostly want style, momentum, or wit.", hint: "Style first", prefs: { mood: ["fun", "smart", "serious"] } }
    },
    {
    id: "scale_1",
    category: "scale",
    prompt: "Pick the movie size.",
    a: { title: "Big spectacle", text: "Scale, cinematic size, maybe action or major stakes.", hint: "Big screen", prefs: { scale: ["big"] } },
    b: { title: "Smaller story", text: "Tighter, more intimate, more concept- or character-driven.", hint: "Closer in", prefs: { scale: ["small"] } }
    },
    {
    id: "scale_2",
    category: "scale",
    prompt: "What kind of night is this?",
    a: { title: "Event movie", text: "Give me something that feels like an event.", hint: "Go large", prefs: { scale: ["big"], runtimeBucket: ["long", "medium"] } },
    b: { title: "Quietly great", text: "I want something smaller that really works.", hint: "Subtle win", prefs: { scale: ["small"] } }
    },
    {
    id: "pace_1",
    category: "pace",
    prompt: "How should it move?",
    a: { title: "Fast-moving", text: "Keep it active. I don't want dead air.", hint: "Momentum", prefs: { pace: ["fast"] } },
    b: { title: "Slow burn", text: "I'm okay with patience and atmosphere.", hint: "Let it build", prefs: { pace: ["slow"] } }
    },
    {
    id: "pace_2",
    category: "pace",
    prompt: "What's more important right now?",
    a: { title: "Immediate pull", text: "Hook me early and keep me engaged.", hint: "Grab me", prefs: { pace: ["fast"], energy: ["high", "medium"] } },
    b: { title: "A gradual payoff", text: "Let the movie unfold a little more patiently.", hint: "Give it room", prefs: { pace: ["slow", "medium"], energy: ["low", "medium"] } }
    },
    {
    id: "freshness_1",
    category: "freshness",
    prompt: "What era sounds more fun?",
    a: { title: "Newer", text: "Something modern or pretty recent feels right.", hint: "Recent-ish", prefs: { freshness: ["newer", "modern"] } },
    b: { title: "Older", text: "I'd be happy with something a bit older or classic-feeling.", hint: "Reach back", prefs: { freshness: ["older", "modern"] } }
    },
    {
    id: "freshness_2",
    category: "freshness",
    prompt: "Do you want a current-feeling movie or a time-tested one?",
    a: { title: "Current-feeling", text: "Modern filmmaking and newer release energy.", hint: "Fresh", prefs: { freshness: ["newer"] } },
    b: { title: "Time-tested", text: "Something proven and established is appealing.", hint: "Proven", prefs: { freshness: ["older", "modern"] } }
    },
    {
    id: "runtime_1",
    category: "runtime",
    prompt: "How much movie do you want?",
    a: { title: "Compact", text: "A tighter watch sounds better tonight.", hint: "Keep it moving", prefs: { runtimeBucket: ["short", "medium"] } },
    b: { title: "Epic", text: "I'm open to a longer, more immersive ride.", hint: "Settle in", prefs: { runtimeBucket: ["long"] } }
    },
    {
    id: "runtime_2",
    category: "runtime",
    prompt: "What feels more right?",
    a: { title: "Quick commitment", text: "I'd like something easier to fit into the night.", hint: "Less time", prefs: { runtimeBucket: ["short", "medium"] } },
    b: { title: "Full experience", text: "I'm fine giving the movie real time to breathe.", hint: "More time", prefs: { runtimeBucket: ["long"] } }
    },
    {
    id: "realism_1",
    category: "realism",
    prompt: "Which kind of world do you want?",
    a: { title: "Grounded", text: "Something more realistic or believable.", hint: "More real", prefs: { realism: ["grounded"] } },
    b: { title: "Stylized", text: "I'm good with heightened concepts or movie logic.", hint: "More cinematic", prefs: { realism: ["stylized"] } }
    },
    {
    id: "realism_2",
    category: "realism",
    prompt: "Which flavor sounds better?",
    a: { title: "Real-world texture", text: "I want it to feel rooted and human.", hint: "Rooted", prefs: { realism: ["grounded"], scale: ["small", "big"] } },
    b: { title: "Movie magic", text: "I want style, concept, or heightened spectacle.", hint: "Heightened", prefs: { realism: ["stylized"] } }
    },
    {
    id: "wildcard_1",
    category: "wildcard",
    prompt: "What's the bigger priority?",
    a: { title: "Rewatchable fun", text: "I want something easy to click with and enjoy.", hint: "Reliable", prefs: { mood: ["fun", "warm"], complexity: ["low", "medium"] } },
    b: { title: "A stronger impression", text: "I'd like something that leaves a bigger mark.", hint: "Memorable", prefs: { mood: ["serious", "emotional", "smart"], complexity: ["medium", "high"] } }
    },
    {
    id: "wildcard_2",
    category: "wildcard",
    prompt: "What sounds better tonight?",
    a: { title: "Comfort zone", text: "Give me something accessible and easy to trust.", hint: "Safe pick", prefs: { familySafe: [true], mood: ["warm", "smart", "fun"] } },
    b: { title: "Take a swing", text: "I'm open to something sharper or more demanding.", hint: "Bolder pick", prefs: { familySafe: [false], mood: ["serious", "smart", "emotional"] } }
    }
];

const REQUIRED_CATEGORIES = ["energy", "complexity", "mood", "scale"];
const OPTIONAL_CATEGORIES = ["pace", "freshness", "runtime", "realism", "wildcard"];
const QUESTIONS_PER_ROUND = 5;

const state = {
    roundQuestions: [],
    currentIndex: 0,
    answers: [],
    latestRanked: []
};

const els = {
    screenIntro: document.getElementById("screenIntro"),
    screenQuiz: document.getElementById("screenQuiz"),
    screenReveal: document.getElementById("screenReveal"),
    screenResult: document.getElementById("screenResult"),
    progressText: document.getElementById("progressText"),
    progressCount: document.getElementById("progressCount"),
    progressBar: document.getElementById("progressBar"),
    startBtn: document.getElementById("startBtn"),
    surpriseBtn: document.getElementById("surpriseBtn"),
    backBtn: document.getElementById("backBtn"),
    restartBtn1: document.getElementById("restartBtn1"),
    restartBtn2: document.getElementById("restartBtn2"),
    anotherRoundBtn: document.getElementById("anotherRoundBtn"),
    shuffleBtn: document.getElementById("shuffleBtn"),
    questionMeta: document.getElementById("questionMeta"),
    questionTitle: document.getElementById("questionTitle"),
    choiceA: document.getElementById("choiceA"),
    choiceB: document.getElementById("choiceB"),
    resultTitle: document.getElementById("resultTitle"),
    resultMeta: document.getElementById("resultMeta"),
    resultTags: document.getElementById("resultTags"),
    resultDescription: document.getElementById("resultDescription"),
    whyList: document.getElementById("whyList"),
    backupList: document.getElementById("backupList")
};

function shuffle(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

function pickOneQuestion(category) {
    const options = questionPool.filter(q => q.category === category);
    return shuffle(options)[0];
}

function buildRoundQuestions() {
    const selected = REQUIRED_CATEGORIES.map(pickOneQuestion);
    const leftoverPool = shuffle(
    OPTIONAL_CATEGORIES
        .map(pickOneQuestion)
        .filter(Boolean)
    );

    while (selected.length < QUESTIONS_PER_ROUND && leftoverPool.length) {
    selected.push(leftoverPool.shift());
    }

    return shuffle(selected).slice(0, QUESTIONS_PER_ROUND);
}

function showScreen(screenEl) {
    [els.screenIntro, els.screenQuiz, els.screenReveal, els.screenResult].forEach(el => el.classList.remove("active"));
    screenEl.classList.add("active");
    updateProgress();
}

function updateProgress() {
    const total = state.roundQuestions.length || QUESTIONS_PER_ROUND;
    const current = Math.min(state.answers.filter(v => v !== undefined).length, total);
    els.progressCount.textContent = `${current} / ${total}`;
    els.progressBar.style.width = `${(current / total) * 100}%`;

    if (els.screenIntro.classList.contains("active")) {
    els.progressText.textContent = "Ready to start";
    } else if (els.screenQuiz.classList.contains("active")) {
    els.progressText.textContent = `Question ${state.currentIndex + 1}`;
    } else if (els.screenReveal.classList.contains("active")) {
    els.progressText.textContent = "Calculating pick";
    } else {
    els.progressText.textContent = "Recommendation ready";
    }
}

function renderChoice(button, label, choice) {
    button.innerHTML = `
    <div class="choice-label">${label}</div>
    <h4 class="choice-title">${choice.title}</h4>
    <p class="choice-text">${choice.text}</p>
    <div class="choice-hint">${choice.hint}</div>
    `;
}

function renderQuestion() {
    const q = state.roundQuestions[state.currentIndex];
    els.questionMeta.textContent = `Round question ${state.currentIndex + 1} of ${state.roundQuestions.length}`;
    els.questionTitle.textContent = q.prompt;
    renderChoice(els.choiceA, "Option A", q.a);
    renderChoice(els.choiceB, "Option B", q.b);
    els.backBtn.style.visibility = state.currentIndex === 0 ? "hidden" : "visible";
    updateProgress();
}

function startRound() {
    state.roundQuestions = buildRoundQuestions();
    state.currentIndex = 0;
    state.answers = [];
    state.latestRanked = [];
    renderQuestion();
    showScreen(els.screenQuiz);
}

function goHome() {
    state.roundQuestions = [];
    state.currentIndex = 0;
    state.answers = [];
    state.latestRanked = [];
    showScreen(els.screenIntro);
}

function choose(optionKey) {
    state.answers[state.currentIndex] = optionKey;

    if (state.currentIndex < state.roundQuestions.length - 1) {
    state.currentIndex += 1;
    renderQuestion();
    } else {
    showScreen(els.screenReveal);
    setTimeout(() => {
        state.latestRanked = scoreMovies();
        renderResults(state.latestRanked);
        showScreen(els.screenResult);
    }, 850);
    }
}

function goBack() {
    if (state.currentIndex > 0) {
    state.currentIndex -= 1;
    renderQuestion();
    }
}

function labelForKey(key) {
    const map = {
    mood: "vibe",
    energy: "energy",
    complexity: "complexity",
    scale: "scale",
    pace: "pace",
    freshness: "era",
    runtimeBucket: "runtime",
    realism: "style",
    familySafe: "comfort level"
    };
    return map[key] || key;
}

function labelForValue(value) {
    const map = {
    high: "high",
    medium: "medium",
    low: "low",
    serious: "serious",
    fun: "fun",
    warm: "warm",
    smart: "smart",
    emotional: "emotional",
    big: "big",
    small: "smaller-scale",
    fast: "fast",
    slow: "slow-burn",
    modern: "modern",
    newer: "newer",
    older: "older",
    short: "compact",
    long: "longer",
    grounded: "grounded",
    stylized: "stylized",
    true: "comfortable",
    false: "edgier"
    };
    return map[String(value)] || value;
}

function scoreMovies() {
    return movies
    .map(movie => {
        let score = 0;
        const reasons = [];

        state.roundQuestions.forEach((question, idx) => {
        const pickedKey = state.answers[idx];
        const pickedChoice = question[pickedKey];
        const prefs = pickedChoice?.prefs || {};

        Object.entries(prefs).forEach(([key, desiredValues]) => {
            const actual = movie[key];
            if (desiredValues.includes(actual)) {
            score += 3;
            reasons.push(`${labelForKey(key)} matched ${labelForValue(actual)}`);
            }
        });
        });

        if (movie.runtimeBucket === "medium") score += 0.35;
        if (movie.freshness === "modern") score += 0.15;
        score += Math.random() * 0.25;

        return { ...movie, score, reasons };
    })
    .sort((a, b) => b.score - a.score);
}

function renderResults(ranked) {
    const winnerPool = ranked.slice(0, Math.min(4, ranked.length));
    const winner = winnerPool[Math.floor(Math.random() * winnerPool.length)];
    const backups = ranked.filter(m => m.title !== winner.title).slice(0, 3);

    els.resultTitle.textContent = `${winner.title} (${winner.year})`;
    els.resultDescription.textContent = winner.description;

    els.resultMeta.innerHTML = "";
    [`${winner.energy} energy`, `${winner.complexity} complexity`, `${winner.runtimeBucket} runtime`].forEach(text => {
    const span = document.createElement("span");
    span.className = "pill";
    span.textContent = text;
    els.resultMeta.appendChild(span);
    });

    els.resultTags.innerHTML = "";
    [...winner.genres, winner.mood, winner.scale, winner.pace].forEach(tag => {
    const span = document.createElement("span");
    span.className = "pill";
    span.textContent = tag;
    els.resultTags.appendChild(span);
    });

    els.whyList.innerHTML = "";
    const uniqueReasons = [...new Set(winner.reasons)].slice(0, 5);
    (uniqueReasons.length ? uniqueReasons : ["Strong overall score across this round's choices"]).forEach(reason => {
    const item = document.createElement("div");
    item.className = "why-item";
    item.textContent = reason;
    els.whyList.appendChild(item);
    });

    els.backupList.innerHTML = "";
    backups.forEach(movie => {
    const card = document.createElement("div");
    card.className = "mini-card";
    card.innerHTML = `
        <h4>${movie.title} (${movie.year})</h4>
        <p>${movie.genres.join(" · ")} · ${movie.description}</p>
    `;
    els.backupList.appendChild(card);
    });

    const trailerContainer = document.getElementById("trailer-container");

    const buttons = [];

    if (winner.trailer) {
    buttons.push(`<button id="watch-trailer-btn" type="button" class="trailer-btn">🎬 Watch Trailer</button>`);
    }

    if (winner.scorePlaylist) {
    buttons.push(`<button id="listen-score-btn" type="button">🎼 Listen to Score</button>`);
    }

    if (buttons.length) {
    trailerContainer.innerHTML = `
        <div style="margin-top: 16px; margin-bottom: 16px; display:flex; gap:10px; flex-wrap:wrap;">
        ${buttons.join("")}
        </div>
    `;

    const trailerBtn = document.getElementById("watch-trailer-btn");
    const scoreBtn = document.getElementById("listen-score-btn");

    if (trailerBtn) {
        trailerBtn.onclick = () => openTrailerModal(winner.trailer);
    }

    if (scoreBtn) {
        scoreBtn.onclick = () => openScoreModal(winner.scorePlaylist);
    }
    } else {
    trailerContainer.innerHTML = "";
    }
}

function randomInstantPick() {
    state.roundQuestions = buildRoundQuestions();
    state.currentIndex = 0;
    state.answers = state.roundQuestions.map(() => (Math.random() < 0.5 ? "a" : "b"));
    state.latestRanked = scoreMovies();
    renderResults(state.latestRanked);
    showScreen(els.screenResult);
}

function shuffleWinner() {
    if (!state.latestRanked.length) return;
    renderResults(state.latestRanked);
}

async function getRandomMovie() {
    const res = await fetch("/data/movies-expanded-3.json");
    const movies = await res.json();

    return movies[Math.floor(Math.random() * movies.length)];
}

async function launchRandomTrailer() {
    const button = document.getElementById("randomTrailerBtn");

    try {
    button.disabled = true;
    button.textContent = "Finding trailer...";

    const movie = await getRandomMovie();

    const res = await fetch("/.netlify/functions/get-trailer", {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify(movie)
    });

    const data = await res.json();

    if (!data.youtubeKey) {
        alert(`No trailer found for ${movie.title}. Try again!`);
        return;
    }

    // Use your existing theater mode function here
    openTrailerModal(`https://www.youtube.com/watch?v=${data.youtubeKey}`);

    } catch (error) {
    console.error(error);
    alert("Could not load a trailer right now.");
    } finally {
    button.disabled = false;
    button.textContent = "🎲 Random vibe";
    }
}

const randomTrailerBtnEle = document.getElementById("randomTrailerBtn");

if (randomTrailerBtnEle) {
  randomTrailerBtnEle.addEventListener("click", launchRandomTrailer);
}

if (els.startBtn) els.startBtn.addEventListener("click", startRound);
if (els.surpriseBtn) els.surpriseBtn.addEventListener("click", randomInstantPick);
if (els.choiceA) els.choiceA.addEventListener("click", () => choose("a"));
if (els.choiceB) els.choiceB.addEventListener("click", () => choose("b"));
if (els.backBtn) els.backBtn.addEventListener("click", goBack);
if (els.restartBtn1) els.restartBtn1.addEventListener("click", goHome);
if (els.restartBtn2) els.restartBtn2.addEventListener("click", goHome);
if (els.anotherRoundBtn) els.anotherRoundBtn.addEventListener("click", startRound);
if (els.shuffleBtn) els.shuffleBtn.addEventListener("click", shuffleWinner);

const trailerModalClose = document.getElementById("trailer-modal-close");
const trailerModalBackdrop = document.querySelector(".trailer-modal-backdrop");

if (trailerModalClose) {
  trailerModalClose.addEventListener("click", closeTrailerModal);
}

if (trailerModalBackdrop) {
  trailerModalBackdrop.addEventListener("click", closeTrailerModal);
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeTrailerModal();
  }
});

updateProgress();