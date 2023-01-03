import React from "react";
import Part from "./Part";

function Avatar({
  body,
  eyes,
  hair,
  clothing1,
  clothing2,
  clothing3,
  mouth,
  eyebrow,
  glasses,
  earings,
  hat,
  neckwear,
}) {
  return (
    <div className="avatar">
      <Part path="body" index={body} zIndex={0} />
      <Part path="eyes" index={eyes} zIndex={1} />
      <Part path="hair" index={hair} zIndex={3} />
      <Part path="clothes/layer_1" index={clothing1} zIndex={2} />
      <Part path="clothes/layer_2" index={clothing2} zIndex={3} />
      <Part path="clothes/layer_3" index={clothing3} zIndex={4} />
      <Part path="mouths" index={mouth} zIndex={1} />
      <Part path="eyebrows" index={eyebrow} zIndex={1} />
      <Part path="accessories/glasses" index={glasses} zIndex={2} />
      <Part path="accessories/earings" index={earings} zIndex={2} />
      <Part path="accessories/hats" index={hat} zIndex={4} />
      <Part path="accessories/neckwear" index={neckwear} zIndex={5} />
    </div>
  );
}

export default Avatar;
