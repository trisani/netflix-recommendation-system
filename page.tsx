"use client";

import { useState } from "react";
import data from "@/data/netflix.json";
import similarity from "@/data/similarity.json";

export default function Recommend() {
  const [title, setTitle] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [explanation, setExplanation] = useState("");

  const handleRecommend = () => {
    const input = title.toLowerCase();

    // Smart matching
    const matchedKey = Object.keys(similarity).find((key) =>
      key.toLowerCase().includes(input)
    );

    if (!matchedKey) {
      setResults([]);
      setExplanation("No match found");
      return;
    }

    const recTitles = similarity[matchedKey];

    // Map to full data (with posters)
    const recData = data.filter((item: any) =>
      recTitles.includes(item.title)
    );

    setResults(recData);

    setExplanation(
      `Recommended because it is similar to "${matchedKey}" in genre and theme.`
    );
  };

  return (
    <div className="bg-black text-white min-h-screen p-6">

      <h1 className="text-3xl text-red-600 mb-6">
        🎬 Smart Recommendation System
      </h1>

      {/* INPUT */}
      <input
        className="p-2 text-black mr-4"
        placeholder="Enter title (e.g. Stranger)"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button
        onClick={handleRecommend}
        className="bg-red-600 px-4 py-2"
      >
        Recommend
      </button>

      {/* RESULTS */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {results.map((item, i) => (
          <div key={i} className="bg-gray-900 p-4 rounded-lg">
            <img
              src={item.poster}
              className="w-full h-72 object-cover rounded"
            />
            <h3 className="mt-2">{item.title}</h3>
            <p className="text-gray-400 text-sm">
              {item.listed_in}
            </p>
          </div>
        ))}
      </div>

      {/* EXPLANATION */}
      {explanation && (
        <p className="mt-6 text-gray-400 italic">
          {explanation}
        </p>
      )}

    </div>
  );
}