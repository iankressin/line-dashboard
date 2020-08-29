import React, { useState, useEffect } from "react";
import axios from "axios";

const Nps = () => {
  const [npsData, setNpsData] = useState({});

  useEffect(() => {
    try {
      loadNpsData();
    } catch (error) {
      console.log("Error: ", error);
    }
  }, []);

  const loadNpsData = async () => {
    const token = localStorage.getItem("line::token");
    const response = await axios.get("http://localhost:8080/review/nps", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    setNpsData(response.data);
  };

  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <div class="text-center font-bold text-xl mb-2">NPS</div>
      <div class="px-6 py-4 text-center justify-center align-center flex-column">
        <p class="text-gray-700 text-base text-center mb-3">
          O score atual do seu estabelecimento é
        </p>
        <div class="rounded-full m-auto justify-center align center flex w-32 h-32 bg-gray-200">
          <span class="text-xl text-center m-auto">{npsData.nps}</span>
        </div>
      </div>
      <div class="px-6 pt-4 pb-2 ">
        <span class="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Promotores: {npsData.promoters}
        </span>
        <span class="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Detratores: {npsData.detractors}
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Neutros: {npsData.neutrals}
        </span>
        <span class="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Total: {npsData.total}
        </span>
      </div>
    </div>
  );
};

export default Nps;
