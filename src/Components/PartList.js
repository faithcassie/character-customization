import React from "react";

function PartList({ total, path, set, selected, zoom = 1, top = "50%" }) {
  let parts = [];
  for (let i = 0; i < total; i++) {
    parts.push(
      <div
        key={path + i}
        className={selected === i ? "selected square" : "clickable square"}
        onClick={() => set(i)}
      >
        <img
          alt=""
          src={`character/${path}/${i + 1}.png`}
          height={60 * zoom}
          className="img-selection"
          style={{ top }}
        />
      </div>
    );
  }
  return <div className="list">{parts}</div>;
}

export default PartList;
