Netflix Recommendation System

 Overview
A content-based recommendation system that suggests similar movies and TV shows using TF-IDF vectorization and cosine similarity.

Features
- Processed 8800+ Netflix titles  
- Generated 18K+ TF-IDF features  
- Built similarity matrix (8807 × 8807)  
- Provides content-based recommendations  
- Supports genre-based filtering  
 How It Works
- Converts movie metadata (title, genre, description) into numerical vectors using TF-IDF  
- Computes similarity between titles using cosine similarity  
- Recommends top similar movies based on user input  

 Tech Stack
- Python  
- Pandas, NumPy  
- Scikit-learn  
- (Flask / UI if you used one)

 Project Structure
netflix-recommendation-system/
│
├── app.py
├── recommender.py
├── netflix_titles.csv
├── requirements.txt
├── README.md
