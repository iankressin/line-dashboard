import React, { useState, useEffect } from "react";
import axios from "axios";

import UsersTable from "../components/UsersTable";
import ScoreChart from "../components/ScoreChart";

function Home() {
  const [user, setUser] = useState();
  const [scoreData, setScoreData] = useState([]);
  const [userScore, setUserScore] = useState([]);
  const [selectedScore, setSelectedScore] = useState();

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("line::user"));
    setUser(currentUser);

    try {
      loadScoreData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    if (!selectedScore) return;

    try {
      loadUserScoreData();
    } catch (error) {
      console.log("Error: ", error);
    }
  }, [selectedScore]);

  const loadScoreData = async () => {
    const response = await axios("http://localhost:8080/review/groupedScores", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("line::token")}`
      }
    });

    setScoreData(response.data.scores);
  };

  const loadUserScoreData = async () => {
    const response = await axios(
      `http://localhost:8080/review/groupedUsersByScore/${selectedScore}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("line::token")}`
        }
      }
    );

    console.log(response.data.users);

    setUserScore(response.data.users);
  };

  const onBarClick = barId => {
    setSelectedScore(barId.x);
  };

  if (!user) {
    return <h1>Carregando</h1>;
  }

  return (
    <>
      <ScoreChart data={scoreData} onBarClick={onBarClick} />
      <UsersTable title={`Score ${selectedScore}`} userData={userScore} />
    </>
  );
}

export default Home;
