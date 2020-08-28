import React, { useState, useEffect } from "react";
import axios from "axios";

// import ScoreChart from "../components/ScoreChart";

function Home() {
  const [user, setUser] = useState();
  const [scoreChart, setScoreChart] = useState([]);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("line::user"));
    setUser(currentUser);

    // Load chart data
    try {
      loadScoreData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const loadScoreData = async () => {
    const response = await fetch("localhost:8080/review/groupedScores", {
      method: "GET",
      credentials: "include"
    });
    console.log(response);
  };

  if (!user) {
    return <h1>Carregando</h1>;
  }

  return (
    <>
      <button onClick={() => loadScoreData()}>Click to data</button>
      <h1>Olá, {user.firstName}</h1>
    </>
  );
  // return <ScoreChart data={[]} />;
}

export default Home;
