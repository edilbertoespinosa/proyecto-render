import React from "react";

function ChartRow(props) {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.description}</td>
      <td>{props.genres.description}</td>
      <td>{props.classifications.description}</td>
    </tr>
  );
}

export default ChartRow;
