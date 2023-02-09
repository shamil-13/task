import { React } from "react";
import { generateRandomColor } from "../utils";

const Tile = ({ data }) => {
  return (
    <div className="tile" style={{ background: generateRandomColor() }}>
      <div className="card-title">{data.date}</div>
      <h3 className="card-title">{data.title}</h3>
      <p className="card-content">{data.content}</p>
      <button className="card-btn">Read more</button>
    </div>
  );
};

export default Tile;
