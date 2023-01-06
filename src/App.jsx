// import { useState } from "react";
import useStyles from "./Styles";
import { CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";

// TODO User Components
import {
  Actors,
  NavBar,
  MovieInformation,
  Movies,
  Profile,
} from "./components/indexComponents";

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route exact path="/" element={<Movies />} />
          <Route exact path="/movie/:id" element={<MovieInformation />} />
          <Route exact path="/actors/:id" element={<Actors />} />
          <Route exact path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
