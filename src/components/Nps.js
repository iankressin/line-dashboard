import React, { useState, useEffect } from "react";
import axios from "axios";

const Nps = () => {
  const [npsData, setNpsData] = useState({});

  useEffect(() => {}, []);

  const loadNpsData = async () => {
    const token = localStorage.getItem("line::toke");
    const response = await axios.get("localhost:8080/review/nps", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  };
};

export default Nps;
