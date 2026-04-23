"use client";

import { useEffect, useState } from "react";

export default function Recommendations({ title }: { title: string }) {
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    if (!title) return;

    fetch(`/api/recommend?title=${encodeURIComponent(title)}`)
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, [title]);

  return (
    <div className="mt-8">
      <h2 className="text-2xl text-red-500 mb-3">
        Recommendations
      </h2>

      {/* 🎬 MOVIES */}
      <h3 className="text-lg mb-2">Movies</h3>
      <div className="flex gap-4 overflow-x-scroll mb-4">
        {movies
          .filter((m) => m.type === "Movie")
          .map((m, i) => (
            <div key={i} className="min-w-[150px]">
              <img
                src={m.poster}
                className="w-[150px] h-[220px] rounded"
              />
              <p className="text-sm">{m.title}</p>
            </div>
          ))}
      </div>

      {/* 📺 TV SHOWS */}
      <h3 className="text-lg mb-2">TV Shows</h3>
      <div className="flex gap-4 overflow-x-scroll">
        {movies
          .filter((m) => m.type === "TV Show")
          .map((m, i) => (
            <div key={i} className="min-w-[150px]">
              <img
                src={m.poster}
                className="w-[150px] h-[220px] rounded"
              />
              <p className="text-sm">{m.title}</p>
            </div>
          ))}
      </div>
    </div>
  );
}