
# 🎬 React Movie App

A sleek and responsive movie discovery app built with **React**, **Tailwind CSS**, **Vite**, and **Appwrite**. It allows users to search movies via the TMDB API and view trending movies based on search popularity.

🌐 **Live Demo**: [react-movie.vercel.app](https://react-movie-6m1vqkdwj-ankitmishra2006s-projects.vercel.app/)

---

## 📸 Features

- 🔍 **Search Movies** — Find thousands of movies from the TMDB database.
- 📈 **Trending Section** — Displays top 5 most searched movies via Appwrite.
- 🌟 **Movie Cards** — View poster, rating, language, and release year.
- ⏱ **Debounced Search** — Efficient search using `react-use` debounce hook.
- 🎨 **Modern UI** — Styled with Tailwind CSS and gradient text effects.
- ☁️ **Appwrite Integration** — Stores and tracks most searched movies.
- 🌀 **Loading Spinner** — UX-friendly loader while fetching data.

---

## 🛠 Tech Stack

| Tech           | Usage                         |
|----------------|-------------------------------|
| React          | Frontend UI Framework         |
| Vite           | Fast bundler & dev server     |
| Tailwind CSS   | Styling                       |
| Appwrite       | Backend as a service (BaaS)   |
| TMDB API       | Movie data & search           |
| React Use      | Debounce hook for search      |

---

## 📂 Project Structure

```
src/
  components/
    MovieCard.jsx      # Card UI for individual movie
    Search.jsx         # Search bar component
    Spinner.jsx        # Loader animation
  App.jsx              # Main application component
  appwrite.js          # Appwrite SDK integration
  index.css            # Tailwind styles
  main.jsx             # React DOM rendering
public/
  search.svg           # Icon for search input
  star.svg             # Rating star icon
```

---

## 🔐 Environment Variables

Add a `.env` file with the following keys:

```env
VITE_TMDB_API_KEY=<your_tmdb_api_key>
VITE_APPWRITE_PROJECT_ID=<your_appwrite_project_id>
VITE_APPWRITE_DATABASE_ID=<your_appwrite_database_id>
VITE_APPWRITE_COLLECTION_ID=<your_appwrite_collection_id>
```

---

## 🧪 Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

---

## 📤 Deployment

Deployed on **Vercel** — easily deploy by connecting your GitHub repo and setting the required environment variables.

---

## 💡 Future Improvements

- Add pagination for movie results.
- Display more movie details on click.
- User authentication using Appwrite.
- Save favorite movies per user.

---

## 📜 License

MIT

---

## 👤 Author

**Ankit Mishra**  
[GitHub](https://github.com/ankitmishra2006)
