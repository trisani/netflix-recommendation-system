"use client";

export default function Filter({ setGenre }: any) {
  const genres = [
    "All",
    "Dramas",
    "Comedies",
    "Horror Movies",
    "Action & Adventure",
    "Thrillers"
  ];

  return (
    <div className="flex gap-3 mb-4 flex-wrap">
      {genres.map((g) => (
        <button
          key={g}
          onClick={() => setGenre(g)}
          className="bg-red-600 px-3 py-1 rounded text-sm hover:bg-red-700"
        >
          {g}
        </button>
      ))}
    </div>
  );
}