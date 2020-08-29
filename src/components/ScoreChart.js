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
  console.log(data);
  return (
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
  );
};

export default ScoreChart;
