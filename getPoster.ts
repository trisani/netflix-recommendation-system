const API_KEY = process.env.NEXT_PUBLIC_TMDB_KEY;

export async function getPoster(title: string) {
  try {
    // 🔥 API CALL
    const res = await fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${encodeURIComponent(title)}`
    );

    const data = await res.json();

    // ✅ IF RESULT FOUND
    if (data && data.results && data.results.length > 0) {
      const posterPath = data.results[0].poster_path;

      if (posterPath) {
        return `https://image.tmdb.org/t/p/w500${posterPath}`;
      }
    }

    // ⚠️ FALLBACK (NO POSTER FOUND)
    return "https://dummyimage.com/300x450/000/fff&text=No+Poster";
  } catch (error) {
    console.error("Poster Fetch Error:", error);

    // ❌ ERROR FALLBACK
    return "https://dummyimage.com/300x450/000/fff&text=Error";
  }
}