import data from "@/data/netflix.json";
import natural from "natural";

const TfIdf = natural.TfIdf;

function cleanText(text: string) {
  return text.toLowerCase().replace(/[^\w\s]/g, "");
}

export function getMLRecommendations(title: string) {
  const tfidf = new TfIdf();

  data.forEach((item: any) => {
    tfidf.addDocument(cleanText(item.description || ""));
  });

  const index = data.findIndex(
    (item: any) => item.title.toLowerCase() === title.toLowerCase()
  );

  if (index === -1) return [];

  const scores: any[] = [];

  data.forEach((item: any, i: number) => {
    const genreMatch =
      item.listed_in?.toLowerCase().includes(
        data[index].listed_in?.split(",")[0].toLowerCase()
      )
        ? 1
        : 0;

    const mlScore = tfidf.tfidf(
      cleanText(data[index].description || ""),
      i
    );

    const finalScore = mlScore * 0.5 + genreMatch * 0.5;

    scores.push({
      index: i,
      score: finalScore,
    });
  });

  return scores
    .sort((a, b) => b.score - a.score)
    .slice(1, 12)
    .map((s) => data[s.index]);
}