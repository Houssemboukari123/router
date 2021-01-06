import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import AddMovie from "./Components/AddMovie";
import MovieCard from "./Components/MovieCard";
import { BrowserRouter, Route } from "react-router-dom";
import Trailer from "./Components/Trailer";

function App(props) {
  const [Movies, setMovies] = useState([
    {
      title: "Max Payne",
      description:
        "Coming together to solve a series of murders in New York City are a police detective and an assassin, who will be hunted by the police, the mob, and a ruthless corporation.",
      posterURL:
        "https://media.senscritique.com/media/000004416074/source_big/Max_Payne.jpg",
      rate: "4",
      trailerLink: "https://www.youtube.com/watch?v=GklHaGfncJI",
    },
    {
      title: "Prince of persia",
      description:
        "A young fugitive prince and princess must stop a villain who unknowingly threatens to destroy the world with a special dagger that enables the magic sand inside to reverse time.",
      posterURL:
        "https://media.senscritique.com/media/000000153126/source_big/Prince_of_Persia_Les_Sables_du_temps.jpg",
      rate: "5",
      trailerLink: "https://www.youtube.com/watch?v=bZ7Li5w2I-k",
    },
    {
      title: "Grownups2",
      description:
        "After moving his family back to his hometown to be with his friends and their kids, Lenny finds out that between old bullies, new bullies, schizo bus drivers, drunk cops on skis, and four hundred costumed party crashers sometimes crazy follows you. ",
      posterURL:
        "https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/chameleon/title-movie/357496_GrownUps_2_1400x2100_0.jpg",
      rate: "3",
      trailerLink: "https://www.youtube.com/watch?v=a_c3hW0Uyvc",
    },
  ]);

  const Add = (title, description, posterURL, rate, trailerLink) => {
    setMovies([
      ...Movies,
      {
        title: title,
        description: description,
        posterURL: posterURL,
        rate: rate,
        trailerLink: trailerLink,
      },
    ]);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Route
          exact
          path="/"
          render={(props) => <MovieCard Movies={Movies} {...props} />}
        />
        <Route
          exact
          path="/"
          render={(props) => <AddMovie Add={Add} {...props} />}
        />
        <Route
          path="/trailer/:title"
          render={(props) => <Trailer Movies={Movies} {...props} />}
        />
        {console.log(props)}
      </BrowserRouter>
    </div>
  );
}

export default App;
