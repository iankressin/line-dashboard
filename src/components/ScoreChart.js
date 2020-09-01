import React from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries
} from "react-vis";

const ScoreChart = ({ data, onBarClick }) => {
  return (
    <div
      class="max-w-sm rounded overflow-hidden shadow-lg w-64"
      style={{ width: 400, height: 380 }}
    >
      <div class="text-center font-bold text-xl mb-2">Avaliações</div>
      <XYPlot margin={{ bottom: 70 }} xType="ordinal" width={300} height={300}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis tickLabelAngle={-45} />
        <YAxis />
        <VerticalBarSeries
          onValueClick={onBarClick}
          data={data.map(score => {
            return { x: score._id, y: score.count };
          })}
        />
      </XYPlot>
      <div class="px-6 pb-3 ">
        <span class="text-gray-700">Clique em um score para mais detalhes</span>
      </div>
    </div>
  );
};

export default ScoreChart;
