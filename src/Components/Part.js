import React from "react";

function Part({ path, index, zIndex }) {
  return (
    <img
      src={`character/${path}/${index + 1}.png`}
      alt=""
      width={200}
      style={{ zIndex, position: "absolute" }}
    />
  );
}

export default Part;
