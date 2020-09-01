import React, { useState, useEffect } from "react";
import axios from "axios";

const PlaceData = () => {
  const [placeData, setPlaceData] = useState({});

  useEffect(() => {
    try {
      loadPlaceData();
    } catch (error) {
      console.log("Error: ", error);
    }
  }, []);

  const loadPlaceData = async () => {
    const user = JSON.parse(localStorage.getItem("line::user"));
    const response = await axios.get(
      `http://localhost:8080/place/${user.placeId}`
    );

    console.log("Place: ", response.data);
    setPlaceData(response.data);
  };

  const avarageWaitingTimeToMinutes = () => {
    return (placeData.avarageWaitingTime / 60000).toFixed(2);
  };

  return (
    <div
      class="max-w-sm rounded overflow-hidden shadow-lg w-64"
      style={{ width: 400, height: 380 }}
    >
      <div class="text-center font-bold text-xl mb-2">Estabelecimento</div>
      <div class="px-6 py-4 text-center justify-center align-center flex-column">
        <p class="text-gray-700 text-base text-center mb-4">
          O tempo médio de espera é:
        </p>
        <div class="rounded-full m-auto justify-center align center flex w-32 h-32 bg-gray-200">
          <div class="text-center m-auto">
            <div>
              <span class="text-xl ">{avarageWaitingTimeToMinutes()}</span>
            </div>
            <div>
              <span class="text-xl">minutos</span>
            </div>
          </div>
        </div>
        <div class="text-center my-6">
          <span class="text-xl mr-1">{placeData.totalUses}</span>
          <spam class="text-gray-700 text-base text-center my-6">
            pessoas passaram pela fila
          </spam>
        </div>
      </div>
    </div>
  );
};

export default PlaceData;
